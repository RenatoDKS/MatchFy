/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({

  container:{
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
  },

  viewComponents:{ 
    backgroundColor: "purple",
    height: hp('37.5%'),
    width: wp('100%'), 
    flexDirection: "row",
  },

  viewMap:{
    height: hp('57.5%'),
    width: wp('100%'),
  },

  viewName:{
    height: hp('5%'),
    width: wp('100%'),
    backgroundColor: "purple",
    alignItems: "center",
  },

  name:{
    fontSize: hp('4,5%'),
    fontWeight: "bold",
  },

  config:{
    width: wp('15%'), 
    height: hp('30%'),
    top: hp('6%'), 
    left: hp('1%'), 
  },

  picture:{
    width: wp('70%'), 
    height: hp('32%'),
    marginTop: hp('5%'),
    borderRadius: hp('100%'), 
    flex: 1, 

  },

  edit:{
    width: wp('15%'), 
    height: hp('30%'),
    top: hp('6%'), 
    right: hp('1%'),   
  },

  map:{
    flex: 1,
  },

});

export default styles;

