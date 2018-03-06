/*
 * This is a presentational component that display an icon on the left, then a title and
 * value next to each other above a slider. Internally the react-native-elements slider
 * is used to create the slider. The component is used to input business data on the the
 * business dialogs.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Slider as RNESlider } from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from './Slider-styles';

export default class Slider extends React.Component {
  render() {
    const { icon, title, textValue, value, onValueChange, showBottomBorder } = this.props;

    return (
      <View style={[styles.sliderWrap, (showBottomBorder ? styles.borderBottom : null)]}>
        <Text style={styles.sliderTitleIcon}>
          <FontAwesome name={icon} size={45} />
        </Text>
        <View style={styles.sliderInnerWrap}>
          <View style={styles.sliderTitlesWrap}>
            <Text style={styles.detailTitle} numberOfLines={1}>{title}</Text>
            <Text style={styles.valueText} numberOfLines={1}>{textValue}</Text>
          </View>
          <RNESlider
            value={value}
            onValueChange={onValueChange}
            style={styles.slider}
            minimumTrackTintColor={EStyleSheet.value('$yellow')}
            maximumTrackTintColor={EStyleSheet.value('$darkBackground')}
            thumbStyle={styles.sliderThumbStyle}
          />
        </View>
      </View>
    );
  }
}

Slider.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  textValue: PropTypes.string.isRequired, // Represents the textual value to be displayed about the slider
  value: PropTypes.number.isRequired, // Represents the numeric value used to calculate the slider position
  onValueChange: PropTypes.func.isRequired, // The function that is called every time the slider values changes
  showBottomBorder: PropTypes.bool // Represents whether a thin light border should be displayed at the bottom of the component
};

Slider.defaultProps = {
  showBottomBorder: true
};
