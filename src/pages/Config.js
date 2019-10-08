import React, { Component } from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'; 
import { Container, Content, Button, List, ListItem, Text, Left, Body} from 'native-base';
import styles from '../styles/Config';
import Auth0 from "react-native-auth0";
import Config from "react-native-config";
import SInfo from "react-native-sensitive-info";
import { NavigationActions, StackActions } from "react-navigation";
 
const auth0 = new Auth0({
  domain: Config.AUTH0_DOMAIN,
  clientId: Config.AUTH0_CLIENT_ID
});


export default class Configuration extends Component {
  render() {
    const { navigation } = this.props;
    return ( 
      <Container>
        
        <Content>
          <List style={styles.list}>  

            <ListItem avatar style={styles.listItem} onPress={() => navigation.navigate('Chat')}>  
              <Left> 
                <Icon name="user" size={22} color="black" style={{marginTop: 20}} />
              </Left>
              <Body>
                <Text style={styles.text}>Edição de perfil</Text>
                <Text style={styles.textNote} note>Altere a foto de perfil, descrição, informações e faça upload de novas fotos.</Text>             
              </Body>    
            </ListItem>
            
            <ListItem avatar style={styles.listItem} onPress={() => navigation.navigate('Interest')}>
              <Left>
              <Button transparent >
                <Icon active name="heart" size={22} style={{marginTop: 20}} />
               </Button>
              </Left>
              <Body>
                  <Text style={styles.text}>Interesses</Text>
                <Text style={styles.textNote} note>Defina seu gênero preferido, idade e distância máxima.</Text>
              </Body>
            </ListItem>

            <ListItem avatar style={styles.listItem} onPress={() => navigation.navigate('Additional')} >
              <Left>
                <Icon name="upload" size={22} style={{marginTop: 20}} />
              </Left>
              <Body>  
                <Text style={styles.text}>Adicionais</Text>
                <Text style={styles.textNote} note>Adicione suas melhores fotos a partir da sua galeria.</Text>
              </Body>
            </ListItem>
  
            <ListItem avatar style={styles.listItem} onPress={() => navigation.navigate('Politic')} >
              <Left>
                <Icon name="book" size={22} style={{marginTop: 20}} />
              </Left>
              <Body>
                <Text style={styles.text}>Política</Text>
                <Text style={styles.textNote} note>Veja nossa política de privacidade e termos e condições de uso.</Text>
              </Body>
            </ListItem>
            
            <ListItem avatar style={styles.listItem} onPress={() => navigation.navigate('About')} >
              <Left> 
                <Icon active name="question" size={22} style={{marginTop: 20}} />
              </Left>
              <Body>
                <Text style={styles.text}>Sobre</Text>
                <Text style={styles.textNote} note>Declarações do app.</Text>
              </Body>
            </ListItem>
          </List> 
        </Content>

        <TouchableOpacity style={styles.button} onPress={this.logout} >
            <Text style={styles.textbtn} > Sair </Text> 
        </TouchableOpacity> 

      </Container> 
    );
  }

  logout = () => {
    console.log("logging out...");

    SInfo.deleteItem("accessToken", {});
    SInfo.deleteItem("refreshToken", {});

    this.gotoLogin();

    auth0.webAuth
      .clearSession()
      .then(res => {
        console.log("clear session ok");
        console.log(res);
      })
      .catch(err => {
        console.log("error clearing session.");
        console.log(err);
      });
  };

  gotoLogin = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ 
          routeName: "Login"
        })
      ]
    }); 

    this.props.navigation.dispatch(resetAction);
  };
}
