import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({

    view: {
        flex:1, flexDirection: "column", backgroundColor:'white'
    },
    text1: {
        color:'black', marginLeft:hp('2%'), fontSize: hp('3%'), fontWeight: 'bold'
    },
    text2: {
        textAlign: "justify", fontSize:hp('3%'), marginLeft:hp('4%'), marginRight:hp('4%')
    },
    text3: {
        color: 'blue', fontSize:hp('3%'), marginLeft:hp('4%')
    },



});

export default styles;

