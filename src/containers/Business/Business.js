/*
 * This is the business selection scene.
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Business extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Business</Text>
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