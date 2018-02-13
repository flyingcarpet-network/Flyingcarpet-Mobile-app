/*
 * This is the entry point of the app. We render the redux provider with the routes inside of the app wrapper.
 */

import Expo from 'expo';
import React from 'react';
import Routes from './src/routes';
import { Provider } from 'react-redux';
import store from './src/store';
import { App } from './src/containers';

class Index extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <App><Routes /></App>
      </Provider>
    );
  }
}

// Set router as the root
Expo.registerRootComponent(Index);
