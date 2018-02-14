/*
 * This is the business selection scene.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { bindActionCreators } from 'redux';
import { FontAwesome } from '@expo/vector-icons';
import styles from './Business-styles';

export default class Business extends React.Component {
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
            renderItem={({item}) => <View style={styles.businessType}>
              <Text style={styles.businessTypeText}>{item.key}</Text>
              <FontAwesome name="angle-right" size={25} style={styles.rightArrow} />
            </View>}
          />
        </View>
      </View>
    );
  }
}
