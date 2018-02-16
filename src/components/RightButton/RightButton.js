/*
 * This component is used in `routes.js` as right button on the navigation bar
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';
import styles from './RightButton-styles';

export default class RightButton extends React.Component {
  render() {
    const { children, onPress } = this.props;

    return (
      <TouchableOpacity onPress={onPress}><Text style={styles.text}>{children}</Text></TouchableOpacity>
    );
  }
}

RightButton.propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func.isRequired
};
