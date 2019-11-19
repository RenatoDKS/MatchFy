/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  view: {
    marginVertical: '20%',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
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
    marginTop: '20%',
    textDecorationLine: 'underline',
    color: '#9C9B9B', 
    fontSize: hp('2.2%'),
    textAlign: 'center',
    justifyContent: 'center',  
  }, 

});

export default styles;

