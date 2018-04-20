/*
 * This is the business details scene where the user chooses the
 * business service options they would like to use to run the task.
 * @flow
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { CheckBox } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
// Eslint must be disabled for the next line since expo is included in package.json:
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesome } from '@expo/vector-icons';
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from './BusinessDetails-styles';
import getServiceCheckboxOptions from '../../utils/getServiceCheckboxOptions';
import { BackgroundMap, Slider } from '../../components';
import * as businessActions from '../../actions/business';

type Props = {
  altitute: number,
  setAltitute: number => {},
  businessType: string,
  flightDirection: number,
  setFlightDirection: number => {},
  reset: () => {},
  toggleOption: string => {},
  selectedOptions: {},
  mapOpen: boolean
};

class BusinessDetails extends React.Component<Props> {
  componentWillUnmount(): void {
    const { reset } = this.props;

    // Reset the redux router each time the component is unmounted
    reset();
  }
  render(): React.Node {
    const {
      altitute,
      setAltitute,
      businessType,
      flightDirection,
      setFlightDirection,
      toggleOption,
      selectedOptions,
      mapOpen,
    } = this.props;

    // Get an array of the different checkbox options for the business type
    const options: Array<string> = getServiceCheckboxOptions(businessType);

    return (
      <View style={styles.container}>
        <BackgroundMap drawLine={(businessType.toLowerCase() === 'transport')} />
        <ScrollView
          style={[styles.detailsWrap, (mapOpen ? styles.detailsMinimized : null)]}
          contentContainerStyle={styles.detailsWrapContentContainer}
        >
          {(businessType.toLowerCase() === 'agriculture') &&
            <Slider
              icon="rocket"
              title="Altitute"
              textValue={`${String(Math.round((5 + (altitute * 25)) * 100) / 100)} Metres`}
              value={altitute}
              onValueChange={setAltitute}
            />
          }
          {(businessType.toLowerCase() === 'agriculture') &&
            <Slider
              icon="compass"
              title="Flight Direction"
              textValue={`${String(Math.round((flightDirection * 360) * 100) / 100)} Degrees`}
              value={flightDirection}
              onValueChange={setFlightDirection}
            />
          }
          <View style={styles.optionCheckboxesWrap}>
            {options.map((option: string) => {
              const key = option.replace(/\W/g, '');
              return (
                <CheckBox
                  key={`businessOption_${key}`}
                  title={option}
                  checked={selectedOptions[option] === true}
                  onPress={() => toggleOption(option)}
                  containerStyle={styles.checkboxStyle}
                  textStyle={styles.checkboxTextStyle}
                  checkedColor={EStyleSheet.value('$green')}
                  uncheckedColor={EStyleSheet.value('$white')}
                />
              );
            })}
          </View>
          <View style={styles.line} />
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

export default connect(
  state => ({
    altitute: state.business.altitute,
    businessType: state.business.businessType,
    flightDirection: state.business.flightDirection,
    selectedOptions: state.business.selectedOptions,
    mapOpen: state.business.mapOpen,
  }),
  dispatch => ({
    addLocationCoordinate: bindActionCreators(businessActions.addLocationCoordinate, dispatch),
    setAltitute: bindActionCreators(businessActions.setAltitute, dispatch),
    setFlightDirection: bindActionCreators(businessActions.setFlightDirection, dispatch),
    reset: bindActionCreators(businessActions.reset, dispatch),
    toggleOption: bindActionCreators(businessActions.toggleOption, dispatch),
  }),
)(BusinessDetails);
