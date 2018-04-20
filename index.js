/*
 * This is the entry point of the app. We render the redux provider with the routes inside of the
 * app wrapper.
 * @flow
 */

import Expo from 'expo';
import * as React from 'react';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import Routes from './src/routes';
import store from './src/store';
import { App } from './src/containers';
import globalStyles from './src/styles';

// Setup global stylesheet variables
EStyleSheet.build(globalStyles);

function Index(): React.Node {
  return (
    <Provider store={store}>
      <App>
        <Routes />
      </App>
    </Provider>
  );
}

// Set router as the root
Expo.registerRootComponent(Index);
