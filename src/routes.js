/*
 * Here we setup all of the router and all of the scenes.
 * For reference of the router setup, see: https://github.com/lynndylanhurley/react-native-router-flux#reduxflux
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Actions, Router, Reducer, Scene } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Home, Business } from './containers';

const scenes = Actions.create(
  <Scene key="Root">
    <Scene key="home" component={Home} />
    <Scene key="business" component={Business} />
  </Scene>
);

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
    return (
      <Router
        createReducer={this.reducerCreate.bind(this)}
        scenes={scenes} />
    );
  }
}

export default connect()(Routes);
