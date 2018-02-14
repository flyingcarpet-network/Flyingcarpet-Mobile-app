import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000000'
  },
  line: {
    borderTopColor: "rgba(255,255,255,0.7)",
    borderTopWidth: 1,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20
  },
  businessTypeListWrap: {
    marginTop: 20,
    flexDirection: 'column',
    flex: 1
  },
  businessTypeList: {
    flex: 1
  },
  businessType: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    position: 'relative'
  },
  businessTypeText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center'
  },
  rightArrow: {
    color: 'white',
    position: 'absolute',
    right: 10,
    top: 9
  }
});
