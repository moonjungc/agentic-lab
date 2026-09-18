const test = require('node:test');
const assert = require('node:assert/strict');
const { applyCoupon } = require('../src/payments/coupon');

test('applyCoupon - 10,000원에 10% 할인 적용 시 9,000원', () => {
  // amounts are in minor units (1/100 won): 10,000원 = 1000000, 9,000원 = 900000
  const result = applyCoupon(1000000, 0.1);
  assert.equal(result.discountedPrice, 900000);
});

test('applyCoupon - rate가 0 이하이면 에러', () => {
  assert.throws(() => applyCoupon(1000000, 0), /between 0 and 1/);
  assert.throws(() => applyCoupon(1000000, -0.1), /between 0 and 1/);
});

test('applyCoupon - rate가 1 초과(100% 초과)이면 에러', () => {
  assert.throws(() => applyCoupon(1000000, 1.1), /between 0 and 1/);
});
