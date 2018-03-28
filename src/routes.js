/*
 * Here we setup all of the router and all of the scenes.
 * For reference of the router setup, see: https://github.com/lynndylanhurley/react-native-router-flux#reduxflux
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Actions, Router, Reducer, Scene, Lightbox } from 'react-native-router-flux';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { FontAwesome } from '@expo/vector-icons';
import * as containers from './containers';
import { RightButton } from './components';

// Styles for the navigation bar
const styles = EStyleSheet.create({
  navBar: {
    backgroundColor: '$focusAreaLighter'
  },
  title: {
    color: '$white'
  }
});

let sceneArguments;

class Routes extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };
  componentWillMount() {
    sceneArguments = {
      navigationBarStyle: styles.navBar,
      titleStyle: styles.title,
      backButtonTintColor: EStyleSheet.value('$white'),
      backButtonTextStyle: styles.title,
      backTitle: 'Back'
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
        <Lightbox>
          <Scene key="Root" renderRightButton={<RightButton onPress={() => Actions.settingsLightbox()}><FontAwesome name={'cog'} size={28} /></RightButton>}>
            <Scene key="home" component={containers.Home} title="" hideNavBar={true} {...sceneArguments} />
            <Scene key="businessSelect" component={containers.BusinessSelect} title="Business" {...sceneArguments} />
            <Scene key="businessDetails" component={containers.BusinessDetails} title={businessType} {...sceneArguments} />
            <Scene key="businessEstimate" component={containers.BusinessEstimate} title={businessType} {...sceneArguments} />
            <Scene key="businessExecute" component={containers.BusinessExecute} title="Final" {...sceneArguments} />
            <Scene key="droneOwnerDetails" component={containers.DroneOwnerDetails} title="Drone" renderRightButton={<RightButton onPress={() => Actions.droneOwnerAttach()}>Attach</RightButton>} {...sceneArguments} />
            <Scene key="droneOwnerAttach" component={containers.DroneOwnerAttach} title="Add Drone" {...sceneArguments} />
            <Scene key="flyingCarpetOwnerDetails" component={containers.FlyingCarpetOwnerDetails} title="Flyingcarpet" renderRightButton={<RightButton onPress={() => Actions.flyingCarpetOwnerAttach()}>Attach</RightButton>} {...sceneArguments} />
            <Scene key="flyingCarpetOwnerAttach" component={containers.FlyingCarpetOwnerAttach} title="Add Flyingcarpet" {...sceneArguments} />
            <Scene key="flyingCarpetOwnerMap" component={containers.FlyingCarpetOwnerMap} title="Increase Income" {...sceneArguments} />
            <Scene key="flyingCarpetOwnerChannels" component={containers.FlyingCarpetOwnerChannels} title="Flyingcarpet Channels" {...sceneArguments} />
            <Scene key="flyingCarpetOwnerChannelDetails" component={containers.FlyingCarpetOwnerChannelDetails} title="Connected Channel" {...sceneArguments} />
          </Scene>
          {/* Lightbox Scenes */}
          <Scene key="settingsLightbox" component={containers.Settings} />
        </Lightbox>
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
