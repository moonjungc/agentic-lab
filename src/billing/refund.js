// amount is in whole won (e.g. 10000 = 10,000 won)
function refund(order) {
  if (!order.amount) {
    console.log('[refund] skipped order ' + order.id + ' - no amount');
    return { orderId: order.id, refundedAmount: 0, status: 'skipped' };
  }

  console.log('[refund] processing order ' + order.id + ' amount=' + order.amount);

  var result = {
    orderId: order.id,
    refundedAmount: order.amount,
    status: 'refunded'
  };

  console.log('[refund] processed order ' + order.id + ' amount=' + order.amount);

  return result;
}

module.exports = { refund: refund };
