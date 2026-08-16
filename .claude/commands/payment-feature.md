추가할 결제 기능: $ARGUMENTS

아래 워크플로우를 순서대로 따른다.

1. `CLAUDE.md`, @GOLDEN_RULES.md, @docs/payment-rules.md를 먼저 읽는다.
2. `src/payments/`에서만 작업한다. `src/billing/`, `src/old/`는 DEPRECATED이므로 수정도 참조도 하지 않는다.
3. 금액은 항상 전(minor unit, 1/100원) 정수로 다룬다.
4. 결제 관련 로그는 `lib/logger.js`의 `logPayment()`로만 남긴다.
5. `tests/`에 이번 기능을 검증하는 새 테스트를 추가한다.
6. `npm test`를 실행한다.
7. 실패하면 traceback을 읽고 원인을 수정한 뒤 다시 실행한다. 통과할 때까지 반복한다.
8. 통과하면 변경 사항을 요약해 보고한다.
