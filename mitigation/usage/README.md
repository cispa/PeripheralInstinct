# Usage-based Mitigation

This mitigation modifies the Blink(1) firmware to restrict access to sensitive functionality via WebHID by placing it under a reserved Usage Page (0xdead). This approach requires minimal firmware changes and ensures that certain operations, like rebooting to bootloader mode, are not accessible to WebHID.

### Blink(1)

This demonstration modifies the firmware of the Blink(1) which can be found in [this repository](https://github.com/todbot/blink1mk3).

```bash
git clone https://github.com/todbot/blink1mk3.git
cd blink1mk3
git apply firmware.patch
```
Afterwards compile and flash the firmware as described in the [README](https://github.com/todbot/blink1mk3/blob/master/firmware/README.md).

### Chromium

Further, we have to extend the Chromium HID blocklist, which lives in [/chromium/src/services/device/public/cpp/hid/hid_blocklist.cc](https://chromium.googlesource.com/chromium/src/+/aedde69d0f67167086e02ca541ed0a98c80d3fd3/services/device/public/cpp/hid/hid_blocklist.cc).

Add this rule:
```cpp
{false, /*vendorId=*/0, false, /*productId=*/0, true, /*usagePage=*/0xdead, false, /*usageID=*/0, false, /*reportId=*/0, HidBlocklist::ReportType::kReportTypeAny}
```

Now compile Chromium (see [instructions](https://chromium.googlesource.com/chromium/src/+/HEAD/docs/linux/build_instructions.md)).
Playing around with the Report IDs in the application you should observe the following:

```js
await device.sendFeatureReport(1,Uint8Array.from([0x47, 0x6f, 0x42, 0x6f, 0x6f, 0x74, 0])); // this works
await device.sendFeatureReport(3,Uint8Array.from([0x47, 0x6f, 0x42, 0x6f, 0x6f, 0x74, 0])); // this does not
await device.sendFeatureReport(4,Uint8Array.from([0x47, 0x6f, 0x42, 0x6f, 0x6f, 0x74, 0])); // this does not
```
