'use strict';

require('dotenv').config();
const events = require('./event');

// Require all modules
require('./driver/driver');
require('./vendor/vendor');
const {
  onPickupMonitor,
  onInTransitMonitor,
  onDeliveredMonitor,
} = require('./caps-handler');

events.on('pickup', onPickupMonitor);

events.on('in-transit', onInTransitMonitor);

events.on('delivered', onDeliveredMonitor);
