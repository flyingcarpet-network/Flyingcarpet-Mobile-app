/*
 * Here we setup all of the router and all of the scenes.
 * For reference of the router setup, see: https://github.com/lynndylanhurley/react-native-router-flux#reduxflux
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Actions, Router, Reducer, Scene } from 'react-native-router-flux';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import * as containers from './containers';
import { RightButton } from './components';

// Styles for the navigation bar
const styles = EStyleSheet.create({
  navBarDark: {
    backgroundColor: '$appBackgroundDarkColor'
  },
  titleDark: {
    color: '$appTextDarkColor'
  },
  navBarLight: {
    backgroundColor: '#607D8B'
  },
  titleLight: {
    color: 'white'
  }
});

let darkSceneArguments, lightSceneArguments;

class Routes extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };
  componentWillMount() {
    darkSceneArguments = {
      navigationBarStyle: styles.navBarDark,
      titleStyle: styles.titleDark,
      backButtonTintColor: 'white',
      backButtonTextStyle: styles.titleLight,
      backTitle: 'Back'
    };

    lightSceneArguments = {
      navigationBarStyle: styles.navBarLight,
      titleStyle: styles.titleLight,
      backButtonTintColor: 'white',
      backButtonTextStyle: styles.titleLight
    };
  }
  reducerCreate(params) {
    // This function connects the router to the redux dispatching system
    const defaultReducer = Reducer(params);
    return (state, action) => {
      this.props.dispatch(action)
      return defaultReducer(state, action);
    };
  }
  render () {
    const { sceneTitle, businessType } = this.props;

    return (
      <Router
        createReducer={this.reducerCreate.bind(this)}
      >
        <Scene key="Root">
          <Scene {...lightSceneArguments} key="home" component={containers.Home} />
          <Scene {...lightSceneArguments} key="businessSelect" component={containers.BusinessSelect} title="Business" />
          <Scene key="businessDetails" component={containers.BusinessDetails} title={businessType} {...lightSceneArguments} />
          <Scene key="businessEstimate" component={containers.BusinessEstimate} title={businessType} {...lightSceneArguments} />
          <Scene key="businessExecute" component={containers.BusinessExecute} title="Final" {...lightSceneArguments} />
          <Scene key="droneOwnerDetails" component={containers.DroneOwnerDetails} title="Drone" renderRightButton={<RightButton onPress={() => Actions.droneOwnerAttach()}>Attach New</RightButton>} {...darkSceneArguments} />
          <Scene key="droneOwnerAttach" component={containers.DroneOwnerAttach} title="Add Drone" {...darkSceneArguments} />
          <Scene key="flyingCarpetOwnerDetails" component={containers.FlyingCarpetOwnerDetails} title="Flyingcarpet" renderRightButton={<RightButton onPress={() => Actions.flyingCarpetOwnerAttach()}>Attach New</RightButton>} {...darkSceneArguments} />
          <Scene key="flyingCarpetOwnerAttach" component={containers.FlyingCarpetOwnerAttach} title="Add Flyingcarpet" {...darkSceneArguments} />
        </Scene>
      </Router>
    );
  }
}

Routes.propTypes = {
  businessType: PropTypes.string.isRequired
};

export default connect(
  state => ({
    businessType: state.business.businessType
  })
)(Routes);
