/*
 * This component is used in `routes.js` as right button on the navigation bar
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, TouchableHighlight, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { MapView } from 'expo';
import { FontAwesome } from '@expo/vector-icons';
import styles from './BackgroundMap-styles';
import * as businessActions from '../../actions/business';

class BackgroundMap extends React.Component {
  handleMapPress = e => {
    const { addLocationCoordinate } = this.props;

    // Add coordinate (lat/long pair) to redux for the user's pressed location
    addLocationCoordinate(e.nativeEvent.coordinate);
  }
  render() {
    const { selectedLocationCoordinates, toggleMapOpen, mapOpen } = this.props;

    return (
      <View style={styles.mapWrap}>
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
          onPress={this.handleMapPress}
          // This is a custom dark style for the map style (note: it only works on Android).
          //   NOTE: Consider abstracting this JSON out into a separate file.
          // To enable iOS custom styles (may need to eject, not sure), see: https://github.com/react-community/react-native-maps#customizing-the-map-style
          // To generate map styles JSON: https://mapstyle.withgoogle.com/
          customMapStyle={[{"elementType":"geometry","stylers":[{"color":"#1d2c4d"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#8ec3b9"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#1a3646"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"color":"#4b6878"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#64779e"}]},{"featureType":"administrative.province","elementType":"geometry.stroke","stylers":[{"color":"#4b6878"}]},{"featureType":"landscape.man_made","elementType":"geometry.stroke","stylers":[{"color":"#334e87"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#023e58"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#283d6a"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#6f9ba5"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#023e58"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#3C7680"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#304a7d"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#98a5be"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#2c6675"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#255763"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#b0d5ce"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"color":"#023e58"}]},{"featureType":"transit","elementType":"labels.text.fill","stylers":[{"color":"#98a5be"}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"color":"#283d6a"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#3a4762"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#0e1626"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#4e6d70"}]}]}
        >
          {(selectedLocationCoordinates.length >= 3) && // Only show polygon region if some coordinates have been added
            <MapView.Polygon
              coordinates={selectedLocationCoordinates}
              strokeColor={'rgba(3,155,230,1)'}
              fillColor={'rgba(3,155,230,0.5)'}
              strokeWidth={2}
            />
          }
          {selectedLocationCoordinates.map((coordinate, i) => (
            <MapView.Marker
              key={i}
              coordinate={coordinate}
              anchor={{x: 0.5, y: 0.5}}
            >
              <View style={styles.pin} />
            </MapView.Marker>
          ))}
        </MapView>
        <TouchableHighlight
          style={[styles.leftArrow, ((!mapOpen) ? styles.leftArrowMapMinimized : null)]}
          underlayColor={'#FFFFFF'}
          onPress={toggleMapOpen}
        >
          <FontAwesome name={mapOpen ? 'angle-right' : 'angle-left'} size={25} style={styles.leftArrowText} />
        </TouchableHighlight>
      </View>
    );
  }
}

BackgroundMap.propTypes = {
  addLocationCoordinate: PropTypes.func.isRequired,
  toggleMapOpen: PropTypes.func.isRequired,
  mapOpen: PropTypes.bool.isRequired
};

export default connect(
  state => ({
    selectedLocationCoordinates: state.business.selectedLocationCoordinates,
    mapOpen: state.business.mapOpen
  }),
  dispatch => ({
    addLocationCoordinate: bindActionCreators(businessActions.addLocationCoordinate, dispatch),
    toggleMapOpen: bindActionCreators(businessActions.toggleMapOpen, dispatch)
  })
)(BackgroundMap);
