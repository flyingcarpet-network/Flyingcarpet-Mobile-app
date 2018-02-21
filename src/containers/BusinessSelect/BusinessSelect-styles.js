import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgba(28,29,49,0.85)'
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
    backgroundColor: '#2F3050',
    width: '80%',
    aspectRatio: 1,
    borderRadius: '50% - 1 + 1', // "- 1 + 1" is a hacky way to force react-native-extended-stylesheet to compute the value as a number (because borderRadius doesn't accept a percentage)
    flexDirection: 'column',
    alignItems: 'center'
  },
  businessTypeIcon: {
    color: '$white',
    width: '100%',
    textAlign: 'center',
    lineHeight: '100% - 1 + 1', // "- 1 + 1" is a hacky way to force react-native-extended-stylesheet to compute the value as a number (because borderRadius doesn't accept a percentage)
  },
  businessTypeText: {
    fontSize: 14,
    paddingTop: 5,
    color: '$white',
    textAlign: 'center'
  }
});
