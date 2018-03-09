import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  mapWrap: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  map: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  pin: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '$white'
  },
  mapText: {
    color: '$white',
    fontWeight: '$appBoldWeight',
    fontSize: 18
  },
  leftArrow: {
    backgroundColor: '$focusAreaDarkerTranslucent',
    position: 'absolute',
    left: 0,
    width: '8%',
    height: 100,
    top: '50%',
    marginTop: -50,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
  },
  leftArrowMapMinimized: {
    left: '90%'
  },
  leftArrowText: {
    lineHeight: 100,
    textAlign: 'center',
    color: '$white',
    fontSize: 24
  }
});
