import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '$focusAreaDarker'
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
    fontSize: 14,
    color: '$white',
    paddingLeft: '5%',
    paddingRight: '5%'
  },
  camera: {
    flex: 0.85
  },
  instructionText: {
    paddingTop: '20%',
    textAlign: 'center',
    fontSize: 19,
    color: '$white',
    paddingLeft: '10%',
    paddingRight: '10%'
  }
});
