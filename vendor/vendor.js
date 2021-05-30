'use strict';

const faker = require('faker');
const events = require('../event');
const vendorHandlers = require('./vendor-handler');

const storeName = process.env.STORE_NAME || 'JOCO';

// Make a fake order every 5 second
setInterval(() => {
  const order = {
    storeName: storeName,
    orderId: faker.datatype.uuid(),
    customerName: faker.name.findName(),
    address: faker.address.streetAddress(),
  };

  events.emit('pickup', order);
}, 5000);

// Monitor the system for events (on deleverd)
events.on('delivered', vendorHandlers.deleveredHnadler);
