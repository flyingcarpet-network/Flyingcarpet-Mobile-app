/*
 * This component is used in `routes.js` as right button on the navigation bar
 * @flow
 */

import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './RightButton-styles';

type Props = {
  children?: React.Node,
  onPress: () => {}
};

export default class RightButton extends React.Component<Props> {
  render(): React.Node {
    const { children, onPress } = this.props;

    return (
      <TouchableOpacity onPress={onPress}><Text style={styles.text}>{children}</Text></TouchableOpacity>
    );
  }
}
