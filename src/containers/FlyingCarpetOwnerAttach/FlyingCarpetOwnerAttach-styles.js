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
  cameraWrap: {
    flex: 1,
    alignItems: 'stretch',
    flexDirection: 'column'
  },
  cameraInstructions: {
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  cameraInstructionText: {
    textAlign: 'center',
    fontSize: 18,
    color: '$appTextLightColor',
    paddingLeft: '5%',
    paddingRight: '5%'
  },
  camera: {
    flex: 0.85
  },
  instructionText: {
    paddingTop: '20%',
    textAlign: 'center',
    fontSize: 24,
    color: '$appTextLightColor',
    paddingLeft: '20%',
    paddingRight: '20%'
  }
});
