import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({

    view: {
        flex:1, flexDirection: "column", backgroundColor:'white'
    },
    text1: {
        color:'black', marginLeft:hp('20%'), fontSize: hp('20%')
    },
    text2: {
        textAlign: "justify", fontSize:hp('20%')
    },
    text3: {
        color: 'blue', fontSize:hp('20%')
    },



});

export default styles;

