import {
  StyleSheet
} from 'react-native';

const styles =
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#222',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color: "#eee",
    },
    instructions: {
      textAlign: 'center',
      color: '#aaa',
      marginBottom: 5,
    },
    inputContainer: {
      marginTop: 5,
      marginBottom: 5,
      alignItems: 'center',
    },
    barbellInput: {
      width: 80,
      height: 40,
      borderColor: '#999',
      borderWidth: 1,
      backgroundColor: '#333',
      color: '#aaa'
    }
  });

export default styles;
