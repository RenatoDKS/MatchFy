import React, { Component } from 'react';
import {View,  BackHandler} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'; 
import { Container, Content, Button, List, ListItem, Text, Left, Body} from 'native-base';
import styles from '../styles/Config';
import { StackActions, NavigationActions } from 'react-navigation';
import {
  LoginButton, 
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';

onLogout = () => {
  //Clear the state after logout
  this.props.navigation.navigate('Login')
};

export default class Configuration extends Component {

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', () => { return true; });
  }

  render() {
    const { navigation } = this.props;
    const name = this.props.navigation.getParam('nome');
    const photo = this.props.navigation.getParam('foto');
    return ( 
      <Container>
        
        <Content>
          <List style={styles.list}>  

            <ListItem avatar style={styles.listItem} onPress={() => this.props.navigation.navigate('Edit', {
              nome: name,
              foto: photo,
              id : this.props.navigation.state.params.id //Id do usuário.
            })}>   
              <Left> 
                <Icon name="user" size={22} color="black" style={{marginTop: 20}} />
              </Left>
              <Body>
                <Text style={styles.text}>Edição de perfil</Text>
                <Text style={styles.textNote} note>Altere a foto de perfil, descrição, informações e faça upload de novas fotos.</Text>             
              </Body>    
            </ListItem>
            
            <ListItem avatar style={styles.listItem} onPress={() => navigation.navigate('Interest',{ id : this.props.navigation.state.params.id })}>
              <Left>
              <Button transparent >
                <Icon active name="heart" size={22} style={{marginTop: 20}} />
               </Button>
              </Left>
              <Body>
                  <Text style={styles.text}>Preferências</Text>
                <Text style={styles.textNote} note>Defina seu gênero preferido, idade e distância máxima.</Text>
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
        
        <View style={styles.button}> 
        <LoginButton style={{height: 32, width: 240, backgroundColor: '#00B748'}}/>
        </View>
      </Container> 
    );
  }
}