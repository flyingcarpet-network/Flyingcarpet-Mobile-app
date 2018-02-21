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
  sliderWrap: {
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row'
  },
  sliderTitleIcon: {
    width: 60,
    paddingRight: 10,
    color: '$white'
  },
  sliderInnerWrap: {
    flexDirection: 'column',
    flex: 1
  },
  sliderTitlesWrap: {
    flexDirection: 'row'
  },
  detailTitle: {
    fontSize: 20,
    color: '$white',
    textAlign: 'left',
    flex: 0.6,
    display: 'flex'
  },
  centralText: {
    textAlign: 'right',
    fontSize: 20,
    color: '$white',
    flex: 0.4,
    display: 'flex'
  },
  slider: {
    marginBottom: -4 // Because the slider bar has some extra margin/padding under it ..
  },
  // sliderTrackStyle: {
  //   backgroundColor: '$yellow'
  // },
  sliderThumbStyle: {
    backgroundColor: '$greyWhite'
  },
  optionCheckboxesWrap: {
    // height: 200,
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
    fontWeight: 'normal'
  },
  estimateTextWrap: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    position: 'relative'
  },
  estimateText: {
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
