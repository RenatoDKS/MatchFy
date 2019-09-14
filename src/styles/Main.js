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
    elevation: 3, 
    marginTop: '4%',   
    alignSelf: 'stretch',
     maxHeight: 500,
     borderColor: '#DDD',
    borderRadius: 8, 
    backgroundColor:"yellow",
  },

  card:{
    flex: 1,
    height: hp('75%'),  
    width: wp('100%'),
    flexDirection:'column',
    width: "100%", 
    borderWidth: 1, 
    borderColor: '#DDD',
    borderRadius: 8,   top: 0,
    left: 0,
    right: 0,
    bottom: 0, 
    overflow: 'hidden', 
  },

  textos:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('100%'),
    height: hp('10%'),
  },
  cardTextos:{
  
    flexDirection: 'column',

  },

  cardNome:{
    flexDirection: 'row',
  },

  nome:{

    fontSize: hp('5%'),
    fontWeight: 'bold',
    color: '#333', 
    textAlign: "left",
    
  },

  bio:{
    fontSize: hp('2.5%'),
    color: '#999',
    marginTop: 5,
    lineHeight: 18,
    textAlign: "left",
    paddingVertical: hp('1%'),
    paddingHorizontal: hp('1%'),
  },


  imagem:{
    height: 350, 
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
    position: "relative",  
    left: hp('0%'), 
    right: hp('0%'),  
    justifyContent: 'space-between',  
    marginBottom: hp('5%'),
    },

  infoIcon:{
    borderRadius: 35,  
    backgroundColor: 'yellow', 
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 2,
    shadowOffset:{
      width: 0,
      height: 2,
    }
  },

  button:{
    height: hp('10%'), 
    width: wp('20%'),    
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