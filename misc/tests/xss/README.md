# XSS Test

This application tests if WebHID can send reports without user interaction from an XSS vulnerability.
It addresses the Apple Keyboard Backlight.

Run `python -m http.server` and visit `localhost:8000/#blink()`