// Deprecated helpers from the old billing system. Nothing imports this anymore
// but nobody has gotten around to deleting it.

function calculateRefundOld(amount, taxRate, cb) {
  var tax = amount * taxRate;
  var net = amount - tax;
  cb(null, net);
}

function formatKrw(amount) {
  return amount + '원';
}

function isOrderRefundable(order) {
  return order.status == 'paid' && order.amount > 0;
}

var LEGACY_TAX_RATE = 0.1;

module.exports = {
  calculateRefundOld: calculateRefundOld,
  formatKrw: formatKrw,
  isOrderRefundable: isOrderRefundable,
  LEGACY_TAX_RATE: LEGACY_TAX_RATE
};
