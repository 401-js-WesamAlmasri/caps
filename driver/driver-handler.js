'use strict';

const events = require('../event');

function pickUpHandler(payload) {
  setTimeout(() => {
    console.log(`DRIVER: picked up ${payload.orderId}`);
    events.emit('in-transit', payload);
  }, 1000);
}

function inTransitHandler(payload) {
  // Wait 3 seconds and emit delivered event
  setTimeout(() => {
    console.log(`DRIVER: delivered up ${payload.orderId}`);
    events.emit('delivered', payload);
  }, 3000);
}

module.exports = {
  pickUpHandler,
  inTransitHandler,
};
