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

// Styles for the navigation bar
const styles = EStyleSheet.create({
  navBar: {
    backgroundColor: '$appBackgroundColor'
  },
  titleStyle: {
    color: '$appTextColor'
  }
});

class Routes extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

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
        <Scene key="Root" navigationBarStyle={styles.navBar} titleStyle={styles.titleStyle}>
          <Scene key="home" component={containers.Home} />
          <Scene key="businessSelect" component={containers.BusinessSelect} title="Business" />
          <Scene key="businessDetails" component={containers.BusinessDetails} title={businessType} />
          <Scene key="businessEstimate" component={containers.BusinessEstimate} backTitle=" " title={businessType} />
          <Scene key="businessExecute" component={containers.BusinessExecute} title="Final" />
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
