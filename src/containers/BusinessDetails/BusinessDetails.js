/*
 * This is the business details scene where the user chooses the
 * business service options they would like to use to run the task.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { CheckBox } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { FontAwesome } from '@expo/vector-icons';
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from './BusinessDetails-styles';
import getServiceCheckboxOptions from '../../utils/getServiceCheckboxOptions';
import { BackgroundMap, Slider } from '../../components';
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
        <BackgroundMap drawLine={(businessType.toLowerCase() === 'transport')} />
        <ScrollView style={[styles.detailsWrap, (mapOpen ? styles.detailsMinimized : null)]} contentContainerStyle={styles.detailsWrapContentContainer}>
          {(businessType.toLowerCase() === 'agriculture') &&
            <Slider icon='rocket' title='Altitute' textValue={String(Math.round((5 + (altitute * 25)) * 100) / 100) + ' Metres'}  value={altitute} onValueChange={setAltitute} />
          }
          {(businessType.toLowerCase() === 'agriculture') &&
            <Slider icon='compass' title='Flight Direction' textValue={String(Math.round((flightDirection * 360) * 100) / 100) + ' Degrees'}  value={flightDirection} onValueChange={setFlightDirection} />
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
                checkedColor={EStyleSheet.value('$green')}
                uncheckedColor={EStyleSheet.value('$white')}
              />
            ))}
          </View>
          <View style={styles.line}></View>
          <TouchableOpacity onPress={Actions.businessEstimate}>
            <View style={styles.estimateTextWrap}>
              <Text style={styles.estimateText}>Estimate</Text>
              <FontAwesome name="angle-right" size={20} style={styles.rightArrow} />
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
