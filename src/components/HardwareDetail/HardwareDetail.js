/*
 * This is a presentational component that display an icon, a title, and a value all in a row.
 * The component is used to display hardware information on both the Drone and FlyingCarpet
 * owner pages.
 * @flow
 */

import * as React from 'react';
import { View, Text } from 'react-native';
// Eslint must be disabled for the next line since expo is included in package.json:
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesome } from '@expo/vector-icons';
import styles from './HardwareDetail-styles';

type Props = {
  icon?: string,
  title: string,
  value?: string,
  showBottomBorder?: boolean, /* Represents whether a thin light border should be displayed at the
                                bottom of the component */
  pressable?: boolean, /* Represents whether a right arrow should be showen instead of a "value"
                         (true when HardwareDetail is being used a button) */
  redText?: boolean, // Represents whether the text should be in a red font
  greenText?: boolean // Represents whether the text should be in a green font
};

function HardwareDetail(props: Props): React.Node {
  const {
    icon, title, value, showBottomBorder, pressable, redText, greenText,
  } = props;

  // Configure any optional color changes
  let extraColorStyles;
  if (redText === true) {
    extraColorStyles = styles.red;
  } else {
    extraColorStyles = ((greenText === true) ? styles.green : null);
  }
  return (
    <View style={[styles.detailWrap, ((showBottomBorder === true) ? styles.borderBottom : null)]}>
      {(icon != null && icon.length > 0) &&
        <FontAwesome name={icon} size={28} style={[styles.icon, extraColorStyles]} />
      }
      {(icon != null && icon.length === 0) &&
        <Text style={styles.icon} />
      }
      <Text style={[styles.detailTitle, extraColorStyles]}>{title}</Text>
      {(pressable === false) &&
        <Text style={styles.detailText} numberOfLines={1}>{value}</Text>
      }
      {(pressable === true) &&
        <Text style={styles.detailText}>
          <FontAwesome name="angle-right" size={28} style={styles.icon} />
        </Text>
      }
    </View>
  );
}

HardwareDetail.defaultProps = {
  icon: '',
  showBottomBorder: true,
  value: '',
  pressable: false,
  redText: false,
  greenText: false,
};

export default HardwareDetail;
