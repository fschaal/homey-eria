import Homey from 'homey';

class MyDriver extends Homey.Driver {

  /**
   * onInit is called when the driver is initialized.
   */
  async onInit() {
    this.log('Power Analytics Driver Initialized');
  }

  /**
   * onPairListDevices is called when a user is adding a device and the 'list_devices' view is called.
   * This should return an array with the data of devices that are available for pairing.
   */
  async onPairListDevices() {
    return [
      // Example device data, note that `store` is optional
      {
        name: 'Eira Power Analytics Plug',
        data: {
          id: 'adurosmart-eria-power-analytics-plug',
        },
      },
    ];
  }

}

module.exports = MyDriver;
