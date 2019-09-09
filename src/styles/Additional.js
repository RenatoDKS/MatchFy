/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({

  container:{
    alignSelf: "center",
    justifyContent: "center",
  },

  description: {
    height: hp('20%'),
    width: wp('100%'), 
  },

  photos1: {
    flex: 1,
    flexDirection: 'row',  
    height: hp('30%'), 
    width: wp('100%'),
  },

  photos2: {
    flex: 1,
    flexDirection: 'row',  
    height: hp('30%'), 
    width: wp('100%'),
  },

  ViewButton:{
    height: hp('20%'), 
    width: wp('100%'),
  },

  button:{
    alignItems: 'center', 
    backgroundColor:'gray', 
    padding: hp('2%'), 
    borderRadius:100, 
    marginTop: hp('6%'),  
    width : hp('20%'), 
    marginLeft: hp('17%'),  
  },
  
  textButton:{
    color:'white', 
    fontWeight: 'bold',
    fontSize: hp('3%'),
  },

  textTitle: {
    marginTop: hp('4%'),
    fontWeight: 'bold',
    fontSize: hp('4%'),
  },

  textSubtitle: {
    fontSize: hp('2%'),  
  },
  
  avatarContainer: {
    borderColor: '#9B9B9B',
    backgroundColor: '#BFCDDA',
    borderWidth: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('2%'),
    marginLeft: hp('4%'),
  },
  avatar: {
    width: hp('21%'),
    height: hp('21%'),
  },

});

export default styles;

