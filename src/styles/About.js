/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({

container:{
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
},

view:{
  flex: 1, 
  backgroundColor:'white',
  marginTop: hp('5%'), 
},

title:{
  textAlign: 'center', 
  fontSize: hp('10%'),
  marginTop: '20%',
},

subtitle:{
  fontSize: hp('3%'), 
  marginLeft: hp('33%'), 
  paddingBottom: hp('3%'),
},

type:{
  color:'black',
  fontSize: hp('2.5%'),
},

description:{
  color:'gray',
  fontSize: hp('2.2%'), 
},

button:{
  alignItems: 'center', 
  backgroundColor:'#fc1808', 
  padding: hp('2%'), 
  borderRadius:100, 
  marginTop: hp('6%'),  
  width : hp('20%'), 
  marginLeft: hp('17%'),  
},

textButton:{
  color:'white',
},


});

export default styles;

