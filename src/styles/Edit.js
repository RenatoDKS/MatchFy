/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { black } from 'ansi-colors';

const styles = StyleSheet.create({

  container:{
    flex: 1,
    alignSelf: "center",
    justifyContent: 'space-between',
    backgroundColor: 'purple',
    
  },

  viewComponents:{ 
    backgroundColor: "purple", 
    height: hp('40%'),
    width: wp('100%'), 
    flexDirection: "row",
    alignSelf: 'center',
    justifyContent: 'center',
  },

  viewBio:{
    backgroundColor: 'purple',
    width: wp('100%'),
  },

  viewGalery:{
    backgroundColor: 'purple',
    width: wp('100%'),
    
    flexDirection: 'row',

  },

  viewName:{
    
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
    
    top: hp('2%'), 
    left: hp('1%'), 
  },

  picture:{
    width: wp('80%'), 
    marginTop: hp('2%'), 
    borderRadius: 200, 
    height: hp('38%'),
  },

  edit:{
    width: wp('15%'), 
    top: hp('2%'), 
    right: hp('1%'),   
  },

  bio:{
    borderWidth: 1,
    borderRadius: hp('6%'),
    marginTop: '2%',
    marginHorizontal: '2%',
    height: hp('33%'),
    color: 'black',
    backgroundColor: 'white',
    textAlign: 'justify',
    fontSize: hp('2.5%'),
    paddingTop: hp('3%'),
    paddingLeft: hp('2%'),
  },

  avatarContainer: {
    borderColor: '#9B9B9B',
    backgroundColor: '#BFCDDA',
    borderWidth: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('3.5%'),
    marginLeft: hp('1.5%'),
  },
  avatar: {
    width: hp('11%'),
    height: hp('11%'),
  },

  button:{
    marginTop: hp('34%'),
    marginLeft: hp('-6%'),
    height: hp('6%'), 
    width: wp('11%'),     
    borderRadius: 35,  
    backgroundColor: '#FFF', 
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 2,
    shadowOffset:{
      width: 0,
      height: 2,
    },
  },

});

export default styles;

