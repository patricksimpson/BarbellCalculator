import {
  StyleSheet
} from 'react-native';

const styles =
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#333',
    },
    topMenu: {
      height: 130
    },
    main: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color: "#eee",
      height: 30,
    },
    instructions: {
      textAlign: 'center',
      color: '#aaa',
      marginBottom: 5,
    },
    inputContainer: {
      flex: 1,
      flexDirection: 'column',
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
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:10,
      width: 120
    },
    plateButton: {
      width: 10,
      fontSize: 8,
      textAlign: 'center',
      height: 30,
      margin: 5
    },
    plateInventory: {
      marginTop: 10,
      marginBottom: 10
    }
  });

export default styles;
