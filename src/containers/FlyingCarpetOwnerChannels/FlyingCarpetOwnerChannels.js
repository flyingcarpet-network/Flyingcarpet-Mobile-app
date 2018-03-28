/*
 * This is the flyingcarpet owner scene where the user can view their flyingcarpet details or attach a new flyingcarpet.
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
// import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import { List, ListItem } from 'react-native-elements';
import { HardwareDetail, BackgroundMap } from '../../components';
import styles from './FlyingCarpetOwnerChannels-styles';

// Just some hard-coded data for now:
const channels = [
  {
    name: "Mike's home drone",
    address: "0xD551234Ae421e3BCBA99A0Da6d736074f22192FF",
    balance: 4.42,
    settleTime: 600
  },
  {
    name: "Agro Ltd Drone #17",
    address: "0xF121234Ae421e3BCBA9229A0Da6d736074f192aC",
    balance: 1.00,
    settleTime: 60
  },
  {
    name: "Agro Ltd Drone #18",
    address: "0xA781234Ae421eBCBA993A0Da6d736074f22ff192",
    balance: 0.92,
    settleTime: 31
  }
];

export default class FlyingCarpetOwnerChannels extends React.Component {
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
            containerStyle={styles.channelInfoContainer}
            // titleContainerStyle={styles.leftChannelInfo}
            rightTitleContainerStyle={styles.balanceHeader}
            rightTitle="Balance"
            rightTitleStyle={[styles.rightTitle, styles.balanceHeaderText]}
            hideChevron
          />
          {channels.map((channel, i) => (
            <ListItem
              // roundAvatar
              // avatar={{uri:l.avatar_url}}
              key={i}
              title={channel.name + ' - ' + channel.settleTime + 'm left'}
              titleStyle={styles.title}
              containerStyle={[
                styles.channelInfoContainer,
                (i === channels.length - 1) ? styles.channelInfoContainerNoBorder : {}
              ]}
              titleContainerStyle={styles.leftChannelInfo}
              subtitleContainerStyle={styles.leftChannelInfo}
              rightTitleContainerStyle={styles.rightChannelInfo}
              subtitle={channel.address}
              subtitleStyle={styles.subtitle}
              rightTitle={channel.balance + ' ETH'}
              rightTitleStyle={styles.rightTitle}
              hideChevron
            />
          ))}
        </List>
      </View>
    );
  }
}
