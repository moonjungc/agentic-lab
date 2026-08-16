# 결제 규칙 — 환불(Refund)

대상 코드: `src/payments/refund.js` (다른 refund 구현은 [CLAUDE.md](../CLAUDE.md) 참조하여 사용 금지)

## 금액 단위

모든 금액은 **전(minor unit, 1/100원) 정수**로 취급한다. 예: `10,000원` = `1000000`.

## 수수료 계산 원칙

- 환불 수수료는 **요청 금액(`requestedAmount`)의 5%**.
- `feeAmount = Math.floor(requestedAmount * 0.05)` — 소수점은 반올림 없이 내림(버림)하여 정수 minor unit으로 맞춘다.
- 실환불액은 `refundedAmount = requestedAmount - feeAmount`.
- 세 값(`requestedAmount`, `feeAmount`, `refundedAmount`) 모두 결과 객체에 포함한다. 로그에는 `logPayment()`의 스키마(단일 `amount_minor` 필드) 제약상 `feeAmount`, `refundedAmount`를 각각 별도 이벤트(`refund.fee_charged`, `refund.processed`)로 남긴다.

## 검증

- `order.amount`는 `number` 타입이며 `0`보다 커야 한다.
- 조건을 만족하지 못하면 환불을 진행하지 않고 즉시 에러를 던진다.

## 에러 처리

- 검증 실패 시 `logPayment()`로 실패 이벤트(`refund.rejected`)를 남긴 뒤 `Error`를 throw한다.
- 정상 처리 시 `logPayment()`로 성공 이벤트(`refund.processed`)를 남긴다.
- 수수료 계산이나 로깅 로직에서 예외를 삼키지 말 것 — 실패는 항상 호출자에게 전파한다.
