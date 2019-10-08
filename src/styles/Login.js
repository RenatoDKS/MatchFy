/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
      height: 50, 
      width: 350,
      borderRadius: 15, 
      backgroundColor: '#3A5A97',
      justifyContent: 'center',
  
  },

  textTitle:{
    fontWeight: 'bold',
    color: 'white',
    fontSize: hp('12%'),
    textAlign: 'center',
    justifyContent: 'center'
  },

  text: {
    color: '#FFF',
    fontSize: 22,
    textAlign: 'center',
  },
  textsubTitle: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: hp('5%'),
    textAlign: 'center',
    justifyContent: 'center'
  },
  textPolitic:{
    textDecorationLine: 'underline',
    color: 'white',
    fontSize: hp('2.2%'),
    textAlign: 'center',
    justifyContent: 'center'
  },

});

export default styles;

