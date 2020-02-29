import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "rgb(250,90,86)",
        paddingTop: Platform.OS === 'android' ? 40 : 0
      },
  container: {
    width: "100%",
    backgroundColor: 'black',
  },

  drawer: {
    width: "100%",
    backgroundColor: 'black',
  },

  input: {
  
    borderBottomWidth: 1,
    height:'83%',
    borderColor: '#000',
    marginHorizontal:5,
    width: '45%',
    color:'black'


  },
  inputRow: {
    width: "100%",
    flexDirection: 'row',
    alignItems:"center",
    justifyContent:'center',
    backgroundColor: 'rgb(250,90,86)',
    height:'5%'

  },
  card:{
    width:'90%',
    alignItems:'center',
    borderColor:'rgb(250,90,86)',
    borderBottomWidth:1,
    
    flexDirection: 'row'
  }
});