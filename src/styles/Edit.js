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
  
  },

  button: {
    height: 50,  
    width : 150, 
    borderRadius: 75, 
    backgroundColor: '#3A5A97',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 100,
},

icon:{
  left: wp('80%'),
  top: hp('-5%'), 
  marginBottom: hp('-5%'),
},

  form:{
    backgroundColor: 'white',
    marginBottom: hp('1%'),
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

});

export default styles;

