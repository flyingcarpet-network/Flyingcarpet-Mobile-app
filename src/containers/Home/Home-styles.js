import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '$appBackgroundColor',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100,
    paddingTop: 40
  },
  buttonWrap: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center'
  },
  button: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0)',
    width: 260,
    height: 45,
    borderColor: '$appLineColor',
    borderWidth: 1,
    borderRadius: 5,
    paddingTop: 20,
    paddingBottom: 20
  },
  buttonText: {
    fontWeight: '$appBoldWeight'
  }
});
