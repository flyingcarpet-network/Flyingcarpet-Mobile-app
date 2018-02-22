import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  line: {
    borderTopColor: '$lightBorder',
    borderTopWidth: 1
  },
  detailsMinimized: {
    left: '-90%'
  },
  detailsWrap: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '$focusAreaDarker',
    right: '10%',
    left: 0,
    width: '90%'
  },
  detailsWrapContentContainer: {
    alignItems: 'stretch',
    flexDirection: 'column'
  },
  estimateText: {
    textAlign: 'center',
    fontSize: 24,
    color: '$white',
    paddingLeft: '20%',
    paddingRight: '20%',
    paddingTop: 20,
    paddingBottom: 20
  },
  executeTextWrap: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    position: 'relative'
  },
  executeText: {
    fontSize: 18,
    color: '$white',
    textAlign: 'center'
  },
  rightArrow: {
    color: '$white',
    position: 'absolute',
    right: 20,
    top: 9
  }
});
