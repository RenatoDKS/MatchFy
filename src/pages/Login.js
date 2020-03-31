import React, { Component } from "react";
import { View, Text, StatusBar, Button, Linking } from "react-native";
import { NavigationActions, StackActions } from "react-navigation";
import LinearGradient from 'react-native-linear-gradient';
import styles from "../styles/Login";


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
    };
  }
 
  get_Response_Info = (error, result) => {
    if (error) {
      //Alert for the Error
      Alert.alert('Error fetching data: ' + error.toString());
    } else {
      //response alert
      alert(JSON.stringify(result));
      this.setState({ user_name: 'Welcome' + ' ' + result.name });
      this.setState({ token: 'User Token: ' + ' ' + result.id });
      this.setState({ profile_pic: result.picture.data.url });
    }
  };
 
  onLogout = () => {
    //Clear the state after logout
    this.setState({ user_name: null, token: null, profile_pic: null });
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
    AccessToken.getCurrentAccessToken().then(data => {
      if(data != null) navigation.navigate('TabNav')
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
        {/* <Button title="aq" onPress={()=>navigation.navigate('TabNav')}/> */}
        <LoginButton
          readPermissions={['public_profile']}
          onLoginFinished={(error, result) => {
            if (error) {
              alert(error);
              alert('login has error: ' + result.error);
            } else if (result.isCancelled) {
              alert('login is cancelled.');
            } else {
              AccessToken.getCurrentAccessToken().then(data => {
                alert(data.accessToken.toString());

                navigation.navigate('TabNav')
              });
            }
          }}
          onLogoutFinished={this.onLogout} 
        />
        

        <Text style={styles.textPolitic} onPress={() => Linking.openURL('http://ricardoramosdeoliveira.com.br/politica/politica_privacidade.html')}>Politica de privacidade</Text>
      </View>
    </LinearGradient>
    );
  }
}