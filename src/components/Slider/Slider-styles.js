import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  sliderWrap: {
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row'
  },
  borderBottom: {
    borderBottomColor: '$lightBorder',
    borderBottomWidth: 1
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
  valueText: {
    textAlign: 'right',
    fontSize: 20,
    color: '$white',
    flex: 0.4,
    display: 'flex'
  },
  slider: {
    marginBottom: -4 // Because the slider bar has some extra margin/padding under it ..
  },
  sliderThumbStyle: {
    backgroundColor: '$greyWhite'
  }
});
