import {
  StyleSheet
} from 'react-native';

const styles =
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#333',
    },
    main: {
      justifyContent: 'center',
      alignItems: 'center',
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
      borderColor: '#666',
      padding: 2,
      borderWidth: 1,
      backgroundColor: '#ccc',
      color: '#333',
    },
    button: {
      backgroundColor: '#efefef',
      height:50,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:10
    },
    topMenu: {
      backgroundColor: '#555'
    }
  });

export default styles;
