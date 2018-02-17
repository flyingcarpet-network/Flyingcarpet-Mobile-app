/*
 * This is the drone owner scene where the user can view their drone details or attach a new drone.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { bindActionCreators } from 'redux';
import styles from './DroneOwnerDetails-styles';
import * as droneOwnerActions from '../../actions/droneOwner';

class DroneOwnerDetails extends React.Component {
  render() {
    const { droneToken, droneAddress } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.line}></View>
        {!(droneToken.length > 0) &&
          <View style={styles.detailsWrap}>
            <Text style={[styles.centralText, styles.instructionText]}>Click "Attach New" to attach a drone to the network.</Text>
          </View>
        }
        {(droneToken.length > 0) &&
          <View style={styles.detailsWrap}>
            {/* This data is hard-coded for now but will obviously come from a smart-contract... */}
            <View>
              <Text style={styles.detailTitle}>Model</Text>
              <Text style={styles.centralText} numberOfLines={1}>AI2W8V</Text>
            </View>
            <View>
              <Text style={styles.detailTitle}>Token</Text>
              <Text style={styles.centralText} numberOfLines={1}>{droneToken}</Text>
            </View>
            <View>
              <Text style={styles.detailTitle}>Address</Text>
              <Text style={styles.centralText} numberOfLines={1}>{droneAddress}</Text>
            </View>
            <View>
              <Text style={styles.detailTitle}>Capacity</Text>
              <Text style={styles.centralText} numberOfLines={1}>10kg</Text>
            </View>
            <View>
              <Text style={styles.detailTitle}>Tasks for the month</Text>
              <Text style={styles.centralText} numberOfLines={1}>14</Text>
            </View>
            <View>
              <Text style={styles.detailTitle}>Money received</Text>
              <Text style={styles.centralText} numberOfLines={1}>1.5 ETH</Text>
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
