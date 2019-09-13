import React from 'react';
import {
  View,
  TouchableOpacity,
  Text
} from 'react-native'; 

import styles from '../styles/About';

import {List, ListItem, Container, Content} from 'native-base';
export default class About extends React.Component { 
   buttonClickListener = () => {
    alert("Deseja realmente deletar sua conta?");
  };
  // TODO: implement your navigationOptions
  render() {
    return (
 
            <View style={styles.container}>


                <View style ={styles.view}>
                
                <Text style = {styles.title}>MatchFy</Text>
                <Text style = {styles.subtitle}>Logo</Text>
                
                <List>
                  <ListItem>
                    <Text style = {styles.type}>{'Versão atual\n'}
                    <Text style = {styles.description}>{'1.0.0'}</Text></Text> 
                  </ListItem>

                  <ListItem>
                    <Text style = {styles.type}>{'Criado por\n'}<Text style = {styles.description}>{'IFSULDEMINAS e cia'}</Text></Text>
                  </ListItem>

                  <ListItem>
                    <Text style = {styles.type}>{'Última atualização\n'}<Text style = {styles.description}>18/08/2019</Text></Text>
                  </ListItem>

                   <ListItem>
                     <Text style = {styles.type}>{'Seu ID\n'}<Text style = {styles.description}>'XXXXX-XX'</Text></Text>
                   </ListItem>
                  </List>

            
          </View>

      </View>

    )
  }
}