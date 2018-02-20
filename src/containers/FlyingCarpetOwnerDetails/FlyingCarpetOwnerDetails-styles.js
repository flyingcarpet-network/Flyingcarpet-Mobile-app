import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '$appBackgroundDarkColor'
  },
  line: {
    borderTopColor: '$appLineColor',
    borderTopWidth: 1,
    marginTop: 20,
    // marginLeft: 20,
    // marginRight: 20
  },
  detailsWrap: {
    flex: 1,
    flexDirection: 'column'
  },
  detailsWrapContentContainer: {
    alignItems: 'stretch',
    flexDirection: 'column'
  },
  detailTitle: {
    fontSize: 18,
    color: '$appTextLightColor',
    textAlign: 'left',
    padding: 10
  },
  centralText: {
    textAlign: 'center',
    fontSize: 24,
    color: '$appTextLightColor',
    paddingLeft: '20%',
    paddingRight: '20%'
  },
  instructionText: {
    paddingTop: '20%'
  },
  mapWrap: {
    height: 300
  },
  map: {
    flex: 1
  },
  mapText: {
    color: '$appTextLightColor',
    fontWeight: '$appBoldWeight',
    fontSize: 22
  }
});
