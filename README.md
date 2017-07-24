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

1) On a separate mobile or computer load up this webpage: https://expo.io/@lucask42/reddit

2) After installing and opening the Expo app on your mobile - touch 'Scan QR Code' in the 'Projects' tab.  

Scanning the QR Code with the Expo app should load the project on your mobile device.




## Troubleshooting


### QR Code does not scan

If you're not able to scan the QR code, make sure your phone's camera is focusing correctly, and also make sure that the contrast on the two colors in your terminal is high enough. For example, WebStorm's default themes may [not have enough contrast](https://github.com/react-community/create-react-native-app/issues/49) for terminal QR codes to be scannable with the system barcode scanners that the Expo app uses.

If this causes problems for you, you may want to try changing your terminal's color theme to have more contrast, or running Create React Native App from a different terminal. You can also manually enter the URL printed by the packager script in the Expo app's search bar to load it manually.


tasks
[X] Create public github repo
[N/A] authenticate using Oauth
[X] Create a main screen that renders the basic content in a list
[X] Use Redux to get data and update views
[N/A] Use Redux to expand posts
[X] Use React Navigation to change to detail screen
[X] Use back button to navigate back to summary screen
[X] Pull down to refresh
[X] Add placeholder thumbnails for posts without thumbs
[X] Add IOS navigation
[ ] Store response locally for initial view using Redux Persist or AsyncStorage
[X] Test on android
[X] Test on iOS
[X] Finish this README
[X] Submit Friday

[X] Define a default image
