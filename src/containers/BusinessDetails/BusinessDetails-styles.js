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
  detailsWrap: {
    flexDirection: 'column',
    flex: 1
  },
  detailsWrapContentContainer: {
    alignItems: 'stretch',
    flexDirection: 'column'
  },
  detailTitle: {
    fontSize: 18,
    color: '$appTextColor',
    textAlign: 'left',
    padding: 10
  },
  mapWrap: {
    height: 200,
    width: '100%'
  },
  map: {
    flex: 1
  },
  sliderWrap: {
    height: 100,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  centralText: {
    textAlign: 'center',
    fontSize: 24,
    color: '$appTextColor'
  },
  optionCheckboxesWrap: {
    height: 200,
    alignItems: 'stretch',
    marginTop: 10,
    marginBottom: 30
  }
});
