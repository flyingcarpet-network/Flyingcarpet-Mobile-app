import EStyleSheet from 'react-native-extended-stylesheet';
import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '$focusAreaLighter',
    top: getStatusBarHeight(true), // Calculate height of status bar ("true" argument means thefunction will
                                   // return zero for android, since the status bar height is enforced by default)
    left: 0,
    right: 0,
    position: 'absolute'
  },
  closeWrap: {
    borderBottomColor: '$lightBorder',
    borderBottomWidth: 1
  },
  close: {
    fontSize: 30,
    color: '$white',
    textAlign: 'center'
  }
});
