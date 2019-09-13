import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/Info';
import cards from './Main';

export default class Info extends Component {

  static navigationOptions = {
    title: 'Info',
  };
 

  render() {
    const { navigation } = this.props;
    const name = navigation.getParam("name");
    const picture = navigation.getParam("picture");
    <cards />
    return (
      <View style={styles.container}>

        <View style={styles.viewComponents}>
          
          <Image style={styles.picture} source={require('../assets/monica.jpeg')} />

          </View>

          <View style={styles.viewName}> 
            <Text style={styles.name} numberOfLines={1}>{name} </Text> 
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

