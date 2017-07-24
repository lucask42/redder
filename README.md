## Table of Contents
* [About](#about)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Install and Run](#install-and-run)
* [Troubleshooting](#troubleshooting)
  * [QR Code does not scan](#qr-code-does-not-scan)

## `About`

redder is a slim reddit reader mobile app built using React-Native and Redux.

## `Getting Started`

### `Prerequisites`

To run this app you will need to install the Expo app on an iOS or Android mobile device.

### `Install and Run`

After installing and opening the Expo app on your mobile - touch 'Scan QR Code' in the 'Projects' tab.  

Scan this code:

![Expo QR Code](/src/assets/QRCode.png)






## Troubleshooting


### QR Code does not scan

If you're not able to scan the QR code, make sure your phone's camera is focusing correctly, and also make sure that the contrast on the two colors in your terminal is high enough. For example, WebStorm's default themes may [not have enough contrast](https://github.com/react-community/create-react-native-app/issues/49) for terminal QR codes to be scannable with the system barcode scanners that the Expo app uses.

If this causes problems for you, you may want to try changing your terminal's color theme to have more contrast, or running Create React Native App from a different terminal. You can also manually enter the URL printed by the packager script in the Expo app's search bar to load it manually.
