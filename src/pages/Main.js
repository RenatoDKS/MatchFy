import React, { Component } from 'react';
import { Image, StatusBar, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { Container, View, DeckSwiper, Card, CardItem} from 'native-base';  
import Icon from 'react-native-vector-icons/AntDesign'; 
import ViewPager from "@react-native-community/viewpager";


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

  render() {

    const { navigation } = this.props;
    return ( 
      <View style={styles.container}>   
        <StatusBar backgroundColor='purple'/>
        
        <View style={{}}>
          <DeckSwiper looping={false}
            ref={(c) => this._deckSwiper = c}
            dataSource={cards}  
            renderEmpty={() => 
              <View style={{ alignSelf: "center" }}>
                <Text style={styles.empty}>Acabou :( </Text>
              </View>
            } 
            renderItem={item => 
              <Card style={styles.cardsContainer}>   
                <CardItem cardBody style={styles.card}>   
                  <Image style={styles.imagem} source={item.image} />
               
                    <CardItem style={styles.textos}> 
                      <Text style={styles.nome}>{item.name}</Text> 
                        <TouchableOpacity style={styles.infoIcon} onPress={() => navigation.navigate('Info')} >
                      <Icon name="info" size={30} /> 
                      </TouchableOpacity>
                      </CardItem>  
                  <Text numberOfLines={5} style={styles.bio}>{item.bio}</Text>

                </CardItem>
              </Card>
            }
          />
        </View>

        <View style={styles.buttonView}>

          <TouchableOpacity style={styles.button} onPress={() => this._deckSwiper._root.swipeLeft()}>
            <Icon name="dislike1" size={40} color="red"/>        
          </TouchableOpacity> 

          <TouchableOpacity style={styles.button}>
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