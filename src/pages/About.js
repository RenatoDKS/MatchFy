import React from 'react';
import {View, Text, Image} from 'react-native'; 
import styles from '../styles/About';
import {List, ListItem} from 'native-base';

export default class About extends React.Component { 

  render() {
    return (

<View style={styles.container}>

  <View style ={styles.view}>
                
   <Image source={require('../assets/Logopng.png')} style={{height: 300, width: 300, alignSelf: 'center'}}/>  
                
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
        </List>
  </View>
</View>
    )
  }
}