/*
 * @flow
 */

import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '$focusAreaDarker',
  },
  list: {
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: 0,
    borderTopWidth: 0,
  },
  channelInfoContainer: {
    borderBottomColor: '$lightBorder',
    marginTop: 0,
    padding: 0,
  },
  channelInfoHeadersContainer: {
    backgroundColor: '$darkBackgroundVeryTranslucent',
  },
  channelInfoInnerContainer: {
    height: 65, // (85 - 20)
  },
  nameHeaderText: {
    fontSize: 14,
    fontWeight: '$appBoldWeight',
  },
  balanceHeaderText: {
    fontWeight: '$appBoldWeight',
  },
  balanceHeader: {
    height: 25,
  },
  leftChannelTypeInfo: {
    height: 25,
    flex: 0.7,
    margin: 0,
    padding: 0,
  },
  rightChannelTypeInfo: {
    height: 50,
    flex: 0.3,
    margin: 0,
    padding: 0,
  },
  title: {
    color: '$white',
    lineHeight: 32,
    height: 32,
    margin: 0,
    paddingTop: 0,
  },
  subtitle: {
    color: '$greyWhite',
    fontWeight: '$normalWeight',
    height: 32,
    lineHeight: 32,
    margin: 0,
    padding: 0,
  },
  rightTitle: {
    color: '$white',
  },
});
