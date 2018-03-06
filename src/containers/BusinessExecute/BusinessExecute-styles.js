import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '$focusAreaDarker'
  },
  spinnerWrap: {
    flex: 0.5,
    alignItems: 'center',
    flexDirection: 'column'
  },
  spinnerInnerWrap: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row'
  },
  spinner: {
    color: '$white'
  },
  textWrap: {
    flex: 0.5
  },
  taskExecutionText: {
    textAlign: 'left',
    paddingLeft: 40,
    paddingRight: 40,
    fontSize: 19,
    color: '$white'
  },
  taskCostText: {
    paddingTop: 30
  }
});
