
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  button: {
    width: 500,
    borderRadius: 40,
    backgroundColor: '#0272b6',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#0272b6',
    width: 200,
    padding: 15,
    margin: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 30
  },
  copy: {
    fontSize: 30,
    color: '#000',
    alignSelf: 'center',
    marginTop: 160
  }
});
