import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '$focusAreaDarker'
  },
  list: {
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: 0,
    borderTopWidth: 0
  },
  channelInfoContainer: {
    borderBottomColor: '$lightBorder'
  },
  channelInfoContainerNoBorder: {
    borderBottomWidth: 0
  },
  nameHeaderText: {
    fontSize: 14,
    fontWeight: '$appBoldWeight'
  },
  balanceHeaderText: {
    fontWeight: '$appBoldWeight'
  },
  balanceHeader: {
    height: 25
  },
  leftChannelInfo: {
    height: 25,
    flex: 0.7
  },
  rightChannelInfo: {
    height: 50,
    flex: 0.3
  },
  title: {
    color: '$white'
  },
  subtitle: {
    color: '$greyWhite',
    fontWeight: '$normalWeight'
  },
  rightTitle: {
    color: '$white'
  }
});
