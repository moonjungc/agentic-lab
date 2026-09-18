const test = require('node:test');
const assert = require('node:assert/strict');
const { refund } = require('../src/payments/refund');

test('refund - processes a valid order and deducts a 5% fee', () => {
  const result = refund({ id: 'order-1', amount: 1000000 });
  assert.equal(result.orderId, 'order-1');
  assert.equal(result.requestedAmount, 1000000);
  assert.equal(result.feeAmount, 50000);
  assert.equal(result.refundedAmount, 950000);
  assert.equal(result.status, 'refunded');
});

test('refund - fee is floored, not rounded, on fractional percentages', () => {
  // 1233 * 0.05 = 61.65 -> floor = 61 (round would give 62)
  const result = refund({ id: 'order-4', amount: 1233 });
  assert.equal(result.feeAmount, 61);
  assert.equal(result.refundedAmount, 1172);
});

test('refund - rejects a zero amount', () => {
  assert.throws(() => refund({ id: 'order-2', amount: 0 }), /positive number/);
});

test('refund - rejects a negative amount', () => {
  assert.throws(() => refund({ id: 'order-3', amount: -500 }), /positive number/);
});
