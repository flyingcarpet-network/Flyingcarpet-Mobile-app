import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100,
    paddingTop: 40
  },
  buttonWrap: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center'
  },
  button: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0)",
    width: 260,
    height: 45,
    borderColor: "rgba(255,255,255,0.7)",
    borderWidth: 1,
    borderRadius: 5,
    paddingTop: 20,
    paddingBottom: 20
  },
  buttonText: {
    fontWeight: "600"
  }
});
