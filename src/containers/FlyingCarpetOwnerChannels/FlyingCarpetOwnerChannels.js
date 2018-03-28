/*
 * This is the flyingcarpet owner scene where the user can view their flyingcarpet details or attach a new flyingcarpet.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import { List, ListItem } from 'react-native-elements';
import { HardwareDetail } from '../../components';
import styles from './FlyingCarpetOwnerChannels-styles';
import * as flyingCarpetOwnerActions from '../../actions/flyingCarpetOwner';

// Just some hard-coded data for now:
const channels = [
  {
    name: "Mike's home drone",
    partnerAddress: "0xD551234Ae421e3BCBA99A0Da6d736074f22192FF",
    channelAddress: "0xF34Df51234Ae421e9CBA9A0Da6d736074f2217A7",
    balance: 4.42,
    state: 'opened',
    revealTime: 30,
    settleTime: 600
  },
  {
    name: "Agro Ltd Drone #17",
    partnerAddress: "0xF121234Ae421e3BCBA9229A0Da6d736074f192aC",
    channelAddress: "0xE4Df51234Ae421e9CBA9A0Da6d7360754f2217A7",
    balance: 1.00,
    state: 'opened',
    revealTime: 30,
    settleTime: 60
  },
  {
    name: "Agro Ltd Drone #18",
    partnerAddress: "0xA781234Ae421eBCBA993A0Da6d736074f22ff192",
    channelAddress: "0xF4Df51234Ae421e9CBA9A0Da6d736074f2217A71",
    balance: 0.92,
    state: 'opened',
    revealTime: 30,
    settleTime: 31
  }
];

class FlyingCarpetOwnerChannels extends React.Component {
  handleChannelPress = channel => {
    const { setChannelData } = this.props;

    // Change highlighted channel data (in Redux)
    setChannelData(channel);

    // Change route
    Actions.flyingCarpetOwnerChannelDetails();
  }
  render() {
    return (
      <View style={styles.container}>
        {/*(flyingCarpetToken.length > 0) &&
          <View style={styles.detailsWrap}>
            <Text style={styles.instructionText}>Press "open channel" to open a new state channel.</Text>
          </View>
        */}
        <List containerStyle={styles.list}>
          <ListItem
            title="Partner Name"
            titleStyle={[styles.title, styles.nameHeaderText]}
            containerStyle={[styles.channelInfoContainer, styles.channelInfoHeadersContainer]}
            rightTitleContainerStyle={styles.balanceHeader}
            rightTitle="Channel Balance"
            rightTitleStyle={[styles.rightTitle, styles.balanceHeaderText]}
            hideChevron
          />
          {channels.map((channel, i) => (
            <TouchableOpacity key={i} onPress={() => this.handleChannelPress(channel)}>
              <ListItem
                title={channel.name + ' - ' + channel.settleTime + 'm left'}
                titleStyle={styles.title}
                containerStyle={styles.channelInfoContainer}
                wrapperStyle={styles.channelInfoInnerContainer}
                titleContainerStyle={styles.leftChannelInfo}
                subtitleContainerStyle={styles.leftChannelInfo}
                rightTitleContainerStyle={styles.rightChannelInfo}
                subtitle={channel.partnerAddress}
                subtitleStyle={styles.subtitle}
                rightTitle={channel.balance + ' ETH'}
                rightTitleStyle={styles.rightTitle}
                hideChevron
              />
            </TouchableOpacity>
          ))}
          <HardwareDetail icon="plus-circle" title="Open New Channel" greenText />
        </List>
      </View>
    );
  }
}

FlyingCarpetOwnerChannels.propTypes = {
  setChannelData: PropTypes.func.isRequired
};

export default connect(
  null,
  dispatch => ({
    setChannelData: bindActionCreators(flyingCarpetOwnerActions.setChannelData, dispatch)
  })
)(FlyingCarpetOwnerChannels);
