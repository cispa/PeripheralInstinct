# Proof-of-Concept Driver Chrome Extension

## Overview

The Driver Chrome Extension introduces an abstraction layer between websites and connected Logitech devices, preventing unauthorized access to sensitive device functionalities. It restricts malicious sites from executing security-relevant actions such as macro programming and firmware updates via the WebHID API.

## How It Works

The extension works by:

1. Injecting a Content Script: The inject.js script injects sdk.js into every page before execution begins.
2. Encapsulating WebHID API Functions: The sdk.js script wraps and restricts functions like sendReport and sendFeatureReport to prevent unauthorized use.
3. Blocking Onboard Memory Access: Detects and blocks requests targeting the onboard memory feature by analyzing HID report packets.
4. Freezing API Properties: Ensures that the WebHID API modifications cannot be bypassed by malicious scripts.

## Installation

1. Download or clone this repository.
2. Open Chrome and navigate to chrome://extensions/.
3. Enable Developer mode (toggle in the top-right corner).
4. Click Load unpacked and select the extension folder.
5. The extension is now active and protecting Logitech devices.

## Files

- manifest.json: Defines extension metadata and permissions.
- inject.js: Injects sdk.js into all web pages.
- sdk.js: Implements the WebHID API security layer.
- icons/: Contains extension icons.