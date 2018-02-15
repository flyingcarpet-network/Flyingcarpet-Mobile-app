/*
 * This is the business selection scene where the user selects the
 * business service they would like to use from a list.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import { FontAwesome } from '@expo/vector-icons';
import styles from './BusinessSelect-styles';
import * as businessActions from '../../actions/business';

class BusinessSelect extends React.Component {
  selectBusiness = businessType => {
    const { setBusinessType } = this.props;

    // Save the name of the business type to redux
    setBusinessType(businessType);

    // Move user to businessDetails scene
    Actions.businessDetails();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.line}></View>
        <View style={styles.businessTypeListWrap}>
          <FlatList
            style={styles.businessTypeList}
            data={[
              {key: 'Infrastructure'},
              {key: 'Agriculture'},
              {key: 'Media'},
              {key: 'Transport'},
              {key: 'Security'},
              {key: 'Insurance'},
              {key: 'Telecommunication'},
              {key: 'Mining'}
            ]}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => this.selectBusiness(item.key)}>
                <View style={styles.businessType}>
                  <Text style={styles.businessTypeText}>{item.key}</Text>
                  <FontAwesome name="angle-right" size={25} style={styles.rightArrow} />
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    );
  }
}

BusinessSelect.propTypes = {
  setBusinessType: PropTypes.func.isRequired
};

export default connect(
  null,
  dispatch => ({
    setBusinessType: bindActionCreators(businessActions.setBusinessType, dispatch)
  })
)(BusinessSelect);
