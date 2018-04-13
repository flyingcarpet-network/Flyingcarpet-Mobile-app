/*
 * This is the app container that wraps around the router. All scenes are rendered inside of this
 * container--as its children. This container handles the loading of asynchronous assets (such as
 * fonts and images) and also handles displaying the top status bar.
 * @flow
 */

import * as React from 'react';
import { Platform, StatusBar, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Expo, { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import styles from './App-styles';
import * as appInfoActions from '../../actions/appInfo';

type Props = {
  isLoadingComplete: boolean,
  setIsLoadingComplete: boolean => {},
  children?: React.Node
};

class App extends React.Component<Props> {
  render(): React.Node {
    const { children, isLoadingComplete } = this.props;

    if (!isLoadingComplete) { // If the assets are still loading, show a loading screen
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else { // If the assets are loaded, show the status bar and the children (router scene)
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
          {Platform.OS === 'android' && <View style={styles.androidStatusBarUnderlay} />}
          {children}
        </View>
      );
    }
  }

  _loadResourcesAsync = async (): Promise<Array<void>> => {
    // Here we list all of the assets to be pre-loaded
    return Promise.all([
      // Asset.loadAsync([
      //   require('./assets/images/robot-dev.png'),
      //   require('./assets/images/robot-prod.png'),
      // ]),
      // Font.loadAsync({
      //   // This is the font that we are using for our tab bar
      //   ...Ionicons.font,
      //   // We include SpaceMono because we use it in HomeScreen.js. Feel free
      //   // to remove this if you are not using it in your app
      //   'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      // }),
    ]);
  };

  _handleLoadingError = (error: string): void => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = (): void => {
    const { setIsLoadingComplete } = this.props;
    // Now we mark the loading as complete in redux
    setIsLoadingComplete(true);
  };
}

export default connect(
  state => ({
    isLoadingComplete: state.appInfo.isLoadingComplete
  }),
  dispatch => ({
    setIsLoadingComplete: bindActionCreators(appInfoActions.setIsLoadingComplete, dispatch)
  })
)(App);
