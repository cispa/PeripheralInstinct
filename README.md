# Peripheral Instinct: How External Devices Breach Browser Sandboxes

This repository contains the proof-of-concepts for our paper "Peripheral Instinct: How External Devices Breach Browser Sandboxes" which was presented at The ACM Web Conference 2025.
The paper can be found [here](https://misc0110.net/files/peripheralinstinct_www25.pdf).

The repository is merely a collection of proof-of-concepts and is thus not well-documented, maintained or suitable for direct use.

## Exploit

This part of the repository contains the code that can be used to reprogram devices from the web using different Browser APIs.

We cover the following devices:

- Logitech Devices using HID++ 1.0 and 2.0+
- CH57X-based macropads
- Zelotes Gaming Mouse
- Launchpad MK2 (webmidi)
- Hayes Modem (webserial)

Note that keyboards using the VIA firmware may already be configured from the web via their [own application](https://usevia.app/) which is [open-source](https://github.com/the-via/app).

Further it contains a few payloads for different systems that may occasionally rely on the clipboard.

## Miscellaneous

This part of the repository contains the test and results for the minimal timing differences between macro-emitted keystrokes.
Further it contains a variety of smaller tests that were used to evaluate general permissions of the WebHID API.

## Mitigation

This folder contains the extension-based mitigation that we propose in our paper.

In addition, it contains the proposed tool to identify reprogrammable devices.

Another demonstration modifies the firmware of the Blink(1) which can be found in [this repository](https://github.com/todbot/blink1mk3).
It relies on the Usage to make functionality inaccessible to WebHID.

## Disclaimer

This repository is for educational purposes only.
The authors do not take any responsibility for the misuse of the information provided in this repository.
Do not run the code on devices you do not own or have permission to modify.
We are not responsible for any damage caused by the use of the code in this repository.