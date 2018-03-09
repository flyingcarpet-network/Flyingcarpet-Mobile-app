/*
 * This is the settings dialog which is displayed in a lightbox on top of the current scene.
 */

import React from 'react';
import { View, TouchableOpacity, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { FontAwesome } from '@expo/vector-icons';
import styles from './Settings-styles';
import { HardwareDetail } from '../../components';

export default class Settings extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={Actions.pop} style={styles.closeWrap}>
          <FontAwesome name={'angle-up'} size={28} style={styles.close} />
        </TouchableOpacity>
        {/* This data is hard-coded for now but will obviously come from a smart-contract... */}
        <HardwareDetail icon="money" title="Nitrogen (NTN)" value="1245" />
        <HardwareDetail icon="" title="Locked NTN" value="800" />
        <HardwareDetail icon="plug" title="Oxygen (OXE)" value="756" />
        <HardwareDetail icon="" title="Locked OXE" value="700" />
        <HardwareDetail icon="percent" title="Calculated Fees" value="0.78%" />
      </View>
    );
  }
}
