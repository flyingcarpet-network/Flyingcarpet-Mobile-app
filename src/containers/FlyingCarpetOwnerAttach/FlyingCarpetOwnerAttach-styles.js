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
  cameraWrap: {
    flex: 1,
    alignItems: 'stretch',
    flexDirection: 'column'
  },
  camera: {
    flex: 1
  },
  instructionText: {
    paddingTop: '20%',
    textAlign: 'center',
    fontSize: 24,
    color: '$appTextColor',
    paddingLeft: '20%',
    paddingRight: '20%'
  }
});
