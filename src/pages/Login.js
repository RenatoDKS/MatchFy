import React, { Component } from "react";
import { View, Text, StatusBar, TouchableOpacity, Linking } from "react-native";
import { NavigationActions, StackActions } from "react-navigation";
import Auth0 from "react-native-auth0";
import Config from "react-native-config";
import DeviceInfo from "react-native-device-info"; 
import SInfo from "react-native-sensitive-info";
import LinearGradient from 'react-native-linear-gradient';
import RNRestart from "react-native-restart";
import styles from "../styles/Login";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



const auth0 = new Auth0({  
  domain: Config.AUTH0_DOMAIN,
  clientId: Config.AUTH0_CLIENT_ID
});

export default class Login extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header:null  
 
    };
  };
 

  state = {
    hasInitialized: false
  };

  componentDidMount() {
    console.log("boom panes!");
    SInfo.getItem("accessToken", {}).then(accessToken => {
      if (accessToken) {
        auth0.auth
          .userInfo({ token: accessToken })
          .then(data => {
            this.gotoAccount(data);
          })
          .catch(err => {
            SInfo.getItem("refreshToken", {}).then(refreshToken => {
              auth0.auth
                .refreshToken({ refreshToken: refreshToken })
                .then(newAccessToken => {
                  SInfo.setItem("accessToken", newAccessToken);
                  RNRestart.Restart();
                })
                .catch(err2 => {
                  console.log("err getting new access token");
                  console.log(err2);
                });
            });
          });
      } else {
        this.setState({
          hasInitialized: true
        });
        console.log("no access token");
      }
    });
  }

  render() {
    const { navigation } = this.props;
    return (
      <LinearGradient colors={['#87d383', '#57b552', '#359830', '#1d7818', '#075b03']} style={{flex: 1}}>  
       <StatusBar backgroundColor={'#87d383'}></StatusBar>
      <View style={styles.view}> 

        <Text style={styles.textTitle}>Matchfy</Text> 
        
        <Text style={styles.textsubTitle}>Seja bem-vindo</Text>
        
        {this.state.hasInitialized && (
        <TouchableOpacity style={styles.button} onPress = {this.login}>
            <Text style={styles.text}> Continue com Facebook </Text>
        </TouchableOpacity> 
        )}

        <Text style={styles.textPolitic} onPress={() => Linking.openURL('http://ricardoramosdeoliveira.com.br/politica/politica_privacidade.html')}>Politica de privacidade</Text>
      </View>
    </LinearGradient>
    );
  }

  ////////////////////////////////////////////////////////
  login = () => {
    auth0.webAuth
      .authorize({
        scope: Config.AUTHO_SCOPE,
        audience: Config.AUTH0_AUDIENCE,
        device: DeviceInfo.getUniqueID(),
        prompt: "login"
      })
      .then(res => {
        auth0.auth
          .userInfo({ token: res.accessToken })
          .then(data => {
            this.gotoAccount(data);
          })
          .catch(err => {
            console.log("err: ");
            console.log(JSON.stringify(err));
          });

        SInfo.setItem("accessToken", res.accessToken, {});
        SInfo.setItem("refreshToken", res.refreshToken, {});
      })
      .catch(error => {
        console.log("error occurrdzz");
        console.log(error);
      });
  };

  gotoAccount = data => {
    console.log(data);
    this.setState({
      hasInitialized: true
    });

    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: "TabNav",    
          params: {
            name: data.name,
            picture: data.picture,
          }
        })
      ]
    });

    this.props.navigation.dispatch(resetAction);
  };
}     