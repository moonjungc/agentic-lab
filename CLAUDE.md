# CLAUDE.md — 프로젝트 헌법

이 저장소에서는 항상 존댓말로 답한다.

## 행동 원칙

1. **Think Before Coding** — 불확실하면 추측하지 말고 질문하거나 가정을 명시한 뒤 진행한다.
2. **Simplicity First** — 요청에 필요한 최소한만 구현한다. 과설계·불필요한 추상화 금지.
3. **Surgical Changes** — 요청 범위 밖의 코드·주석은 건드리지 않는다.
4. **Goal-Driven** — 작업 전 검증 방법을 먼저 정하고, 변경 후 `npm test`로 확인한다.

## 절대 규칙

이 저장소에서 작업할 때 반드시 지켜야 할 절대 규칙은 @GOLDEN_RULES.md를 참조.

## 구조

- `src/payments/` — 유일하게 활성화된 결제 코드
- `src/billing/`, `src/old/` — DEPRECATED, 수정·참조 금지
- `lib/logger.js` — 결제 로그는 `logPayment()`만 사용
- `tests/` — `npm test`로 실행되는 테스트

## 명령어

- 테스트 실행: `npm test`

## 세부 규칙 참조

- 결제(환불 등) 세부 규칙: @docs/payment-rules.md
- `src/payments/` 작업 시: @src/payments/.agent-rules.md 도 함께 확인

## 금지사항

- `src/billing/`, `src/old/` 수정·참조 금지
- 결제 로그에 `console.log`/`logInfo`/`logError` 직접 호출 금지 — `logPayment()`만 사용
