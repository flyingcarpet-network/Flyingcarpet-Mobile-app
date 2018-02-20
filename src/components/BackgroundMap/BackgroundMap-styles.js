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
    flex: 1
  },
  pin: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'white'
  },
  leftArrow: {
    backgroundColor: '$appBackgroundLightTransparentColor',
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
    color: '#FFFFFF',
    fontSize: 30
  }
});
