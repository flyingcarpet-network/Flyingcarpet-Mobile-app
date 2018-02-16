/*
 * This is the business selection scene where the user selects the
 * business service they would like to use from a list.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { MapView } from 'expo';
import { Slider } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { FontAwesome } from '@expo/vector-icons';
import estimateTimeToDone from '../../utils/estimateTimeToDone';
import styles from './BusinessEstimate-styles';
import * as businessActions from '../../actions/business';

class BusinessEstimate extends React.Component {
  handleMapPress = e => {
    const { addLocationCoordinate } = this.props;

    // Add coordinate (lat/long pair) to redux for the user's pressed location
    addLocationCoordinate(e.nativeEvent.coordinate);
  }
  render() {
    const { selectedLocationCoordinates, businessType, ethCost, setEthCost } = this.props;

    const ethCostAdjusted = Math.round(ethCost * 40 * 100) / 100;
    // Get a string representing how long it will take to complete the task
    const timeToFinishString = estimateTimeToDone(businessType, ethCostAdjusted);

    return (
      <View style={styles.container}>
        <View style={styles.line}></View>
        <ScrollView style={styles.detailsWrap} contentContainerStyle={styles.detailsWrapContentContainer}>
          <Text style={styles.detailTitle}>Select Land</Text>
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
            >
              {(selectedLocationCoordinates.length >= 3) && // Only show polygon region if some coordinates have been added
                <MapView.Polygon
                  coordinates={selectedLocationCoordinates}
                  strokeColor={'#ff0000'}
                  fillColor={'rgba(0,0,0,0.5)'}
                  strokeWidth={2}
                />
              }
              {selectedLocationCoordinates.map((coordinate, i) => (
                <MapView.Marker
                  key={i}
                  coordinate={coordinate}
                />
              ))}
            </MapView>
          </View>
          <View style={styles.sliderWrap}>
            <Text style={styles.detailTitle}>Time</Text>
            <Text style={styles.centralText}>{ethCostAdjusted} ETH</Text>
            <Slider
              value={ethCost}
              onValueChange={setEthCost}
            />
          </View>
          <View>
            <Text style={styles.detailTitle}>Estimate</Text>
            <Text style={[styles.centralText, styles.taskEstimateText]}>Task to be done in {timeToFinishString} at {ethCostAdjusted} ETH.</Text>
          </View>
          <TouchableOpacity onPress={Actions.businessExecute}>
            <View style={styles.executeTextWrap}>
              <Text style={styles.executeText}>Execute</Text>
              <FontAwesome name="angle-right" size={25} style={styles.rightArrow} />
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

BusinessEstimate.propTypes = {
  selectedLocationCoordinates: PropTypes.array.isRequired,
  addLocationCoordinate: PropTypes.func.isRequired,
  ethCost: PropTypes.number.isRequired,
  setEthCost: PropTypes.func.isRequired,
  businessType: PropTypes.string.isRequired
};

export default connect(
  state => ({
    selectedLocationCoordinates: state.business.selectedLocationCoordinates,
    ethCost: state.business.ethCost,
    businessType: state.business.businessType
  }),
  dispatch => ({
    addLocationCoordinate: bindActionCreators(businessActions.addLocationCoordinate, dispatch),
    setEthCost: bindActionCreators(businessActions.setEthCost, dispatch)
  })
)(BusinessEstimate);
