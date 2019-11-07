import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({

  list:{
    marginTop: hp('1%'),   
    flex: 1, 
  },

  listItem:{
    paddingBottom: hp('1%'),
  },

  text:{
    fontSize: hp('3%'), 

  },

  textbtn:{
    fontSize: hp('3%'),
    color: 'white', 
  },

button:{

alignSelf: 'center',
marginBottom: hp('20%') 
},

  textNote:{
    fontSize: hp('2,5%'), 
  },

});

export default styles;

