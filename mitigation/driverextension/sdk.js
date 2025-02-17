
  function freezeProperty(obj, property) {
    Object.defineProperty(obj, property, {
      configurable: false,
      writable: false,
    });
  }

  let wrapSendFeatureReport = function (fn) {
    return async function () {
      let result = await fn.apply(this, arguments);
      return result;
    };
  };

  let wrapSendReport = function (fn, fId) {
    return async function () {
      // fId = 0 means not supported
      if (fId !== 0 && arguments.length === 2 && arguments[1][1] === fId) {
        console.error("[LOGITECH DRIVER] Onboard Memory feature was blocked");
        return Promise.resolve();
      }
      let result = fn.apply(this, arguments);
      return result;
    };
  };

  let wrapDevice = async function (device) {
    console.log("[LOGITECH DRIVER] Device protected!");

    // get feature index of onboard feature (0x8100)
    await device.sendReport(
      0x10,
      Uint8Array.from([0xff, 0x00, 0x0a, 0x81, 0x00, 0x00])
    );
    let res = await new Promise((resolve) => {
      device.oninputreport = (event) => {
        return resolve(new Uint8Array(event.data.buffer));
      };
    });
    let featureIndex = res[3];
    if (featureIndex !== 0)
      console.log(
        "[LOGITECH DRIVER] Blocking onboard memory feature at feature index: ",
        featureIndex
      );

    device["sendReport"] = wrapSendReport(device["sendReport"], featureIndex);
    device["sendFeatureReport"] = wrapSendFeatureReport(
      device["sendFeatureReport"]
    );
    freezeProperty(device, "sendReport");
    freezeProperty(device, "sendFeatureReport");
    return device;
  };

  let wrapAquireDevices = function (fn) {
    return async function () {
      let devices = await fn.apply(this, arguments);

      // TODO: replace sendReport and sendFeatureReport by dummy values to prevent saving them before opening a device

      // only wrap Logitech devices
      return devices.map((device) =>
        device.vendorId === 1133 ? wrapDeviceOpen(device) : device
      );
    };
  };

  let wrapDeviceOpen = function (device) {
    device["open"] = wrapDeviceOpenHelper(device["open"], device);
    return device;
  };

  let wrapDeviceOpenHelper = function (fn, device) {
    return async function () {
      let result = await fn.apply(this, arguments);
      await wrapDevice(device);
      return result;
    };
  };

  window.navigator.hid.requestDevice = wrapAquireDevices(
    window.navigator.hid.requestDevice
  );
  freezeProperty(window.navigator.hid, "requestDevice");
  window.navigator.hid.getDevices = wrapAquireDevices(
    window.navigator.hid.getDevices
  );
  freezeProperty(window.navigator.hid, "getDevices");

  Object.freeze(Array.prototype);
  Object.freeze(Function.prototype);
  Object.freeze(Promise.prototype);

  console.log("[LOGITECH DRIVER] Driver was installed.");
