'use strict';

function deleveredHnadler(payload) {
  console.log(`VENDOR: Thank you for delivering ${payload.orderId}`);
}

module.exports = {
  deleveredHnadler,
};
