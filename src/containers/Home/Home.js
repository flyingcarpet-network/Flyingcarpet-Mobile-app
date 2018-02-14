/*
 * This is the home scene, where the user can select ether "Business" or "FC Owner."
 */

import React from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './Home-styles';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>HOME</Text>
        <View style={styles.buttonWrap}>
          <Button
            onPress={() => Actions.business()}
            title="BUSINESS"
            textStyle={styles.buttonText}
            buttonStyle={styles.button}
          />
        </View>
        <View style={styles.buttonWrap}>
          <Button
            onPress={() => Actions.business()}
            title="FC OWNER"
            textStyle={styles.buttonText}
            buttonStyle={styles.button}
            containerStyle={{ flex: 1 }}
          />
        </View>
        <View style={styles.buttonWrap}>
          <Button
            onPress={() => Actions.business()}
            title="DRONE OWNER"
            textStyle={styles.buttonText}
            buttonStyle={styles.button}
            containerStyle={{ flex: 1 }}
          />
        </View>
      </View>
    );
  }
}
