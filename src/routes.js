/*
 * Here we setup all of the router and all of the scenes.
 * For reference of the router setup, see: https://github.com/lynndylanhurley/react-native-router-flux#reduxflux
 * @flow
 */

import React from 'react';
import { Actions, Router, Reducer, Scene, Lightbox } from 'react-native-router-flux';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
// Eslint must be disabled for the next line since expo is included in package.json:
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesome } from '@expo/vector-icons';
import * as containers from './containers';
import { RightButton } from './components';

// Styles for the navigation bar
const styles = EStyleSheet.create({
  navBar: {
    backgroundColor: '$focusAreaLighter',
  },
  title: {
    color: '$white',
  },
});

// Define sceneArguments type
let sceneArguments: {
  navigationBarStyle: {},
  titleStyle: string,
  backButtonTintColor: string,
  backButtonTextStyle: string,
  backTitle: string
};

type Props = {
  dispatch: {} => {},
  businessType: string
};

class Routes extends React.Component<Props> {
  componentWillMount() {
    sceneArguments = {
      navigationBarStyle: styles.navBar,
      titleStyle: styles.title,
      backButtonTintColor: EStyleSheet.value('$white'),
      backButtonTextStyle: styles.title,
      backTitle: 'Back',
    };
  }
  reducerCreate(params: {}): {} {
    // This function connects the router to the redux dispatching system
    const defaultReducer: (({}, {}) => {}) = Reducer(params);
    return (state: {}, action: {}) => {
      this.props.dispatch(action);
      return defaultReducer(state, action);
    };
  }
  render() {
    const { businessType } = this.props;

    return (
      <Router
        // Eslint must be disabled for the next line since we do need to use bind in this case:
        // eslint-disable-next-line react/jsx-no-bind
        createReducer={this.reducerCreate.bind(this)}
      >
        <Lightbox>
          <Scene key="Root" renderRightButton={<RightButton onPress={() => Actions.settingsLightbox()}><FontAwesome name="cog" size={28} /></RightButton>}>
            <Scene key="home" component={containers.Home} title="" hideNavBar {...sceneArguments} />
            <Scene key="businessSelect" component={containers.BusinessSelect} title="Business" {...sceneArguments} />
            <Scene key="businessDetails" component={containers.BusinessDetails} title={businessType} {...sceneArguments} />
            <Scene key="businessEstimate" component={containers.BusinessEstimate} title={businessType} {...sceneArguments} />
            <Scene key="businessExecute" component={containers.BusinessExecute} title="Final" {...sceneArguments} />
            <Scene key="droneOwnerDetails" component={containers.DroneOwnerDetails} title="Drone" renderRightButton={<RightButton onPress={() => Actions.droneOwnerAttach()}>Attach</RightButton>} {...sceneArguments} />
            <Scene key="droneOwnerAttach" component={containers.DroneOwnerAttach} title="Add Drone" {...sceneArguments} />
            <Scene key="droneOwnerChannelTypes" component={containers.DroneOwnerChannels} title="Drone ChannelTypes" {...sceneArguments} />
            <Scene key="flyingCarpetOwnerDetails" component={containers.FlyingCarpetOwnerDetails} title="Flyingcarpet" renderRightButton={<RightButton onPress={() => Actions.flyingCarpetOwnerAttach()}>Attach</RightButton>} {...sceneArguments} />
            <Scene key="flyingCarpetOwnerAttach" component={containers.FlyingCarpetOwnerAttach} title="Add Flyingcarpet" {...sceneArguments} />
            <Scene key="flyingCarpetOwnerMap" component={containers.FlyingCarpetOwnerMap} title="Increase Income" {...sceneArguments} />
            <Scene key="flyingCarpetOwnerChannelTypes" component={containers.FlyingCarpetOwnerChannels} title="Flyingcarpet ChannelTypes" {...sceneArguments} />
            <Scene key="channelDetails" component={containers.ChannelDetails} title="Connected ChannelType" {...sceneArguments} />
          </Scene>
          {/* Lightbox Scenes */}
          <Scene key="settingsLightbox" component={containers.Settings} />
        </Lightbox>
      </Router>
    );
  }
}

export default connect(state => ({
  businessType: state.business.businessType,
}))(Routes);
