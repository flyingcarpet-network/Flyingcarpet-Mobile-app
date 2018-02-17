/*
 * This is the flyingcarpet owner scene where the user can view their flyingcarpet details or attach a new flyingcarpet.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, View, ScrollView } from 'react-native';
import { bindActionCreators } from 'redux';
import { MapView } from 'expo';
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
          <ScrollView style={styles.detailsWrap} contentContainerStyle={styles.detailsWrapContentContainer}>
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
            <View style={styles.mapWrap}>
              <Text style={styles.detailTitle}>Location - increase income</Text>
              <MapView
                style={styles.map}
                // NOTE: this initialRegion should be updated to get the user's current location and use it, see:
                //       https://docs.expo.io/versions/latest/sdk/location.html
                initialRegion={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
                // This is a custom dark style for the map style (note: it only works on Android).
                //   NOTE: Consider abstracting this JSON out into a separate file.
                // To enable iOS custom styles (may need to eject, not sure), see: https://github.com/react-community/react-native-maps#customizing-the-map-style
                // To generate map styles JSON: https://mapstyle.withgoogle.com/
                customMapStyle={[{"elementType":"geometry","stylers":[{"color":"#1d2c4d"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#8ec3b9"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#1a3646"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"color":"#4b6878"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#64779e"}]},{"featureType":"administrative.province","elementType":"geometry.stroke","stylers":[{"color":"#4b6878"}]},{"featureType":"landscape.man_made","elementType":"geometry.stroke","stylers":[{"color":"#334e87"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#023e58"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#283d6a"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#6f9ba5"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#023e58"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#3C7680"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#304a7d"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#98a5be"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#2c6675"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#255763"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#b0d5ce"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"color":"#023e58"}]},{"featureType":"transit","elementType":"labels.text.fill","stylers":[{"color":"#98a5be"}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"color":"#283d6a"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#3a4762"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#0e1626"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#4e6d70"}]}]}
              >
                <MapView.Circle
                  radius={1500}
                  center={{
                    latitude: 37.78555,
                    longitude: -122.4054
                  }}
                  strokeColor={'rgba(255,0,0,0.4)'}
                  strokeWidth={0.5}
                  fillColor={'rgba(255,0,0,0.1)'}
                />
                <MapView.Marker
                  coordinate={{
                    latitude: 37.78555,
                    longitude: -122.4054
                  }}
                >
                  <Text style={styles.mapText}>396%</Text>
                </MapView.Marker>

                <MapView.Circle
                  radius={3000}
                  center={{
                    latitude: 37.78981,
                    longitude: -122.4509
                  }}
                  strokeColor={'rgba(255,0,0,0.4)'}
                  strokeWidth={0.5}
                  fillColor={'rgba(255,0,0,0.1)'}
                />
                <MapView.Marker
                  coordinate={{
                    latitude: 37.78981,
                    longitude: -122.4509
                  }}
                >
                  <Text style={styles.mapText}>174%</Text>
                </MapView.Marker>
              </MapView>
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
