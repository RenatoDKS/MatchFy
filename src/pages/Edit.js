import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/Edit';

export default class Edit extends Component {

  static navigationOptions = {
    title: 'Edição de Perfil',
  };
 

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>

        <View style={styles.viewComponents}>
          
          <Image style={styles.picture} source={require('../assets/monica.jpeg')} />
          
          <TouchableOpacity style={styles.button} >
            <Icon name="plus" size={25} color="red"/>        
          </TouchableOpacity> 

          </View>

          <View style={styles.viewName}> 
            <Text style={styles.name} numberOfLines={1}> Monica Geller </Text> 
          </View>
 
          <View style={styles.viewBio}> 
            <TextInput multiline maxLength={360} textAlignVertical='top'  style={styles.bio}>Programador Front-End no projeto do Ricardão.</TextInput>
          </View>


          <View style={styles.viewGalery}>

          <TouchableOpacity>
          <View
            style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>

              <Icon name="plus" size={60} color="black"/>  

          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
            
              <Icon name="plus" size={60} color="black"/>  
          </View>
        </TouchableOpacity> 

        <TouchableOpacity>
          <View
            style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>

              <Icon name="plus" size={60} color="black"/>  

          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
            
              <Icon name="plus" size={60} color="black"/>  
          </View>
        </TouchableOpacity> 

        </View>

      </View>
    )
  }
}

