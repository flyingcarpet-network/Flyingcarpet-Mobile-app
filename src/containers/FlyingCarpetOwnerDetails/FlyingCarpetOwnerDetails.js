/*
 * This is the flyingcarpet owner scene where the user can view their flyingcarpet details or attach a new flyingcarpet.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { bindActionCreators } from 'redux';
import styles from './FlyingCarpetOwnerDetails-styles';
import * as flyingCarpetOwnerActions from '../../actions/flyingCarpetOwner';

class FlyingCarpetOwnerDetails extends React.Component {
  render() {
    const { flyingCarpetToken, flyingCarpetAddress } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.line}></View>
        {!(flyingCarpetToken.length > 0) &&
          <View style={styles.detailsWrap}>
            <Text style={[styles.centralText, styles.instructionText]}>Click "Attach New" to attach a Flyingcarpet to the network.</Text>
          </View>
        }
        {(flyingCarpetToken.length > 0) &&
          <View style={styles.detailsWrap}>
            {/* This data is hard-coded for now but will obviously come from a smart-contract... */}
            <View>
              <Text style={styles.detailTitle}>Model</Text>
              <Text style={styles.centralText} numberOfLines={1}>AI2W8V</Text>
            </View>
            <View>
              <Text style={styles.detailTitle}>Token</Text>
              <Text style={styles.centralText} numberOfLines={1}>{flyingCarpetToken}</Text>
            </View>
            <View>
              <Text style={styles.detailTitle}>Address</Text>
              <Text style={styles.centralText} numberOfLines={1}>{flyingCarpetAddress}</Text>
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

FlyingCarpetOwnerDetails.propTypes = {
  flyingCarpetToken: PropTypes.string.isRequired,
  flyingCarpetAddress: PropTypes.string.isRequired
};

export default connect(
  state => ({
    flyingCarpetToken: state.flyingCarpetOwner.flyingCarpetToken, // We also use this to check that the user has a flyingCarpet attached
    flyingCarpetAddress: state.flyingCarpetOwner.flyingCarpetAddress
  })
)(FlyingCarpetOwnerDetails);
