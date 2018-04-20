/*
 * This is the flyingcarpet owner scene where the user can view their flyingcarpet details or
 * attach a new flyingcarpet.
 * @flow
 */

import * as React from 'react';
import { View } from 'react-native';
import { BackgroundMap } from '../../components';
import styles from './FlyingCarpetOwnerMap-styles';

function FlyingCarpetOwnerMap(): React.Node {
  return (
    <View style={styles.container}>
      <BackgroundMap
        displayCloseButton={false}
        disablePolygonCreation
        showFlyingCarpetBestLocations
      />
    </View>
  );
}

export default FlyingCarpetOwnerMap;
