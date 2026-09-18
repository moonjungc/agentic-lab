function logInfo(event, data) {
  console.log(JSON.stringify({ level: 'info', event, ...data, ts: new Date().toISOString() }));
}

function logError(event, data) {
  console.error(JSON.stringify({ level: 'error', event, ...data, ts: new Date().toISOString() }));
}

function logPayment(event, data, level = 'info') {
  const line = JSON.stringify({
    ts: new Date().toISOString(),
    event,
    order_id: data.orderId,
    amount_minor: data.amountMinor,
    currency: data.currency || 'KRW',
    status: data.status
  });

  if (level === 'error') {
    console.error(line);
  } else {
    console.log(line);
  }
}

module.exports = { logInfo, logError, logPayment };
