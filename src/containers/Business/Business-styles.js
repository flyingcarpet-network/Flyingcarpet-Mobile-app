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
    marginLeft: 20,
    marginRight: 20
  },
  businessTypeListWrap: {
    flexDirection: 'column',
    flex: 1
  },
  businessTypeList: {
    flex: 1,
    paddingTop: 20
  },
  businessType: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    position: 'relative'
  },
  businessTypeText: {
    fontSize: 18,
    color: '$appTextColor',
    textAlign: 'center'
  },
  rightArrow: {
    color: '$appTextColor',
    position: 'absolute',
    right: 10,
    top: 9
  }
});
