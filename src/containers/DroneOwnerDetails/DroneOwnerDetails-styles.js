import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '$focusAreaDarker'
  },
  detailsWrap: {
    flex: 1,
    flexDirection: 'column'
  },
  detailsWrapContentContainer: {
    alignItems: 'stretch',
    flexDirection: 'column'
  },
  centralText: {
    textAlign: 'center',
    fontSize: 24,
    color: '$white',
    paddingLeft: '10%',
    paddingRight: '10%'
  },
  instructionText: {
    paddingTop: '20%'
  }
});
