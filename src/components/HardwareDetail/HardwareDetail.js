/*
 * This is a presentational component that display an icon, a title, and a value all in a row.
 * The component is used to display hardware information on both the Drone and FlyingCarpet
 * owner pages.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './HardwareDetail-styles';

export default class HardwareDetail extends React.Component {
  render() {
    const { icon, title, value, showBottomBorder } = this.props;

    return (
      <View style={[styles.detailWrap, (showBottomBorder ? styles.borderBottom : null)]}>
        <FontAwesome name={icon} size={28} style={styles.icon} />
        <Text style={styles.detailTitle}>{title}</Text>
        <Text style={styles.detailText} numberOfLines={1}>{value}</Text>
      </View>
    );
  }
}

HardwareDetail.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  showBottomBorder: PropTypes.bool // Represents whether a thin light border should be displayed at the bottom of the component
};

HardwareDetail.defaultProps = {
  showBottomBorder: true
};
