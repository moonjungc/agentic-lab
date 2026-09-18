# 6주차 실습 일지 — 자산 공장

## 완료한 LAB 체크리스트
- [x] LAB 01: CLAUDE.md 헌법
- [x] LAB 02: AI-Ready 채점
- [x] LAB 05: Team Plugin (luna-toolkit)
- [x] LAB 06: TDD 가드 훅
- [x] LAB 10: 가드레일 (Prevent)

## LAB별 기록
### LAB 01: CLAUDE.md 헌법
- 산출물 경로: `CLAUDE.md`
- 핵심 증거: `capture_lab01_rephrase.png` (재구술 요약 답변)
- 관찰 한 줄: 지침을 자연어로 둘 때보다 4원칙 중심의 행동 규범으로 상단에 올렸을 때 에이전트의 자기 역할 인식이 명확해졌다.

### LAB 02: AI-Ready 채점
- 산출물 경로: `.claude/skills/repo-grade/SKILL.md`
- 핵심 증거: `capture_lab02_grade_before.png`, `capture_lab02_grade_after.png` (점수 전/후 비교)
- 관찰 한 줄: 루브릭으로 점수화하니 모호했던 저장소 개선 우선순위(ROI)가 수치로 드러나 즉시 조치할 수 있었다.

### LAB 06: TDD 가드 훅
- 산출물 경로: `scripts/hooks/tdd-guard.sh`, `.claude/settings.json`
- 핵심 증거: `capture_lab06_tdd_deny.png` (TDD GUARD 차단 로그)
- 관찰 한 줄: 헌법에 적는 것은 부탁이지만, 훅으로 가로막는 것은 물리적 법칙이 되어 에이전트가 즉시 테스트 먼저 작성으로 회항했다.

### LAB 10: 가드레일
- 산출물 경로: `.claude/settings.json` (Bash matcher 훅)
- 핵심 증거: `capture_lab10_blocked.png` (BLOCKED 로그)
- 관찰 한 줄: rm -rf 같은 치명적인 위험 명령을 기계가 실행 전 차단함으로써 자율 코딩 환경의 최소 안전망이 확보되었다.

### LAB 05: Team Plugin
- 산출물 경로: `../luna-plugin/`
- 핵심 증거: `capture_lab05_help.png` (/help 내 /repo-grade 노출 화면)
- 관찰 한 줄: 개인 머신에 흩어져 있던 스킬과 훅이 플러그인이라는 패키지로 묶여 팀 전체가 2줄로 구독하는 표준이 되었다.

## 종합 관찰 3줄
1. 규칙 문서는 사람이 기억하거나 에이전트에게 부탁하는 용도가 아니라, 훅과 스킬을 통해 기계적으로 강제될 때 비로소 자산이 된다.
2. 저장소의 상태를 점수로 정량화하고 가드레일을 치는 과정이 에이전트의 작업 성공률을 높이는 핵심 인프라임을 체감했다.
3. 플러그인 규격을 통해 개인이 만든 도구가 팀 전체의 공용 표준으로 즉시 확장될 수 있음을 확인했다.


