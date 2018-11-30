import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    alignItems: 'center',
    height: 50,
    width: 500,
    fontSize: 30,
    lineHeight: 40,
    borderWidth: 1,
    borderColor: '#646a70',
    borderRadius: 3,
    shadowColor: '#b9b9b9',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,
    shadowOpacity: 0.6,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 20
  },
  inputError: {
    alignItems: 'center',
    height: 50,
    width: 500,
    fontSize: 30,
    lineHeight: 40,
    borderWidth: 1,
    borderColor: '#c93c23',
    backgroundColor: 'rgba(201, 60, 35, 0.1)',
    borderRadius: 3,
    shadowColor: '#b9b9b9',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,
    shadowOpacity: 0.6,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 20
  },
  label: {
    fontSize: 30,
    alignItems: 'flex-start',
  },

  firstLabel: {
    marginTop: 50,
    fontSize: 30,
    alignItems: 'flex-start',
  }
});
