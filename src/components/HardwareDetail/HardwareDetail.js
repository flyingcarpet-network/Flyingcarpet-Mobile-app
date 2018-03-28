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
    const { icon, title, value, showBottomBorder, pressable } = this.props;

    return (
      <View style={[styles.detailWrap, (showBottomBorder ? styles.borderBottom : null)]}>
        {(icon.length > 0) &&
          <FontAwesome name={icon} size={28} style={styles.icon} />
        }
        {(icon.length === 0) &&
          <Text style={styles.icon} />
        }
        <Text style={styles.detailTitle}>{title}</Text>
        {(!pressable) &&
          <Text style={styles.detailText} numberOfLines={1}>{value}</Text>
        }
        {pressable &&
          <Text style={styles.detailText}>
            <FontAwesome name="angle-right" size={28} style={styles.icon} />
          </Text>
        }
      </View>
    );
  }
}

HardwareDetail.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
  showBottomBorder: PropTypes.bool, // Represents whether a thin light border should be displayed at the bottom of the component
  pressable: PropTypes.bool // Represents whether a right arrow should be showen instead of a "value" (true when HardwareDetail is being used a button)
};

HardwareDetail.defaultProps = {
  icon: '',
  showBottomBorder: true,
  value: '',
  pressable: false
};
