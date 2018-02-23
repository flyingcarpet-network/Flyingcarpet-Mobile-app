import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '$focusAreaDarker',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    // paddingBottom: 100,
    // paddingTop: 40
  },
  appNameWrap: {
    paddingTop: 50,
    paddingBottom: 30,
    paddingLeft: 40,
  },
  appSubNameWrap: {
    borderBottomColor: '$lightBorder',
    borderBottomWidth: 1,
    width: '100%',
    paddingTop: 20,
    paddingBottom: 30,
    paddingLeft: 40
  },
  appName: {
    color: '$white',
    fontSize: 30
  },
  appSubName: {
    color: '$greyWhite',
    textAlign: 'left',
    fontSize: 16
  },
  buttonWrap: {
    borderBottomColor: '$lightBorder',
    borderBottomWidth: 1,
    // flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    // marginTop: 40,
    // marginBottom: 40
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: '$focusAreaLighter',
    // width: 260,
    // height: 45,
    // borderColor: '$appLineColor',
    // borderWidth: 1,
    // borderRadius: 5,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 40,
    paddingRight: 40,
    height: 75 // 35 (height) + 40 (padding)
  },
  icon: {
    color: '$white',
    width: 35,
    marginRight: 20
  },
  buttonText: {
    fontWeight: '$appBoldWeight',
    color: '$white',
    flex: 1,
    lineHeight: 35,
    fontSize: 16
  }
});
