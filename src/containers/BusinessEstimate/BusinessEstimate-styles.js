import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  line: {
    borderTopColor: '$appLineColor',
    borderTopWidth: 1
  },
  detailsMinimized: {
    left: '-90%'
  },
  detailsWrap: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '$appBackgroundLightColor',
    right: '10%',
    left: 0,
    width: '90%'
  },
  detailsWrapContentContainer: {
    alignItems: 'stretch',
    flexDirection: 'column'
  },
  sliderWrap: {
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row'
  },
  sliderTitleIcon: {
    width: 60,
    paddingRight: 10,
    color: '$darkGreyColor'
  },
  sliderInnerWrap: {
    flexDirection: 'column',
    flex: 1
  },
  sliderTitlesWrap: {
    flexDirection: 'row'
  },
  detailTitle: {
    fontSize: 20,
    color: '$appTextDarkColor',
    textAlign: 'left',
    flex: 0.6,
    display: 'flex'
  },
  centralText: {
    textAlign: 'right',
    fontSize: 20,
    color: '$appTextDarkColor',
    flex: 0.4,
    display: 'flex'
  },
  slider: {
    marginBottom: -4
  },
  sliderTrackStyle: {
    backgroundColor: '$greyColor'
  },
  sliderThumbStyle: {
    backgroundColor: '$darkGreyColor'
  },
  estimateText: {
    textAlign: 'center',
    fontSize: 24,
    color: '$appTextDarkColor',
    paddingLeft: '20%',
    paddingRight: '20%',
    paddingTop: 20,
    paddingBottom: 20
  },
  executeTextWrap: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    position: 'relative'
  },
  executeText: {
    fontSize: 18,
    color: '$appTextDarkColor',
    textAlign: 'center'
  },
  rightArrow: {
    color: '$appTextDarkColor',
    position: 'absolute',
    right: 10,
    top: 9
  }
});






// import EStyleSheet from 'react-native-extended-stylesheet';

// export default EStyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column'
//   },
//   line: {
//     borderTopColor: '$appLineColor',
//     borderTopWidth: 1
//   },
//   detailsMinimized: {
//     right: '90%',
//     left: 'auto'
//   },
//   detailsWrap: {
//     flexDirection: 'column',
//     flex: 1,
//     backgroundColor: '$appBackgroundLightColor',
//     right: '10%',
//     left: 0,
//     width: '90%'
//   },
//   detailsWrapContentContainer: {
//     alignItems: 'stretch',
//     flexDirection: 'column'
//   },
//   detailTitle: {
//     fontSize: 18,
//     color: '$appTextLightColor',
//     textAlign: 'left',
//     padding: 10
//   },
//   mapWrap: {
//     height: 200,
//     width: '100%'
//   },
//   map: {
//     flex: 1
//   },
//   sliderWrap: {
//     height: 100,
//     alignItems: 'stretch',
//     justifyContent: 'center'
//   },
//   centralText: {
//     textAlign: 'center',
//     fontSize: 24,
//     color: '$appTextLightColor'
//   },
//   taskEstimateText: {
//     paddingLeft: '20%',
//     paddingRight: '20%'
//   },
//   executeTextWrap: {
//     padding: 10,
//     marginTop: 10,
//     marginBottom: 10,
//     position: 'relative'
//   },
//   executeText: {
//     fontSize: 18,
//     color: '$appTextLightColor',
//     textAlign: 'center'
//   },
//   rightArrow: {
//     color: '$appTextLightColor',
//     position: 'absolute',
//     right: 10,
//     top: 9
//   }
// });
