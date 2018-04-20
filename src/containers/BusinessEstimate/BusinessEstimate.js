/*
 * This is the business estimation scene where the user selects the price they would
 * like to pay and gets to see an estimate of the time it will take to complete the task.
 * @flow
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
// Eslint must be disabled for the next line since expo is included in package.json:
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesome } from '@expo/vector-icons';
import estimateTimeToDone from '../../utils/estimateTimeToDone';
import styles from './BusinessEstimate-styles';
import { BackgroundMap, Slider } from '../../components';
import * as businessActions from '../../actions/business';

type Props = {
  ethCost: number,
  setEthCost: number => {},
  businessType: string,
  mapOpen: boolean
};

function BusinessEstimate(props: Props): React.Node {
  const {
    businessType, ethCost, setEthCost, mapOpen,
  } = props;

  const ethCostAdjusted: number = Math.round(ethCost * 40 * 100) / 100;
  // Get a string representing how long it will take to complete the task
  // (returns an object, e.g.: { number: 3, units: 'days' })
  const timeToFinish: {number: number, units: string} = estimateTimeToDone(
    businessType,
    ethCostAdjusted,
  );
  let timeToFinishString: string;
  if (timeToFinish.number === Infinity) { // In case the time until done is infinite
    timeToFinishString = 'infinite time';
  } else {
    timeToFinishString = `${timeToFinish.number} ${timeToFinish.units}`; /* Construct string of
                                                                            the time until
                                                                            finished */
  }

  return (
    <View style={styles.container}>
      <BackgroundMap drawLine={(businessType.toLowerCase() === 'transport')} />
      <ScrollView
        style={[styles.detailsWrap, (mapOpen ? styles.detailsMinimized : null)]}
        contentContainerStyle={styles.detailsWrapContentContainer}
      >
        <Slider
          icon="clock-o"
          title="Time"
          textValue={`${String(ethCostAdjusted)} ETH`}
          value={ethCost}
          onValueChange={setEthCost}
        />
        <View>
          <Text style={styles.estimateText}>
            Task to be done in {timeToFinishString} at {ethCostAdjusted} ETH.
          </Text>
        </View>
        <View style={styles.line} />
        <TouchableOpacity onPress={Actions.businessExecute}>
          <View style={styles.executeTextWrap}>
            <Text style={styles.executeText}>Execute</Text>
            <FontAwesome name="angle-right" size={20} style={styles.rightArrow} />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default connect(
  state => ({
    ethCost: state.business.ethCost,
    businessType: state.business.businessType,
    mapOpen: state.business.mapOpen,
  }),
  dispatch => ({
    setEthCost: bindActionCreators(businessActions.setEthCost, dispatch),
  }),
)(BusinessEstimate);
