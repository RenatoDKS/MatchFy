import React, { Component } from "react";
import { View, Text, StatusBar, TouchableOpacity, Linking, ImageBackground, BackHandler } from "react-native";
import styles from "../styles/Login";
import { NavigationEvents } from 'react-navigation';


import {
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';


export default class Login extends Component {

  constructor() {
    super();
    //Setting the state for the data after login
    this.state = {
      user_name: '', 
      token: '',
      profile_pic: '',
      teste: ''
    };
  }
 
  get_Response_Info = (error, result) => {
    if (error) {
      //Alert for the Error
      Alert.alert('Error fetching data: ' + error.toString());
    } else {
      //response alert
      alert(JSON.stringify(result)); 
      this.setState({ user_name: result.name });
      this.setState({ token: result.id });
      this.setState({ profile_pic: result.picture.data.url });
     // this.props.navigation.navigate('TabNav', {nome: result.name, tok: result.id, foto: result.picture.data.url  })
    }
  };



  onLogout = () => {
    //Clear the state after logout
    this.props.navigation.navigate('Login', {user_name: null, token: null, profile_pic: null})
    BackHandler.exitApp()  
  };

  static navigationOptions = ({ navigation }) => {
    return {
      header:null  
 
    };
  };
 

  state = {
    hasInitialized: false
  };

  componentDidMount(){
    const { navigation } = this.props;
        AccessToken.getCurrentAccessToken().then(
          (data) => {
            if(data != null){
            const infoRequest = new GraphRequest(
              '/me?fields=name,picture.type(large)', 
              null, 
              this._responseInfoCallback
            );
           
            // Start the graph request.
            new GraphRequestManager().addRequest(infoRequest).start();
            }
          }
        )
      }

      componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', () => { return true; });
      }

  render() {
    
    return (
    <ImageBackground source={require('../assets/LogoTxt.png')} style={{ flex: 1 }}>
       <StatusBar backgroundColor={'white'}></StatusBar> 
      
      <View style={styles.view}>   

      <LoginButton
       style={styles.button}
          publishPermissions={["publish_actions"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    const infoRequest = new GraphRequest(
                      '/me?fields=name,picture.type(large)', 
                      null, 
                      //this.get_Response_Info,
                      this._responseInfoCallback,
                      
                    );
                   
                    // Start the graph request.
                    new GraphRequestManager().addRequest(infoRequest).start();
                  }
                )
                 
              }
            }
          }
          onLogoutFinished={this.onLogout}/>

        <Text style={styles.textPolitic} onPress={() => Linking.openURL('http://ricardoramosdeoliveira.com.br/politica/politica_privacidade.html')}>Politica de privacidade</Text>
      </View>
    </ImageBackground>
    );
  }
 
   //Create response callback.
   _responseInfoCallback = (error, result) => {
    if (error) {
      alert('Error fetching data: ' + error.toString());
    } else { 
      
      this.props.navigation.navigate('TabNav', 
      {  
        nome: result.name,
        foto: result.picture.data.url,
      
      }); 
    
    }
  }  
}

