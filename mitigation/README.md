# Mitigations

## Chrome Driver Extension

The Chrome Driver Extension provides a security layer between Logitech HID devices and websites, preventing unauthorized access to sensitive device functions such as onboard memory manipulation via the WebHID API. It uses encapsulation techniques to block malicious actions while allowing safe interactions.

## Minimal Driver

The Minimal Driver offers a lightweight demonstration of the Chrome Driver Extension's core functionality without requiring installation. It directly modifies WebHID API methods within the browser context to prevent exploitation, serving as a reference implementation for the full extension.

## Usage-based Mitigation

This mitigation modifies the Blink(1) firmware to restrict access to sensitive functionality via WebHID by placing it under a reserved Usage Page (0xdead). This approach requires minimal firmware changes and ensures that certain operations, like rebooting to bootloader mode, are not accessible to WebHID.

## Threat Estimator Tool

The `tool.html` file provides a simple tool to assess the exploitability of connected HID devices through the WebHID API. It checks for key indicators of vulnerability such as keyboard usage implementation and the presence of output or feature reports. Devices lacking these features are considered safe from WebHID exploitation, while those supporting high-capacity reports are more likely to be reprogrammable.