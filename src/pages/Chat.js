//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
export default class Chat extends Component {
  render() {
    return (
      <View style={{backgroundColor: "black"}}>
        <Text style={{color: "white"}}>Tela de Chat (onde os usuários conversam)</Text>
      </View>
    );
  }
}
