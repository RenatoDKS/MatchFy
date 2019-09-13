import React, { Component } from "react";
import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import { NavigationActions, StackActions } from "react-navigation";
import Auth0 from "react-native-auth0";
import Config from "react-native-config";
import DeviceInfo from "react-native-device-info";
import SInfo from "react-native-sensitive-info";

import RNRestart from "react-native-restart";

import styles from "../styles/Login";
import { Thumbnail } from "native-base";

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
    return (
      <View style={styles.view} >
         <StatusBar backgroundColor="purple"/> 
       <Text style={styles.textTitle}> Matchfy </Text>
        
        {this.state.hasInitialized && (
          <TouchableOpacity style={styles.button} onPress = {this.login}>
            <Text style={styles.text}> Login </Text>
        </TouchableOpacity>
        )}
      </View> 
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