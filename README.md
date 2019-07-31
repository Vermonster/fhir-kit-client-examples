# Examples using FHIRKit Client outside of Node

The examples in the fhir-kit-client/examples all use NodeJS. Here are a few
that use the library on the client side to help you get started.

All these use FHIRKit Client >= 1.4.0

See the README in each example if you get stuck.

## React `/react`

Basic react app, initialized using create-react app.

Added fhir-kit-client to package.json, and updated App.js and App.css to render
the capability statement when the button is pressed.

NOTE: This uses `yarn`

```
$ cd react
$ yarn install
$ yarn start
```

## Angular `/angular`

Basic angular app. Add fhir-kit-client to package.json. Updated
src/app/app.component.html and .ts and .css. Demonstrates loading the
capability statement.

NOTE: This uses `npm`

```
$ cd angular
$ npm install
$ npm start
```

## React Native `/ReactNativeExample`

Basic react-native app. Added fhir-kit-client to package.json. Then updated
App.js to show capability statement when button is pressed.

NOTE: This uses `yarn`

```
$ cd ReactNativeExample
$ yarn install
$ react-native run-ios
```

