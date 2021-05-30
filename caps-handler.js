'use strict';

function onPickupMonitor(payload) {
  const date = new Date();
  console.log('EVENT', {
    event: 'pickup',
    time: date.toISOString(),
    payload,
  });
}

function onInTransitMonitor(payload) {
  const date = new Date();
  console.log('EVENT', {
    event: 'in-transit',
    time: date.toISOString(),
    payload,
  });
}

function onDeliveredMonitor(payload) {
  const date = new Date();
  console.log('EVENT', {
    event: 'delivered',
    time: date.toISOString(),
    payload,
  });
}

module.exports = {
  onPickupMonitor,
  onInTransitMonitor,
  onDeliveredMonitor,
};
