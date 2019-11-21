import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5', 
  },

  cardsContainer:{
    flex: 1,
    justifyContent: 'center', 
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: '4.5%', 
    marginLeft: '3.5%',
    width: wp('92%'), 
    borderRadius: 12, 
    alignSelf: 'stretch', 
    borderWidth: 0,
    backgroundColor: '#f5f5f5',
    borderColor: '#f5f5f5',
  },

  card:{ 
    flex: 1,   
    width: wp('93%'), 
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection:'column',
    borderRadius: 12, 
    borderWidth: 0,
    overflow: 'hidden', 
  },

  textos:{
    justifyContent: 'space-between',
    width: wp('100%'),
    height: hp('10%'),
    justifyContent: 'center',
  },

  nome:{

    fontSize: hp('4%'),
    fontWeight: 'bold',
    color: '#333',
  },

  imagem:{
    height: hp('60%'), 
    width: wp('100%'),
    flex: 1,
  },

  empty:{
    marginTop: hp('42%'),
    alignSelf: 'center',
    color: '#999',
    fontSize: 40,
    fontWeight: 'bold',
  },

  buttonView:{
    flexDirection: "row", 
    justifyContent: 'space-between',  
    position: 'relative',
    marginBottom: hp('3%'),
    marginHorizontal: wp('10%'),
    },

  button:{
    height: 60, 
    width: 60,    
    borderRadius: 30,  
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