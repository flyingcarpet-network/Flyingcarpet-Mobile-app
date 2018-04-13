/*
 * This component is used in `routes.js` as right button on the navigation bar
 * @flow
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { View, TouchableHighlight, Text, NativeTouchEvent, ResponderSyntheticEvent } from 'react-native';
import { bindActionCreators } from 'redux';
import { MapView } from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';
import { FontAwesome } from '@expo/vector-icons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { type MapCoordinateCircle, type MapCoordinate } from '../../types';
import config from '../../config';
import getValues from '../../utils/getValues';
import * as businessActions from '../../actions/business';
import styles from './BackgroundMap-styles';

type Props = {
  addLocationCoordinate: (string, number) => {},
  removeLocationCoordinate: string => {},
  toggleMapOpen: () => {},
  mapOpen: boolean,
  flyingCarpetBestLocations: Array<MapCoordinateCircle>,
  selectedLocationCoordinates: {[string]: MapCoordinate},
  displayCloseButton: boolean, // This is an optional prop that can be passed in
  disablePolygonCreation: boolean, // This is an optional prop that disables the ability to create a polygon/markers by pressing on the map
  onMapPress: () => {}, // This is a custom callback function that is run whenever the map is pressed (not related to polygon creation functionality).
                        // NOTE: When this callback is defined, the user cannot interact with the map at all (since any press on the map triggers the callback).
  showFlyingCarpetBestLocations: boolean, // This is an optional prop that makes it so that the map also display the ideal (most profitable) locations to place flying carpets
  drawLine: boolean // If passed, instead of a polygon a line will be drawn connecting the markers in the order they were added (a polygon is drawn by default if this argument is not passed)
};

class BackgroundMap extends React.Component<Props> {
  static defaultProps = {
    displayCloseButton: true,
    disablePolygonCreation: false,
    onMapPress: null,
    showFlyingCarpetBestLocations: false,
    drawLine: false
  };
  map;
  componentDidMount() {
    setTimeout(() => { // 1/1000 second timeout prevents timing issue on Android
      const { selectedLocationCoordinates } = this.props;

      // If there are ANY coordinates in redux, we fit the map to those coordinates...
      if (this.map && this.map.fitToCoordinates && Object.keys(selectedLocationCoordinates).length > 0) {
        this.map.fitToCoordinates(getValues(selectedLocationCoordinates));
      }
    }, 1);
  }
  handleMapPress = (e: ResponderSyntheticEvent<NativeTouchEvent>): void => {
    const { addLocationCoordinate, disablePolygonCreation, onMapPress } = this.props;

    // If "coordinate" is not defined, then it means the marker was pressed ("coordinate" is not passed when the marker is directly pressed), thus we don't add this marker.
    // NOTE: this happens because the MapView's onPress callback is called regardless of whether the press event also trigger the Marker's onPress callback also.
    if (!('coordinate' in e.nativeEvent)) {
      return;
    }

    // If polygon creation isn't disabled, add the pressed location to the polygon coordinates array
    if (!disablePolygonCreation) {
      // Add coordinate (lat/long pair) to redux for the user's pressed location and include an "identifier"
      // field which is a unqiue string value representing the unique exact position of this marker
      addLocationCoordinate(
        String(e.nativeEvent.coordinate.latitude) + String(e.nativeEvent.coordinate.longitude),
        e.nativeEvent.coordinate
      );
    }

    // Run the custom map press callback if it's not null
    if (onMapPress !== null)
      onMapPress();
  }
  handleMarkerPress = (e: ResponderSyntheticEvent<NativeTouchEvent>): void => {
    const { removeLocationCoordinate } = this.props;

    // NOTE: We don't need to check if polygon creation is disabled, since markers are only show if it is disabled
    
    // Remove the coordinate (lat/long pair) from redux for the marker at the location that the user pressed
    removeLocationCoordinate(e.nativeEvent.id);
  }
  render(): React.Node {
    const { selectedLocationCoordinates, toggleMapOpen, mapOpen, displayCloseButton, disablePolygonCreation, showFlyingCarpetBestLocations, flyingCarpetBestLocations, onMapPress, drawLine } = this.props;

    // Depending on the optional "drawLine" argument, we ether draw a line or a polygon (default) 
    const PolygonOrLine = (drawLine ? MapView.Polyline : MapView.Polygon);
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
          ref={(ref: ?{fitToCoordinates: Array<MapCoordinate> => {}}) => { this.map = ref; }}
          onPress={this.handleMapPress}
          // Only allow interaction with the map if there is no custom map press callback defined
          zoomEnabled={onMapPress === null}
          rotateEnabled={onMapPress === null}
          scrollEnabled={onMapPress === null}
          pitchEnabled={onMapPress === null}
          // We hide the map's toolbar (Android only) since it isn't needed for our use cases
          toolbarEnabled={false}
          // We use the Google provider since it also allows styling of the map (without needing to install anything beyond Expo)
          provider='google'
          // This is a custom dark style for the map style (note: it only works on Android).
          //   NOTE: Consider abstracting this JSON out into a separate file.
          // To enable iOS custom styles (may need to eject, not sure), see: https://github.com/react-community/react-native-maps#customizing-the-map-style
          // To generate map styles JSON: https://mapstyle.withgoogle.com/
          customMapStyle={[{"elementType":"geometry","stylers":[{"color":"#1d2c4d"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#8ec3b9"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#1a3646"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"color":"#4b6878"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#64779e"}]},{"featureType":"administrative.province","elementType":"geometry.stroke","stylers":[{"color":"#4b6878"}]},{"featureType":"landscape.man_made","elementType":"geometry.stroke","stylers":[{"color":"#334e87"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#023e58"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#283d6a"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#6f9ba5"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#023e58"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#3C7680"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#304a7d"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#98a5be"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#2c6675"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#255763"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#b0d5ce"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"color":"#023e58"}]},{"featureType":"transit","elementType":"labels.text.fill","stylers":[{"color":"#98a5be"}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"color":"#283d6a"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#3a4762"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#0e1626"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#4e6d70"}]}]}
        >
          {/* If polygon creation isn't disabled, display the polygon on the map */}
          {(!disablePolygonCreation) && (Object.keys(selectedLocationCoordinates).length >= 2) && // Only show polygon region if some coordinates have been added
            <PolygonOrLine
              coordinates={getValues(selectedLocationCoordinates)}
              strokeColor={EStyleSheet.value('$focusAreaLighter')}
              fillColor={EStyleSheet.value('$focusAreaDarkerTranslucent')}
              strokeWidth={2}
            />
          }
          {/* If polygon creation isn't disabled, display the markers on the map that outline the polygon */}
          {(!disablePolygonCreation) && getValues(selectedLocationCoordinates).map((coordinate: MapCoordinate, i: number) => {
            // This is the unique identifier for the marker (based on it's exact lat/long location)
            const uniqueID = String(coordinate.latitude) + String(coordinate.longitude);
            return (
            <MapView.Marker
              key={uniqueID} // We need to ensure each marker has a unique "key" value so that React can diff efficiently (since markers are added and removed)
              coordinate={coordinate}
              identifier={uniqueID}
              anchor={{x: 0.5, y: 0.5}}
              onPress={this.handleMarkerPress}
            >
              <View style={styles.pin} />
            </MapView.Marker>);
          })}
          {/* If the functionality to display the best (most profitable) flying carpet locations is enabled, then we display all of the best location circles and markers */}
          {showFlyingCarpetBestLocations && flyingCarpetBestLocations.map((coordinate: MapCoordinateCircle, i: number) => (
            // Circles
            <MapView.Circle
              key={'bestFCLocationCircle_' + i}
              radius={1500}
              center={coordinate}
              strokeColor={EStyleSheet.value('$red')}
              strokeWidth={0.5}
              fillColor={EStyleSheet.value('$redTranslucent')}
            />
          ))}
          {showFlyingCarpetBestLocations && flyingCarpetBestLocations.map((region: MapCoordinateCircle, i: number) => (
            // Markers
            <MapView.Marker
              key={'bestFCLocationMarker_' + i}
              coordinate={region}
              anchor={{x: 0.5, y: 0.5}}
            >
              <Text style={styles.mapText}>{region.label}</Text>
            </MapView.Marker>
          ))}
        </MapView>
        {displayCloseButton &&
          <TouchableHighlight
            style={[styles.leftArrow, ((!mapOpen) ? styles.leftArrowMapMinimized : null)]}
            underlayColor={EStyleSheet.value('$focusAreaDarker')}
            onPress={toggleMapOpen}
          >
            <FontAwesome name={mapOpen ? 'angle-right' : 'angle-left'} size={25} style={styles.leftArrowText} />
          </TouchableHighlight>
        }
        {(displayCloseButton && mapOpen) && // If we're on the "increase revenue" dialog OR if the map is not minimized (on the business dialogs)
          <GooglePlacesAutocomplete
            placeholder='Search'
            minLength={2} // minimum length of text to search
            autoFocus={false}
            returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
            listViewDisplayed={false} // true/false/undefined
            fetchDetails={true}
            renderDescription={row => row.description} // custom description render
            onPress={(
              _,
              details: ?{geometry: {viewport: {
                          northeast: {lat: number, lng: number},
                          southwest: {lat: number, lng: number}
                        }}} = null
            ) => { // 'details' is provided when fetchDetails = true
              // Must ensure that the map instance instance variable and details argument exist (to prevent flow errors)
              if (this.map && this.map.fitToCoordinates && details) {
                this.map.fitToCoordinates([
                  { // North-East
                    latitude: details.geometry.viewport.northeast.lat,
                    longitude: details.geometry.viewport.northeast.lng
                  },
                  { // South-West
                    latitude: details.geometry.viewport.southwest.lat,
                    longitude: details.geometry.viewport.southwest.lng
                  }
                ]);
              }
            }}
            query={{
              // available options: https://developers.google.com/places/web-service/autocomplete
              key: config.googlePlacesAPIWebServiceKey,
              language: 'en', // language of the results
              // types: '(cities)' // default: 'geocode'
            }}
            styles={{
              container: styles.autocompleteContainer,
              textInputContainer: styles.autocompleteTextInputContainer,
              listView: styles.autocompleteListView,
              description: styles.autocompleteDescription,
              poweredContainer: styles.autocompletePoweredContainer,
              separator: styles.autocompleteSeparator
            }}
            nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
            GooglePlacesSearchQuery={{
              // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
              rankby: 'distance'
            }}
            filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
          />
        }
      </View>
    );
  }
}

export default connect(
  state => ({
    selectedLocationCoordinates: state.business.selectedLocationCoordinates,
    mapOpen: state.business.mapOpen,
    flyingCarpetBestLocations: state.flyingCarpetOwner.flyingCarpetBestLocations
  }),
  dispatch => ({
    addLocationCoordinate: bindActionCreators(businessActions.addLocationCoordinate, dispatch),
    toggleMapOpen: bindActionCreators(businessActions.toggleMapOpen, dispatch),
    removeLocationCoordinate: bindActionCreators(businessActions.removeLocationCoordinate, dispatch)
  })
)(BackgroundMap);
