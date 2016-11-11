import {
  StyleSheet
} from 'react-native';

const styles =
  StyleSheet.create({
    mainContainer: {
      flex: 1
    },
    toolbar:{
      backgroundColor:'#333',
      paddingTop:30,
      paddingBottom:10,
      flexDirection:'row'
    },
    toolbarButton:{
      width: 50
    },
    toolbarTitle:{
      color:'#eee',
      textAlign:'center',
      fontWeight:'bold',
      fontSize: 18,
      flex:1
    },
    toolbarButtonText: {
      color: '#aaa',
      backgroundColor: '#555',
      borderColor: '#000',
      textAlign: 'center',
      padding: 5
    },
    content: {
      backgroundColor:'#eee',
      flex:1,
      paddingTop: 10
    },
    instructions: {
      textAlign: 'center',
      color: '#333',
      marginBottom: 1,
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
      backgroundColor: '#eee',
      color: '#444',
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
      width: 40,
      fontSize: 18,
      height: 30,
      textAlign: 'center',
      margin: 10
    },
    plateButtonContainer: {
      height: 30,
      margin: 5,
      alignItems: 'center',
      flexDirection:'row'
    },
    plateText: {
      fontSize: 18,
      height: 30,
      width: 200,
      textAlign: 'center',
      margin: 10
    },
    plateInventory: {
      alignItems: 'center',
      flex: 1
    }
  });

export default styles;
