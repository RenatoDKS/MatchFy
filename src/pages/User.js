import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, TextInput, StatusBar, ScrollView, FlatList, SafeAreaView,  BackHandler} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/User';


import { Divider } from 'react-native-elements';

export default class User extends Component {   

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', () => { return true; });
  }


  state = {
    data: [
      { id: "00", name: "Relâmpago McQueen" },
      { id: "01", name: "Agente Tom Mate" },
      { id: "02", name: "Doc Hudson" },
      { id: "03", name: "Cruz Ramirez" },
    ]
  };

  static navigationOptions = {
    title: 'Edição de Perfil',
  };
 

  render() {
    const columns = 2;  
    const { navigation } = this.props;
    const bio = this.props.navigation.getParam('texto'); 
    return (

      <View style={styles.container}>
      <ScrollView>
        <StatusBar backgroundColor='#f5f5f5'/>

        <View style={styles.photo}>
          <Image source={{uri: this.props.navigation.state.params.foto}} style={styles.img} />
        </View>

        <View style={styles.form}>
              
              <Text style={styles.text}> {this.props.navigation.state.params.nome} </Text>
              <Icon  name="map-marker" size={16}> New York - NY</Icon>  
              
           
            </View>

        <View style={styles.bio}>
          <TextInput style={{ fontSize: 16}} multiline={true} editable={false}> { bio }</TextInput>
        </View>
        
        <SafeAreaView>  
        <FlatList
          data={createRows(this.state.data, columns)}
          keyExtractor={item => item.id}
          numColumns={columns}
          renderItem={({ item }) => {
            if (item.empty) {
              return <View style={[styles.item, styles.itemEmpty]} />;
            }
            return (
              
                <Image source source={require('../assets/monica.jpeg')} style={styles.foto} /> 
               
            );
          }}
        />
      </SafeAreaView>
        </ScrollView>
      </View>
    )
        }
    }

  function createRows(data, columns) {
    const rows = Math.floor(data.length / columns);
    let lastRowElements = data.length - rows * columns;
  
    while (lastRowElements !== columns) {
      data.push({
        id: `empty-${lastRowElements}`,
        name: `empty-${lastRowElements}`,
        empty: true
      });
      lastRowElements += 1;
    }
  
    return data;
  }



