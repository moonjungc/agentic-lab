const { logPayment } = require('../../lib/logger');

// amount is in minor units, i.e. 1/100 won (e.g. 1000000 = 10,000 won)
const REFUND_FEE_RATE = 0.05;

// fee is floored (not rounded) per docs/payment-rules.md
function refund(order) {
  if (typeof order.amount !== 'number' || order.amount <= 0) {
    logPayment('refund.rejected', { orderId: order.id, amountMinor: order.amount, status: 'rejected' }, 'error');
    throw new Error('refund amount must be a positive number');
  }

  const requestedAmount = order.amount;
  const feeAmount = Math.floor(requestedAmount * REFUND_FEE_RATE);
  const refundedAmount = requestedAmount - feeAmount;

  const result = {
    orderId: order.id,
    requestedAmount,
    feeAmount,
    refundedAmount,
    status: 'refunded'
  };

  logPayment('refund.fee_charged', { orderId: order.id, amountMinor: feeAmount, status: 'charged' });
  logPayment('refund.processed', { orderId: order.id, amountMinor: refundedAmount, status: result.status });

  return result;
}

module.exports = { refund };
