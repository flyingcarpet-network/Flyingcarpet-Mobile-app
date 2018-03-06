/*
 * This is the flyingcarpet owner scene where the user can view their flyingcarpet details or attach a new flyingcarpet.
 */

import React from 'react';
import { View } from 'react-native';
import { BackgroundMap } from '../../components';
import styles from './FlyingCarpetOwnerMap-styles';

export default class FlyingCarpetOwnerMap extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <BackgroundMap displayCloseButton={false} disablePolygonCreation={true} showFlyingCarpetBestLocations={true} />
      </View>
    );
  }
}
