/*
 * This is the state channel details scene where the user view their the details of a particular state channel (associated with a FC or drone).
 * @flow
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { HardwareDetail } from '../../components';
import { type Channel } from '../../types/Channel';
import styles from './ChannelDetails-styles';

type Props = {
  channelData: Channel
};

class ChannelDetails extends React.Component<Props> {
  render(): React.Node {
    const { channelData } = this.props;

    return (
      <View style={styles.container}>
        <ScrollView style={styles.detailsWrap} contentContainerStyle={styles.detailsWrapContentContainer}>
          <HardwareDetail icon="id-card" title="Name" value={channelData.name} />
          <HardwareDetail icon="qrcode" title="Partner Address" value={channelData.partnerAddress} />
          <HardwareDetail icon="qrcode" title="Channel Address" value={channelData.partnerAddress} />
          <HardwareDetail icon="usd" title="Channel Balance" value={channelData.balance + ' ETH'} />
          <HardwareDetail icon="calendar" title="Settle Time" value={channelData.settleTime + 'm'} />
          <HardwareDetail icon="clock-o" title="Reveal Time" value={channelData.revealTime + 'm'} />
          <HardwareDetail icon="folder-open" title="State" value={channelData.state} />
          <HardwareDetail icon="chain-broken" title="Settle Channel Now" redText showBottomBorder={false} />
        </ScrollView>
      </View>
    );
  }
}

export default connect(
  state => ({
    channelData: state.flyingCarpetOwner.channelData
  })
)(ChannelDetails);
