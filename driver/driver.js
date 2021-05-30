'use strict';

const events = require('../event');
const driverHandlers = require('./driver-handler');

// Monitor the system for events (on pickup, in-transit)

events.on('pickup', driverHandlers.pickUpHandler);
events.on('in-transit', driverHandlers.inTransitHandler);
