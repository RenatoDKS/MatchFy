/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { black } from 'ansi-colors';

const styles = StyleSheet.create({

  container:{
    flex: 1, 
    flexDirection: 'column',
    justifyContent: 'space-around', 
    backgroundColor: '#f5f5f5', 
  },

  photo:{
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },

  bio:{
    backgroundColor: 'white',
    marginBottom: hp('2.5%'),
  },

  textbtn:{
    fontSize: hp('3%'),
    color: 'white', 
  },

  viewbtn:{
      marginTop: -140,  
  },

  

  button: {
    height: 50,  
    width : 150, 
    borderRadius: 75, 
    backgroundColor: '#3A5A97',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 50,
},

icon:{
  left: wp('80%'),
  top: hp('-5%'), 
  marginBottom: hp('-5%'),
},

  form:{
    backgroundColor: 'white',
    marginBottom: hp('1%'),
    justifyContent: 'center',
    alignItems: 'center', 
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 50,
  },

  img:{
    width: 300, 
    margin: hp('3%'), 
    borderRadius: 50,
    flex: 1,  
    height: 300,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  item: {
    height: 170,  
    alignItems: "center",
    backgroundColor: "#dcda48",
    flexBasis: 0,
    flexGrow: 1,
    margin: 4,
    padding: 20,
    flex: 1,
  },

  foto:{
    height: 170,
    width: wp('45%'), 
    margin: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  itemEmpty: {
    backgroundColor: "transparent"
  },
  text: {
    color: "#333333",
    fontSize: 22,
  }

});

export default styles;

