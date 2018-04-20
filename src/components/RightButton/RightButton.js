/*
 * This component is used in `routes.js` as right button on the navigation bar
 * @flow
 */

import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './RightButton-styles';

type Props = {
  children: React.Node,
  onPress: () => {}
};

function RightButton(props: Props): React.Node {
  const { children, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}

export default RightButton;
