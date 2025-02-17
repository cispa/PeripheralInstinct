# Minimal Mitigation Demo

This `index.html` file demonstrates the core functionality of the Logitech Driver Chrome Extension without requiring an actual extension installation.

## Overview
The included JavaScript encapsulates and overrides the `navigator.hid.requestDevice` and `navigator.hid.getDevices` WebHID API methods directly within the browser context, preventing access to sensitive Logitech device features.

For a fully-featured solution, refer to the Driver Chrome Extension that provides a more robust and persistent implementation using a Chrome extension.

## Usage
Simply open `index.html` in a browser with WebHID support and click the **Start** button to observe the mitigation in action.

This file serves as a quick demonstration and reference for the full extension implementation.

