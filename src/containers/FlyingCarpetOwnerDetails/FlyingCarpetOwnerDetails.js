/*
 * This is the flyingcarpet owner scene where the user can view their flyingcarpet details or attach a new flyingcarpet.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import { HardwareDetail, BackgroundMap } from '../../components';
import styles from './FlyingCarpetOwnerDetails-styles';
import * as flyingCarpetOwnerActions from '../../actions/flyingCarpetOwner';

class FlyingCarpetOwnerDetails extends React.Component {
  render() {
    const { flyingCarpetToken, flyingCarpetAddress } = this.props;

    return (
      <View style={styles.container}>
        {(flyingCarpetToken.length > 0) &&
          <View style={styles.detailsWrap}>
            <Text style={styles.instructionText}>Click "Attach New" to attach a Flyingcarpet to the network.</Text>
          </View>
        }
        {!(flyingCarpetToken.length > 0) &&
          <ScrollView style={styles.detailsWrap} contentContainerStyle={styles.detailsWrapContentContainer}>
            {/* This data is hard-coded for now but will obviously come from a smart-contract... */}
            <HardwareDetail icon="code" title="Model" value="AI2W8V" />
            <HardwareDetail icon="lock" title="Token" value="6b9a27997995304"/*{flyingCarpetToken}*/ />
            <HardwareDetail icon="qrcode" title="Address" value="0xd97e1280f5d4f6709a963c87e6b9a27997995304" />
            <HardwareDetail icon="stack-overflow" title="Capacity" value="10kg" />
            <HardwareDetail icon="list-ul" title="Tasks for the month" value="14" />
            <HardwareDetail icon="usd" title="Money received" value="1.5 ETH" />
            <TouchableOpacity>
              <HardwareDetail icon="link" title="Connected Channels" pressable={true} showBottomBorder={false} />
            </TouchableOpacity>
            <View style={styles.mapWrap}>
              <BackgroundMap displayCloseButton={false} disablePolygonCreation={true} onMapPress={Actions.flyingCarpetOwnerMap} showFlyingCarpetBestLocations={true} />
            </View>
          </ScrollView>
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
