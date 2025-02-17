# Timing Evaluation

This test uses a `SharedArrayBuffer`-based timer to check for timing differences during the enumeration of devices using the filter properties.
We were not able to find conclusive timing differences that indicate a side channel.

Since the `SharedArrayBuffer` is only enabled in a cross-origin isolated environment use `serve.py` as an HTTP server.

Run `python serve.py` and visit `localhost:8000`.