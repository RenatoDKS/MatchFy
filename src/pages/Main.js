import React, { Component } from 'react';
import { Image, StatusBar, TouchableOpacity, Text, SafeAreaView, BackHandler, Alert } from 'react-native';
import { Container, View, DeckSwiper, Card, CardItem} from 'native-base';  
import Icon from 'react-native-vector-icons/AntDesign'; 
import Geolocation from '@react-native-community/geolocation';


import styles from '../styles/Main';
const cards = [ 
  {
    name: 'Monica Geller',
    sexo: 'feminino',
    idade: 20,
    image: require('../assets/monica.jpeg'),
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.orem Ipsum is simply dummy text of the printing and typesetting industry."
  },
 
  {
    name: 'Rachel Green',
    sexo: 'feminino',
    idade: 20,
    image: require('../assets/rachel.jpeg'),
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },

  {
    name: 'Phoebe Buffay',
    sexo: 'feminino',
    idade: 20,
    image: require('../assets/phoebe.jpeg'),
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
];
export default class Main extends Component {

  state = {
    latitude: '',
    longitude: '',
  };

  watchID = null;

  componentDidMount() {
    Geolocation.getCurrentPosition(
      position => {
        const latitude = JSON.stringify(position.coords.latitude);
        const longitude = JSON.stringify(position.coords.longitude);
        this.setState({latitude});
        this.setState({longitude});
        console.log(latitude);
        console.log(longitude);
        
      },
      error => console.log('Error', JSON.stringify(error.message)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }

  componentWillUnmount() {
    this.watchID != null && Geolocation.clearWatch(this.watchID);
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', () => { return true; });
  }

  render() {

    const { navigation } = this.props;
    return ( 
      <View style={styles.container}>   
        <StatusBar backgroundColor='#87d383'/>
        
        <View style={{flex: 1}}>
          <DeckSwiper
           looping={false}
            ref={(c) => this._deckSwiper = c}
            dataSource={cards}   
            
            renderEmpty={() => 
              <View style={{ alignSelf: "center", marginBottom: 8000}}>
                <Text style={styles.empty}>Acabou :( </Text>
              </View>
            } 
            renderItem={item => 
              <Card style={styles.cardsContainer}>   
                <CardItem cardBody style={styles.card}>
                  <TouchableOpacity onPress={() => navigation.navigate('Info')} activeOpacity={1} style={{flex: 1}}> 
                  <Image style={styles.imagem} source={item.image} />
                  </TouchableOpacity>
                    <CardItem style={styles.textos}> 
                      <Text style={styles.nome}>{item.name}</Text> 
                      </CardItem> 

                </CardItem>
              </Card>
            }
          />
        </View>

         
        <View style={styles.buttonView}>

          <TouchableOpacity style={styles.button} onPress={() => this._deckSwiper._root.swipeLeft()}>
            <Icon name="dislike1" size={40} color="red"/>        
          </TouchableOpacity> 
 
          <TouchableOpacity style={styles.button} onPress={() => this._deckSwiper._root.swipeRight()}>
            <Icon name="heart" size={40} color="pink"/> 
          </TouchableOpacity>
 
          <TouchableOpacity style={styles.button} onPress={() => this._deckSwiper._root.swipeRight()}>
            <Icon name="like1" size={40} color="green"/>
          </TouchableOpacity>

        </View>
      </View> 
    );
  }
}