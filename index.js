/*
 * This is the entry point of the app. We render the redux provider with the routes inside of the app wrapper.
 */

import Expo from 'expo';
import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Routes from './src/routes';
import store from './src/store';
import { App } from './src/containers';
import globalStyles from './src/styles';

// Setup global stylesheet variables
EStyleSheet.build(globalStyles);

class Index extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <App>
          {/* Make the top status bar light colored */}
          <StatusBar
            barStyle="light-content"
          />
          <Routes />
        </App>
      </Provider>
    );
  }
}

// Set router as the root
Expo.registerRootComponent(Index);
