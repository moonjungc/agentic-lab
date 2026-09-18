// price is in minor units, i.e. 1/100 won (e.g. 1000000 = 10,000 won)
// rate is a fraction between 0 and 1 (e.g. 0.1 = 10%)

function applyCoupon(price, rate) {
  if (typeof price !== 'number' || price <= 0) {
    throw new Error('price must be a positive number');
  }
  if (typeof rate !== 'number' || rate <= 0 || rate > 1) {
    throw new Error('rate must be a number between 0 and 1');
  }

  // discount is floored, consistent with the fee rounding rule in docs/payment-rules.md
  const discountAmount = Math.floor(price * rate);
  const discountedPrice = price - discountAmount;

  return { price, discountAmount, discountedPrice };
}

module.exports = { applyCoupon };
