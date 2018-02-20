import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '$appBackgroundLightColor'
  },
  businessTypeListWrap: {
    flexDirection: 'column',
    flex: 1
  },
  businessTypeList: {
    flex: 1
  },
  businessType: {
    paddingTop: 20,
    paddingBottom: 20,
    position: 'relative',
    borderBottomColor: '$appLineColor',
    borderBottomWidth: 1
  },
  businessTypeText: {
    fontSize: 18,
    color: '$appTextDarkColor',
    textAlign: 'center'
  },
  rightArrow: {
    color: '$appTextDarkColor',
    position: 'absolute',
    right: 10,
    paddingTop: 20
  }
});
