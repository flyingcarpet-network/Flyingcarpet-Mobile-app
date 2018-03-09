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
  optionCheckboxesWrap: {
    alignItems: 'stretch',
    marginTop: 15,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10
  },
  checkboxStyle: {
    marginBottom: 15,
    backgroundColor: '$focusAreaLighter',
    borderColor: '$lightBorder'
  },
  checkboxTextStyle: {
    color: '$white',
    fontWeight: 'normal',
    fontSize: 13
  },
  estimateTextWrap: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    position: 'relative'
  },
  estimateText: {
    fontSize: 14,
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
