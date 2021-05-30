'use strict';

const driverHandelrs = require('../driver/driver-handler');
const events = require('../event');

describe('Driver event handlers', () => {
  let consoleSpy;
  let eventsSpy;
  const payload = {
    storeName: 'storeName',
    orderId: 'abcd-1234-abcd-1234',
    customerName: 'wesam almasri',
    address: 'jordan - irbid',
  };

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    eventsSpy = jest.spyOn(events, 'emit').mockImplementation();
    jest.useFakeTimers();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
    eventsSpy.mockRestore();
  });

  it('should calls pickup handler correctly', () => {
    // Arrange
    // Act
    driverHandelrs.pickUpHandler(payload);
    jest.runAllTimers();
    // Assert
    expect(consoleSpy).toBeCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith(
      `DRIVER: picked up ${payload.orderId}`
    );
    expect(eventsSpy).toBeCalledTimes(1);
    expect(eventsSpy).toHaveBeenCalledWith('in-transit', payload);
  });

  it('should calls in transit handler correctly', () => {
    // Arrange
    // Act
    driverHandelrs.inTransitHandler(payload);
    jest.runAllTimers();
    // Assert
    expect(consoleSpy).toBeCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith(
      `DRIVER: delivered up ${payload.orderId}`
    );
    expect(eventsSpy).toBeCalledTimes(1);
    expect(eventsSpy).toHaveBeenCalledWith('delivered', payload);
  });
});
