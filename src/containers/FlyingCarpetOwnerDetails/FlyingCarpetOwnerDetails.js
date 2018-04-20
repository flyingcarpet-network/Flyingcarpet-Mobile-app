/*
 * This is the flyingcarpet owner scene where the user can view their flyingcarpet details or
 * attach a new flyingcarpet.
 * @flow
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { HardwareDetail, BackgroundMap } from '../../components';
import styles from './FlyingCarpetOwnerDetails-styles';

type Props = {
  flyingCarpetToken: string,
  // flyingCarpetAddress: string
};

function FlyingCarpetOwnerDetails(props: Props): React.Node {
  const { flyingCarpetToken/* , flyingCarpetAddress */ } = props;

  return (
    <View style={styles.container}>
      {(flyingCarpetToken.length > 0) &&
        <View style={styles.detailsWrap}>
          <Text style={styles.instructionText}>
            Click {'"Attach New"'} to attach a Flyingcarpet to the network.
          </Text>
        </View>
      }
      {!(flyingCarpetToken.length > 0) &&
        <ScrollView
          style={styles.detailsWrap}
          contentContainerStyle={styles.detailsWrapContentContainer}
        >
          {/* This data is hard-coded for now but will obviously come from a smart-contract... */}
          <HardwareDetail icon="code" title="Model" value="AI2W8V" />
          <HardwareDetail
            icon="lock"
            title="Token"
            value="6b9a27997995304"/* {flyingCarpetToken} */
          />
          <HardwareDetail
            icon="qrcode"
            title="Address"
            value="0xd97e1280f5d4f6709a963c87e6b9a27997995304"
          />
          <HardwareDetail icon="stack-overflow" title="Capacity" value="10kg" />
          <HardwareDetail icon="list-ul" title="Tasks for the month" value="14" />
          <HardwareDetail icon="usd" title="Money received" value="1.5 ETH" />
          <TouchableOpacity onPress={Actions.flyingCarpetOwnerChannelTypes}>
            <HardwareDetail
              icon="link"
              title="Connected ChannelTypes"
              pressable
              showBottomBorder={false}
            />
          </TouchableOpacity>
          <View style={styles.mapWrap}>
            <BackgroundMap
              displayCloseButton={false}
              disablePolygonCreation
              onMapPress={Actions.flyingCarpetOwnerMap}
              showFlyingCarpetBestLocations
            />
          </View>
        </ScrollView>
      }
    </View>
  );
}

export default connect(state => ({
  flyingCarpetToken: state.flyingCarpetOwner.flyingCarpetToken, /* We also use this to check that
                                                                   the user has a flyingCarpet
                                                                   attached */
  // flyingCarpetAddress: state.flyingCarpetOwner.flyingCarpetAddress,
}))(FlyingCarpetOwnerDetails);
