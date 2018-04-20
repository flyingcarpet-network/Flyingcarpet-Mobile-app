/*
 * This is a presentational component that display an icon on the left, then a title and
 * value next to each other above a slider. Internally the react-native-elements slider
 * is used to create the slider. The component is used to input business data on the the
 * business dialogs.
 * @flow
 */

import * as React from 'react';
import { View, Text } from 'react-native';
// Eslint must be disabled for the next line since expo is included in package.json:
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesome } from '@expo/vector-icons';
import { Slider as RNESlider } from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from './Slider-styles';

type Props = {
  icon: string,
  title: string,
  textValue: string, // Represents the textual value to be displayed about the slider
  value: number, // Represents the numeric value used to calculate the slider position
  onValueChange: number => {}, // The function that is called every time the slider values changes
  showBottomBorder?: boolean /* Represents whether a thin light border should be displayed at the
                               bottom of the component */
};

function Slider(props: Props): React.Node {
  const {
    icon, title, textValue, value, onValueChange, showBottomBorder,
  } = props;

  return (
    <View style={[styles.sliderWrap, ((showBottomBorder === true) ? styles.borderBottom : null)]}>
      <Text style={styles.sliderTitleIcon}>
        <FontAwesome name={icon} size={36} />
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

Slider.defaultProps = {
  showBottomBorder: true,
};

export default Slider;
