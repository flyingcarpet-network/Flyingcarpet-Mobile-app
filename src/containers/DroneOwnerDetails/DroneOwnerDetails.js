/*
 * This is the drone owner scene where the user can view their drone details or attach a new drone.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { FontAwesome } from '@expo/vector-icons';
import styles from './DroneOwnerDetails-styles';
import * as droneOwnerActions from '../../actions/droneOwner';

class DroneOwnerDetails extends React.Component {
  render() {
    const { droneToken, droneAddress } = this.props;

    return (
      <View style={styles.container}>
        {!(droneToken.length > 0) &&
          <View style={styles.detailsWrap}>
            <Text style={[styles.centralText, styles.instructionText]}>Click "Attach New" to attach a drone to the network.</Text>
          </View>
        }
        {(droneToken.length > 0) &&
          <View style={styles.detailsWrap}>
            {/* This data is hard-coded for now but will obviously come from a smart-contract... */}
            <View style={styles.detailWrap}>
              <FontAwesome name="code" size={35} style={styles.icon} />
              <Text style={styles.detailTitle}>Model</Text>
              <Text style={styles.detailText} numberOfLines={1}>AI2W8V</Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.detailWrap}>
              <FontAwesome name="lock" size={35} style={styles.icon} />
              <Text style={styles.detailTitle}>Token</Text>
              <Text style={styles.detailText} numberOfLines={1}>{droneToken}</Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.detailWrap}>
              <FontAwesome name="qrcode" size={35} style={styles.icon} />
              <Text style={styles.detailTitle}>Address</Text>
              <Text style={styles.detailText} numberOfLines={1}>{droneAddress}</Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.detailWrap}>
              <FontAwesome name="stack-overflow" size={35} style={styles.icon} />
              <Text style={styles.detailTitle}>Capacity</Text>
              <Text style={styles.detailText} numberOfLines={1}>10kg</Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.detailWrap}>
              <FontAwesome name="list-ul" size={35} style={styles.icon} />
              <Text style={styles.detailTitle}>Tasks for the month</Text>
              <Text style={styles.detailText} numberOfLines={1}>14</Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.detailWrap}>
              <FontAwesome name="usd" size={35} style={styles.icon} />
              <Text style={styles.detailTitle}>Money received</Text>
              <Text style={styles.detailText} numberOfLines={1}>1.5 ETH</Text>
            </View>
          </View>
        }
      </View>
    );
  }
}

DroneOwnerDetails.propTypes = {
  droneToken: PropTypes.string.isRequired,
  droneAddress: PropTypes.string.isRequired
};

export default connect(
  state => ({
    droneToken: state.droneOwner.droneToken, // We also use this to check that the user has a drone attached
    droneAddress: state.droneOwner.droneAddress
  })
)(DroneOwnerDetails);
