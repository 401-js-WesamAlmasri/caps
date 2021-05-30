'use strict';

const capsHandelrs = require('../caps-handler');

describe('Caps event handlers', () => {
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
    jest.useFakeTimers();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should calls pickup monitor handler correctly', () => {
    // Arrange
    // Act
    capsHandelrs.onPickupMonitor(payload);
    jest.runAllTimers();
    // Assert
    expect(consoleSpy).toBeCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith('EVENT', {
      event: 'pickup',
      time: expect.any(String),
      payload,
    });
  });

  it('should calls in transit monitor handler correctly', () => {
    // Arrange
    // Act
    capsHandelrs.onInTransitMonitor(payload);
    jest.runAllTimers();
    // Assert
    expect(consoleSpy).toBeCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith('EVENT', {
      event: 'in-transit',
      time: expect.any(String),
      payload,
    });
  });
  it('should calls in deleverd monitor handler correctly', () => {
    // Arrange
    // Act
    capsHandelrs.onDeliveredMonitor(payload);
    jest.runAllTimers();
    // Assert
    expect(consoleSpy).toBeCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith('EVENT', {
      event: 'delivered',
      time: expect.any(String),
      payload,
    });
  });
});
