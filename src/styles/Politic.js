import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({

    view: {
        flex:1, 
        flexDirection: "column", 
        backgroundColor:'white'
    },
    text1: {
     fontSize: hp('3%'), 
     textAlign: 'center',
     marginTop: hp('2%'),
     marginBottom: hp('2%'),
    },
    text2: {
        textAlign: "justify", 
        fontSize:hp('2.5%'),
        marginHorizontal: wp('2%')
    },
    text3: {
        color: 'blue', 
        fontSize:hp('2.5%'),   
        marginHorizontal: wp('2%')
    },



});

export default styles;

