/*
 * This is the home scene, where the user can select ether "Business," "FC Owner," or "Drone Owner."
 * @flow
 */

import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
// Eslint must be disabled for the next line since expo is included in package.json:
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesome } from '@expo/vector-icons';
import styles from './Home-styles';

function Home(): React.Node {
  return (
    <View style={styles.container}>
      <View style={styles.appNameWrap}>
        <Text style={styles.appName}>Flyingcarpet</Text>
        <TouchableOpacity style={styles.cogWrap} onPress={Actions.settingsLightbox}>
          <FontAwesome name="cog" size={28} style={styles.cog} />
        </TouchableOpacity>
      </View>
      <View style={styles.appSubNameWrap}>
        <Text style={styles.appSubName}>NAVIGATION</Text>
      </View>
      <View style={styles.buttonWrap}>
        <TouchableOpacity style={styles.button} onPress={Actions.businessSelect}>
          <FontAwesome name="briefcase" size={28} style={styles.icon} />
          <Text style={styles.buttonText}>BUSINESS</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonWrap}>
        <TouchableOpacity style={styles.button} onPress={Actions.flyingCarpetOwnerDetails}>
          <FontAwesome name="plug" size={28} style={styles.icon} />
          <Text style={styles.buttonText}>FC OWNER</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonWrap}>
        <TouchableOpacity style={styles.button} onPress={Actions.droneOwnerDetails}>
          <FontAwesome name="rocket" size={28} style={styles.icon} />
          <Text style={styles.buttonText}>DRONE OWNER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Home;
