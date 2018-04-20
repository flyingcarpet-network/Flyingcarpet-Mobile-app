/*
 * This is the settings dialog which is displayed in a lightbox on top of the current scene.
 * @flow
 */

import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
// Eslint must be disabled for the next line since expo is included in package.json:
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesome } from '@expo/vector-icons';
import styles from './Settings-styles';
import { HardwareDetail } from '../../components';

function Settings(): React.Node {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={Actions.pop} style={styles.closeWrap}>
        <FontAwesome name="angle-up" size={28} style={styles.close} />
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

export default Settings;
