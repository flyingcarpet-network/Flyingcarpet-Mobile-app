import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  line: {
    borderTopColor: '$appLineColor',
    borderTopWidth: 1
  },
  detailsMinimized: {
    left: '-90%'
  },
  detailsWrap: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '$appBackgroundLightColor',
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
    color: '$darkGreyColor'
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
    color: '$appTextDarkColor',
    textAlign: 'left',
    flex: 0.6,
    display: 'flex'
  },
  centralText: {
    textAlign: 'right',
    fontSize: 20,
    color: '$appTextDarkColor',
    flex: 0.4,
    display: 'flex'
  },
  slider: {
    marginBottom: -4 // Because the slider bar has some extra margin/padding under it ..
  },
  sliderTrackStyle: {
    backgroundColor: '$greyColor'
  },
  sliderThumbStyle: {
    backgroundColor: '$darkGreyColor'
  },
  optionCheckboxesWrap: {
    // height: 200,
    alignItems: 'stretch',
    marginTop: 15,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10
  },
  estimateTextWrap: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    position: 'relative'
  },
  estimateText: {
    fontSize: 18,
    color: '$appTextDarkColor',
    textAlign: 'center'
  },
  rightArrow: {
    color: '$appTextDarkColor',
    position: 'absolute',
    right: 10,
    top: 9
  }
});
