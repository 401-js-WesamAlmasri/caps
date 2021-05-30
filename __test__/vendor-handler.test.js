'use strict';

const vendorHandelrs = require('../vendor/vendor-handler');

describe('Vendor event handlers', () => {
  let consoleSpy;
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

  it('should calls delevered handler correctly', () => {
    // Arrange
    // Act
    vendorHandelrs.deleveredHnadler(payload);
    jest.runAllTimers();
    // Assert
    expect(consoleSpy).toBeCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith(
      `VENDOR: Thank you for delivering ${payload.orderId}`
    );
  });
});
