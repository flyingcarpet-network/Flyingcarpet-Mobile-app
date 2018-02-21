/*
 * This is the business details scene where the user chooses the
 * business service options they would like to use to run the task.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { Slider, CheckBox } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { FontAwesome } from '@expo/vector-icons';
import styles from './BusinessDetails-styles';
import getServiceCheckboxOptions from '../../utils/getServiceCheckboxOptions';
import { BackgroundMap } from '../../components';
import * as businessActions from '../../actions/business';

class BusinessDetails extends React.Component {
  componentWillUnmount() {
    const { reset } = this.props;

    // Reset the redux router each time the component is unmounted
    reset();
  }
  render() {
    const { altitute, setAltitute, businessType, flightDirection, setFlightDirection, toggleOption, selectedOptions, mapOpen } = this.props;

    // Get an array of the different checkbox options for the business type
    const options = getServiceCheckboxOptions(businessType);

    return (
      <View style={styles.container}>
        <BackgroundMap />
        <ScrollView style={[styles.detailsWrap, (mapOpen ? styles.detailsMinimized : null)]} contentContainerStyle={styles.detailsWrapContentContainer}>
          {(businessType.toLowerCase() === 'agriculture') &&
            <View style={styles.sliderWrap}>
              <Text style={styles.sliderTitleIcon}>
                <FontAwesome name="rocket" size={45} />
              </Text>
              <View style={styles.sliderInnerWrap}>
                <View style={styles.sliderTitlesWrap}>
                  <Text style={styles.detailTitle} numberOfLines={1}>Altitute</Text>
                  <Text style={styles.centralText} numberOfLines={1}>{(Math.round((5 + (altitute * 25)) * 100) / 100)} Metres</Text>
                </View>
                <Slider
                  value={altitute}
                  onValueChange={setAltitute}
                  style={styles.slider}
                  // trackStyle={styles.sliderTrackStyle}
                  minimumTrackTintColor={'#D8AC50'}
                  maximumTrackTintColor={'#1C1D31'}
                  thumbStyle={styles.sliderThumbStyle}
                />
              </View>
            </View>
          }
          {(businessType.toLowerCase() === 'agriculture') &&
            <View style={styles.line}></View>
          }
          {(businessType.toLowerCase() === 'agriculture') &&
            <View style={styles.sliderWrap}>
              <Text style={styles.sliderTitleIcon}>
                <FontAwesome name="compass" size={45} />
              </Text>
              <View style={styles.sliderInnerWrap}>
                <View style={styles.sliderTitlesWrap}>
                  <Text style={styles.detailTitle} numberOfLines={1}>Flight Direction</Text>
                  <Text style={styles.centralText} numberOfLines={1}>{(Math.round((flightDirection * 360) * 100) / 100)} Degrees</Text>
                </View>
                <Slider
                  value={flightDirection}
                  onValueChange={setFlightDirection}
                  style={styles.slider}
                  // trackStyle={styles.sliderTrackStyle}
                  minimumTrackTintColor={'#D8AC50'}
                  maximumTrackTintColor={'#1C1D31'}
                  thumbStyle={styles.sliderThumbStyle}
                />
              </View>
            </View>
          }
          {(businessType.toLowerCase() === 'agriculture') &&
            <View style={styles.line}></View>
          }
          <View style={styles.optionCheckboxesWrap}>
            {options.map((option, i) => (
              <CheckBox
                key={i}
                title={option}
                checked={selectedOptions[option] === true}
                onPress={() => toggleOption(option)}
                containerStyle={styles.checkboxStyle}
                textStyle={styles.checkboxTextStyle}
                checkedColor={'#50D862'}
                uncheckedColor={'#F2F6F5'}
              />
            ))}
          </View>
          <View style={styles.line}></View>
          <TouchableOpacity onPress={Actions.businessEstimate}>
            <View style={styles.estimateTextWrap}>
              <Text style={styles.estimateText}>Estimate</Text>
              <FontAwesome name="angle-right" size={25} style={styles.rightArrow} />
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

BusinessDetails.propTypes = {
  altitute: PropTypes.number.isRequired,
  setAltitute: PropTypes.func.isRequired,
  businessType: PropTypes.string.isRequired,
  flightDirection: PropTypes.number.isRequired,
  setFlightDirection: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  toggleOption: PropTypes.func.isRequired,
  selectedOptions: PropTypes.object.isRequired,
  mapOpen: PropTypes.bool.isRequired
};

export default connect(
  state => ({
    altitute: state.business.altitute,
    businessType: state.business.businessType,
    flightDirection: state.business.flightDirection,
    selectedOptions: state.business.selectedOptions,
    mapOpen: state.business.mapOpen
  }),
  dispatch => ({
    addLocationCoordinate: bindActionCreators(businessActions.addLocationCoordinate, dispatch),
    setAltitute: bindActionCreators(businessActions.setAltitute, dispatch),
    setFlightDirection: bindActionCreators(businessActions.setFlightDirection, dispatch),
    reset: bindActionCreators(businessActions.reset, dispatch),
    toggleOption: bindActionCreators(businessActions.toggleOption, dispatch)
  })
)(BusinessDetails);
