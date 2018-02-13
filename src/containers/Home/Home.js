/*
 * This is the home scene, where the user can select ether "Business" or "FC Owner."
 */

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>HOME</Text>
        <Button onPress={() => Actions.business()} title="Business" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});