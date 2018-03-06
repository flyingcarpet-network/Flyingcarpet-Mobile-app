import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  detailWrap: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    height: 85
  },
  borderBottom: {
    borderBottomColor: '$lightBorder',
    borderBottomWidth: 1
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
  }
});
