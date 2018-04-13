/*
 * This is the business execution scene that the user sees once the task is being
 * executed.
 * @flow
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { FontAwesome } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import moment from 'moment';
import estimateTimeToDone from '../../utils/estimateTimeToDone';
import styles from './BusinessExecute-styles';
import * as businessActions from '../../actions/business';

const FontAwesomeAnimatable = Animatable.createAnimatableComponent(FontAwesome);

type Props = {
  ethCost: number,
  businessType: string,
  setBusinessTransactionProcessing: boolean => {},
  businessTransactionProcessing: boolean
};

class BusinessExecute extends React.Component<Props> {
  componentDidMount(): void {
    const { setBusinessTransactionProcessing } = this.props;

    setTimeout(
      () => setBusinessTransactionProcessing(true),
      4000
    );
  }
  render(): React.Node {
    const { businessType, ethCost, businessTransactionProcessing } = this.props;

    const ethCostAdjusted: number = Math.round(ethCost * 40 * 100) / 100;
    // Get a string representing how long it will take to complete the task
    // (returns an object, e.g.: { number: 3, units: 'days' })
    const timeToFinish: {number: number, units: string} = estimateTimeToDone(businessType, ethCostAdjusted);

    return (
      <View style={styles.container}>
        <View style={styles.spinnerWrap}>
          <View style={styles.spinnerInnerWrap}>
            <FontAwesomeAnimatable
              animation="rotate" // For react-native-animatable
              easing="linear" // For react-native-animatable
              iterationCount="infinite" // For react-native-animatable
              duration={2000} // For react-native-animatable
              name="spinner" // For FontAwesome
              size={128} // For FontAwesome
              style={styles.spinner} // For FontAwesome
            />
          </View>
        </View>
        <View style={styles.textWrap}>
          {(!businessTransactionProcessing) &&
            <Text style={styles.taskExecutionText}>Finding a decentralized vehicle to perform the task and flyingcarpets to charge along the journey.</Text>
          }
          {businessTransactionProcessing &&
            <Text style={styles.taskExecutionText}>Vehicle found! The result will be send to your profile before {moment().add(timeToFinish.number, timeToFinish.units).format('dddd')}.</Text>
          }
          {businessTransactionProcessing &&
            <Text style={[styles.taskExecutionText, styles.taskCostText]}>Total cost: {ethCostAdjusted} ETH</Text>
          }
        </View>
      </View>
    );
  }
}

export default connect(
  state => ({
    ethCost: state.business.ethCost,
    businessType: state.business.businessType,
    businessTransactionProcessing: state.business.businessTransactionProcessing
  }),
  dispatch => ({
    setBusinessTransactionProcessing: bindActionCreators(businessActions.setBusinessTransactionProcessing, dispatch)
  })
)(BusinessExecute);
