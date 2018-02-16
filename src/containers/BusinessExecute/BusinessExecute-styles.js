import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '$appBackgroundColor'
  },
  line: {
    borderTopColor: '$appLineColor',
    borderTopWidth: 1,
    marginTop: 20,
    // marginLeft: 20,
    // marginRight: 20
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
    color: '$appTextColor'
  },
  textWrap: {
    flex: 0.5
  },
  taskExecutionText: {
    textAlign: 'left',
    paddingLeft: 40,
    paddingRight: 40,
    fontSize: 24,
    color: '$appTextColor'
  },
  taskCostText: {
    paddingTop: 30
  }
});
