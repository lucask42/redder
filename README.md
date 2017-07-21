## Table of Contents
* [About](#about)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Install and Run](#install-and-run)
* [Troubleshooting](#troubleshooting)
  * [Request timed out](#request-timed-out)
  * [Localhost does not work](#localhost-does-not-work)
  * [Networking](#networking)
  * [iOS Simulator won't open](#ios-simulator-wont-open)
  * [QR Code does not scan](#qr-code-does-not-scan)

## `About`

redder is a slim reddit reader mobile app built using React-Native and Redux.

## `Getting Started`

### `Prerequisites`

To run this app you will need a computer along with an iOS or Android mobile device.

Before running this app.
  1) The mobile device and computer must be on the same wireless network.
  2) The computer must have Node.js and npm installed.  You can verify by typing into the console:
  
```
$ node -v
```
and
```
$ npm -v
```


### `Install and Run`

Install the Expo app on your iOS or Android device.

Create a local clone of the respository.

Open your terminal and navigate to the folder that contains the cloned repo

Install the app's dependencies:
```
$ npm install
```

After the dependencies have all been downloaded run the start script:
```
$ npm start
```

After a few moments you should see a QR Code.  Open the Expo app on your iOS or Android device and scan the barcode.

This will initiate a build of the project and this may take a couple minutes.  Once built the app should load and display on your device.

## Troubleshooting

### Request timed out

Expo waits until after you scan the barcode to start building the project.  Depending on several factors this build time can take minutes, meanwhile your device may time out.  If this happens watch the terminal window for the build to progress to 100% and then hit the refresh button in the Expo app on your device.

Upon refreshing the main screen of the app should display on your device.

### Localhost does not work

When starting your project, you'll see something like this for your project URL:

```
exp://192.168.0.2:19000
```

The "manifest" at that URL tells the Expo app how to retrieve and load your app's JavaScript bundle, so even if you load it in the app via a URL like `exp://localhost:19000`, the Expo client app will still try to retrieve your app at the IP address that the start script provides.

In some cases, this is less than ideal. This might be the case if you need to run your project inside of a virtual machine and you have to access the packager via a different IP address than the one which prints by default. In order to override the IP address or hostname that is detected by Create React Native App, you can specify your own hostname via the `REACT_NATIVE_PACKAGER_HOSTNAME` environment variable:

Mac and Linux:

```
$ REACT_NATIVE_PACKAGER_HOSTNAME='my-custom-ip-address-or-hostname' npm start
```

Windows:
```
$ set REACT_NATIVE_PACKAGER_HOSTNAME='my-custom-ip-address-or-hostname'
$ npm start
```

The above example would cause the development server to listen on `exp://my-custom-ip-address-or-hostname:19000`.

### Networking

If you're unable to load your app on your phone due to a network timeout or a refused connection, a good first step is to verify that your phone and computer are on the same network and that they can reach each other. Create React Native App needs access to ports 19000 and 19001 so ensure that your network and firewall settings allow access from your device to your computer on both of these ports.

Try opening a web browser on your phone and opening the URL that the packager script prints, replacing `exp://` with `http://`. So, for example, if underneath the QR code in your terminal you see:

```
exp://192.168.0.1:19000
```

Try opening Safari or Chrome on your phone and loading

```
http://192.168.0.1:19000
```

and

```
http://192.168.0.1:19001
```

If this works, but you're still unable to load your app by scanning the QR code, please open an issue on the [Create React Native App repository](https://github.com/react-community/create-react-native-app) with details about these steps and any other error messages you may have received.

If you're not able to load the `http` URL in your phone's web browser, try using the tethering/mobile hotspot feature on your phone (beware of data usage, though), connecting your computer to that WiFi network, and restarting the packager.

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
