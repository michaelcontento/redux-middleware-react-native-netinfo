[redux-middleware-react-native-netinfo][]
==========================================

[![license](https://img.shields.io/npm/l/redux-middleware-react-native-netinfo.svg?style=flat-square)](https://www.npmjs.com/package/redux-middleware-react-native-netinfo)
[![npm version](https://img.shields.io/npm/v/redux-middleware-react-native-netinfo.svg?style=flat-square)](https://www.npmjs.com/package/redux-middleware-react-native-netinfo)
[![npm downloads](https://img.shields.io/npm/dm/redux-middleware-react-native-netinfo.svg?style=flat-square)](https://www.npmjs.com/package/redux-middleware-react-native-netinfo)
[![Code Climate](https://codeclimate.com/github/michaelcontento/redux-middleware-react-native-netinfo/badges/gpa.svg)](https://codeclimate.com/github/michaelcontento/redux-middleware-react-native-netinfo)

Glue [NetInfo][] from [react-native][] to [Redux][].

## Installation

    npm install --save redux-middleware-react-native-netinfo

## Usage

```js
// Just import the middleware and add it to your store
import { createStore, applyMiddleware } from 'redux';
import { middleware as netInfo } from 'redux-middleware-react-native-netinfo';
const createStoreWithMiddleware = applyMiddleware(netInfo)(createStore);

// And in your reducers receive the value
import { TYPE as NET_INFO } from 'redux-middleware-react-native-netinfo';

function netInfoReducer(state = {}, action) {
    switch (action.type) {
        case NET_INFO:
            console.log('NetInfo:', action.payload);

        default:
            return state;
    }
}

```

## Todo

- Write tests for everything!

  [Redux]: https://github.com/gaearon/redux
  [redux-middleware-react-native-netinfo]: https://github.com/michaelcontento/redux-middleware-react-native-netinfo
  [react-native]: https://facebook.github.io/react-native/
  [NetInfo]: https://facebook.github.io/react-native/docs/netinfo.html#content
