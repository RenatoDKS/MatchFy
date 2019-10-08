import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, TextInput, StatusBar, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/Edit';

import { Divider } from 'react-native-elements';

export default class Edit extends Component {

  static navigationOptions = {
    title: 'Edição de Perfil',
  };
 

  render() {
    const { navigation } = this.props;
    return (

      <View style={styles.container}>
      <ScrollView>
        <StatusBar backgroundColor='#f5f5f5'/>

        <View style={styles.photo}>
          <Image source={require('../assets/monica.jpeg')} style={styles.img} />
          <TouchableOpacity style={styles.icon}>
          <Icon name="camera" size={40} color="gray"/>
          </TouchableOpacity>
        </View>

        <View style={styles.bio}>
          <TextInput multiline={true} numberOfLines={5}>Digite sua bio</TextInput> 
        </View>

        <View style={styles.form}>
              
          <TextInput editable={false}> Nome</TextInput>
          <Divider /> 
          <TextInput editable={false}> Idade</TextInput> 
          <Divider /> 
          <TextInput > Genero</TextInput> 
          <Divider /> 
          <TextInput> Cidade</TextInput>
          <Divider /> 
         
        </View>

        <View style={styles.viewbtn}>
        <TouchableOpacity style={styles.button} >
            <Text style={styles.textbtn}> Salvar </Text>
        </TouchableOpacity> 
        </View>


        </ScrollView>
      </View>
    )
  }
}

