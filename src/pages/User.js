import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/User';

export default class User extends Component {

  static navigationOptions = {
    title: 'User',
  };
 

  render() {

    const { navigation } = this.props;

    return (
      <View style={styles.container}>

        <View style={styles.viewComponents}>
          
        
          <TouchableOpacity style={styles.config} onPress={() => navigation.navigate('Config')} >
            <Icon name="gear" size={60} color="blue"/> 
          </TouchableOpacity>

         

          <TouchableOpacity style={styles.edit} onPress={() => navigation.navigate('Edit')}>
            <Icon name="edit" size={60} color="blue"/> 
          </TouchableOpacity>
          </View>

          <View style={styles.viewName}> 
           
          </View>
 
          <View style={styles.viewBio}> 
            <TextInput multiline editable={false} maxLength={360} textAlignVertical='top'  style={styles.bio}>Programador Front-End no projeto do Ricardão.</TextInput>
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

