import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '$focusAreaDarker'
  },
  line: {
    borderTopColor: '$lightBorder',
    borderTopWidth: 1
  },
  detailsWrap: {
    flex: 1,
    flexDirection: 'column'
  },
  detailsWrapContentContainer: {
    alignItems: 'stretch',
    flexDirection: 'column'
  },
  detailWrap: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    height: 85
  },
  icon: {
    width: 55,
    paddingRight: 10,
    color: '$white',
    lineHeight: 45,
    textAlign: 'center'
  },
  detailTitle: {
    fontSize: 20,
    color: '$white',
    textAlign: 'left',
    // padding: 10
    flex: 0.6,
    lineHeight: 45
  },
  detailText: {
    textAlign: 'right',
    fontSize: 20,
    flex: 0.4,
    color: '$white',
    lineHeight: 45,
    flexWrap: 'wrap'
  },
  centralText: {
    textAlign: 'center',
    fontSize: 24,
    color: '$white',
    paddingLeft: '10%',
    paddingRight: '10%'
  },
  instructionText: {
    paddingTop: '20%'
  },
  mapWrap: {
    height: 300
  },
  map: {
    flex: 1
  },
  mapText: {
    color: '$white',
    fontWeight: '$appBoldWeight',
    fontSize: 22
  }
});
