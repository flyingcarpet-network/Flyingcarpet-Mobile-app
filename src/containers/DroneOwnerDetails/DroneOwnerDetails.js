/*
 * This is the drone owner scene where the user can view their drone details or attach a new drone.
 * @flow
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import styles from './DroneOwnerDetails-styles';
import { HardwareDetail } from '../../components';
import * as droneOwnerActions from '../../actions/droneOwner';

type Props = {
  droneToken: string,
  droneAddress: string
};

class DroneOwnerDetails extends React.Component<Props> {
  render(): React.Node {
    const { droneToken, droneAddress } = this.props;

    return (
      <View style={styles.container}>
        {(droneToken.length > 0) &&
          <View style={styles.detailsWrap}>
            <Text style={[styles.centralText, styles.instructionText]}>Click "Attach New" to attach a drone to the network.</Text>
          </View>
        }
        {!(droneToken.length > 0) &&
          <View style={styles.detailsWrap}>
            {/* This data is hard-coded for now but will obviously come from a smart-contract... */}
            <HardwareDetail icon="code" title="Model" value="AI2W8V" />
            <HardwareDetail icon="lock" title="Token" value={"6b9a27997995304"/*droneToken*/} />
            <HardwareDetail icon="qrcode" title="Address" value={"0xd97e1280f5d4f6709a963c87e6b9a27997995304"/*droneAddress*/} />
            <HardwareDetail icon="stack-overflow" title="Capacity" value="10kg" />
            <HardwareDetail icon="list-ul" title="Tasks for the month" value="14" />
            <HardwareDetail icon="usd" title="Money received" value="1.5 ETH" />
            <TouchableOpacity onPress={Actions.droneOwnerChannels}>
              <HardwareDetail icon="link" title="Connected Channels" pressable />
            </TouchableOpacity>
          </View>
        }
      </View>
    );
  }
}

export default connect(
  state => ({
    droneToken: state.droneOwner.droneToken, // We also use this to check that the user has a drone attached
    droneAddress: state.droneOwner.droneAddress
  })
)(DroneOwnerDetails);
