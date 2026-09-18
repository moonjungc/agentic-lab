#!/usr/bin/env bash
set -euo pipefail

node -e '
const fs = require("fs");
const path = require("path");

let raw = "";
process.stdin.on("data", (d) => { raw += d; });
process.stdin.on("end", () => {
  let filePath;
  try {
    const input = JSON.parse(raw || "{}");
    filePath = input.tool_input && input.tool_input.file_path;
  } catch (e) {
    process.exit(0);
  }

  // (a) 경로가 없으면 통과
  if (!filePath) process.exit(0);

  const normPath = filePath.replace(/\\/g, "/");
  const base = path.basename(normPath);
  const baseLower = base.toLowerCase();

  // (a) 파일명에 test가 들어가면 통과
  if (baseLower.includes("test")) process.exit(0);

  // (a) 확장자가 .md/.json/.yml이면 통과
  if (/\.(md|json|yml)$/i.test(base)) process.exit(0);

  // (b) src/ 아래 .js 파일이 아니면 조용히 통과
  const inSrc = /(^|\/)src\//.test(normPath);
  if (!inSrc || !/\.js$/i.test(base)) process.exit(0);

  const name = base.slice(0, -3);
  const dir = path.posix.dirname(normPath);
  const projectDir = process.env.CLAUDE_PROJECT_DIR || ".";

  const isAbs = /^([a-zA-Z]:|\/)/.test(normPath);
  const sameDir = isAbs ? dir : path.join(projectDir, dir);

  const testInTestsDir = path.join(projectDir, "tests", name + ".test.js");
  const testInSameDir = path.join(sameDir, name + ".test.js");

  // (b) 테스트가 있으면 통과
  if (fs.existsSync(testInTestsDir) || fs.existsSync(testInSameDir)) {
    process.exit(0);
  }

  // (c) 없으면 deny JSON 출력
  const reason = "TDD GUARD: " + name + " 테스트가 없습니다. 테스트를 먼저 작성하세요 (예: tests/" + name + ".test.js)";
  const output = {
    hookSpecificOutput: {
      hookEventName: "PreToolUse",
      permissionDecision: "deny",
      permissionDecisionReason: reason
    }
  };
  process.stdout.write(JSON.stringify(output));
  process.exit(0);
});
'
