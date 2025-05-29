import { StyleSheet } from 'react-native';


const styleSettings = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 20,
    marginTop: 10,
    color: '#333',
  },
  buttonContainer: {
      flex: 1,
      justifyContent: 'center'
  },
  button: {
    padding: 16,
    borderRadius: 12,
    marginVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5, // Android shadow
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  danger: {
    backgroundColor: '#e74c3c',
  },
  warning: {
    backgroundColor: '#f39c12',
  },
});

export default styleSettings;