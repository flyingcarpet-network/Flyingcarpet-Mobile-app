import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '$darkBackgroundTranslucent'
  },
  businessTypeListWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    paddingLeft: '3.3333%',
    paddingRight: '3.3333%'
  },
  spacer: {
    width: '16.6667%'
  },
  businessTypeWrap: {
    width: '33.3333%',
    aspectRatio: 1,
    alignItems: 'center',
    marginTop: 40
  },
  businessTypeCircle: {
    backgroundColor: '$focusAreaDarker',
    width: '70%',
    aspectRatio: 1,
    borderRadius: '50% - 1 + 1', // "- 1 + 1" is a hacky way to force react-native-extended-stylesheet to compute the value as a number (because borderRadius doesn't accept a percentage)
    flexDirection: 'column',
    alignItems: 'center'
  },
  businessTypeIcon: {
    color: '$white',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    // backgroundColor: 'red',
    lineHeight: '90% - 1 + 1', // "- 1 + 1" is a hacky way to force react-native-extended-stylesheet to compute the value as a number (because lineHeight doesn't accept a percentage)
  },
  businessTypeText: {
    fontSize: 11,
    paddingTop: 5,
    color: '$white',
    textAlign: 'center'
  }
});
