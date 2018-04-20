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
import /* Expo, */ { AppLoading/* , Asset, Font */ } from 'expo';
// Eslint must be disabled for the next line since expo is included in package.json:
// eslint-disable-next-line import/no-extraneous-dependencies
// import { Ionicons } from '@expo/vector-icons';
import styles from './App-styles';
import * as appInfoActions from '../../actions/appInfo';

type Props = {
  isLoadingComplete: boolean,
  setIsLoadingComplete: boolean => {},
  children?: React.Node
};

class App extends React.Component<Props> {
  loadResourcesAsync = async (): Promise<Array<void>> =>
    // Here we list all of the assets to be pre-loaded
    Promise.all([
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
    ])
  ;
  handleLoadingError = (error: string): void => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    // NOTE: We disable eslint console log prevention for ease of implementation for now...
    // eslint-disable-next-line
    console.warn(error);
  };
  handleFinishLoading = (): void => {
    const { setIsLoadingComplete } = this.props;
    // Now we mark the loading as complete in redux
    setIsLoadingComplete(true);
  };
  render(): React.Node {
    const { children, isLoadingComplete } = this.props;

    if (!isLoadingComplete) { // If the assets are still loading, show a loading screen
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      );
    } // If the assets are loaded, show the status bar and the children (router scene)
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
        {Platform.OS === 'android' && <View style={styles.androidStatusBarUnderlay} />}
        {children}
      </View>
    );
  }
}

export default connect(
  state => ({
    isLoadingComplete: state.appInfo.isLoadingComplete,
  }),
  dispatch => ({
    setIsLoadingComplete: bindActionCreators(appInfoActions.setIsLoadingComplete, dispatch),
  }),
)(App);
