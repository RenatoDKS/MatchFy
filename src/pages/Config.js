import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/AntDesign'; 
import { Container, Content, Button, List, ListItem, Text, Left, Body} from 'native-base';
import styles from '../styles/Config';


export default class Config extends Component {
  render() {
    const { navigation } = this.props;
    return ( 
      <Container>
        
        <Content>
          <List style={styles.list}>  

            <ListItem avatar style={styles.listItem} onPress={() => navigation.navigate('Edit')}>  
              <Left> 
                <Icon name="user" size={45} color="black" />
              </Left>
              <Body>
                <Text style={styles.text}>Perfil</Text>
                <Text style={styles.textNote} note>Altere a foto de perfil, descrição, informações e faça upload de novas fotos.</Text>             
              </Body>    
            </ListItem>
            
            <ListItem avatar style={styles.listItem} onPress={() => navigation.navigate('Interest')}>
              <Left>
              <Button transparent >
                <Icon active name="heart" size={45} />
               </Button>
              </Left>
              <Body>
                  <Text style={styles.text}>Interesses</Text>
                <Text style={styles.textNote} note>Defina seu gênero preferido, idade e distância máxima.</Text>
              </Body>
            </ListItem>

            <ListItem avatar style={styles.listItem} onPress={() => navigation.navigate('Additional')} >
              <Left>
                <Icon name="upload" size={45} />
              </Left>
              <Body>  
                <Text style={styles.text}>Adicionais</Text>
                <Text style={styles.textNote} note>Adicione suas melhores fotos a partir da sua galeria.</Text>
              </Body>
            </ListItem>
  
            <ListItem avatar style={styles.listItem} onPress={() => navigation.navigate('Politic')} >
              <Left>
                <Icon name="book" size={45} />
              </Left>
              <Body>
                <Text style={styles.text}>Política</Text>
                <Text style={styles.textNote} note>Veja nossa política de privacidade e termos e condições de uso.</Text>
              </Body>
            </ListItem>
            
            <ListItem avatar style={styles.listItem} onPress={() => navigation.navigate('About')} >
              <Left> 
                <Icon active name="question" size={45} />
              </Left>
              <Body>
                <Text style={styles.text}>Sobre</Text>
                <Text style={styles.textNote} note>Declarações do app.</Text>
              </Body>
            </ListItem>
          </List> 
        </Content>
      </Container> 
    );
  }
}