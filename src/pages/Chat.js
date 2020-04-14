import React, { Component } from "react";
import { View, StyleSheet, Text, Image, StatusBar } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import {
  Header,
  Button,
  Container,
  Left,
  Body,
  Title,
  Right
} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import sails from 'sails.io.js';
import socket from 'socket.io-client';

var io = sails(socket);
var sk; //Socket.
io.sails.autoConnect = false;

export default class Chat extends Component {
  static navigationOptions = {
    title: "Chat"
  };

  state = {
    messages: [],
    user_id: this.props.navigation.state.params.id, //Id do usuário.
    target_id: this.props.navigation.state.params.target_id, //Id de com quem o usuário está falando.
  };

  componentDidMount() {
    sk = io.sails.connect('http://192.168.0.103:1337');

    sk.on('connect', () => {
      sk.post('/v1/accessRequest',{ user_id : this.state.user_id, target_id : this.state.target_id },(res) => {
          if (res.access) {
            sk.post(
              "/v1/getMsgs",
              { user_id: this.state.user_id, target_id: this.state.target_id },
              res => {
                if (!res.err) {
                  console.warn(res.data); // Mensagens retornadas. Após retornadas devem ser tratadas para apresentar ao usuário.
                }
              }
            );;
          }
        }
      );;
    });

    sk.on('change', () => {
      /*
      Sempre que ocorrer um envio e recebimento de mensagem este callback será executado.
      Requer tratamento para reescrever as mensagens apresentadas para o usuário.
      */
      sk.post('/v1/getMsgs',{  user_id : this.state.user_id, target_id : this.state.target_id },(res) => {
          if (!res.err) {
            console.warn(res.data);;
          }
        };
      );
    });
  }

  componentWillMount() {
 this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any'
          }
        }
      ]
    });
  }

  componentWillUnmount() {
    sk.disconnect();
  }

  onSend(messages = []) {
sk.post("/v1/chat", {
      text: messages[0].text,
      user_id: this.state.user_id,
      target_id: this.state.target_id
    }); //Envia a mensagem.

    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
  }

  render() {
    const { navigation } = this.props;
    return (
 <Container style={{ flex: 1 }}>
        <StatusBar backgroundColor="white" barStyle = "light-content" />
        <Header style={{ backgroundColor: "white" }}>
          <Left>
            <Button transparent>
              <Icon
                name="arrow-left"
                size={20}
                onPress={() => navigation.navigate("ChatList")}
              />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: "black" }}>Ricardão</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon
                name="info"
                size={20}
                onPress={() => navigation.navigate("Info")}
              />
            </Button>
          </Right>
        </Header>

        <View style={{ flex: 1 }}>
          <StatusBar backgroundColor="white" barStyle="light-content" />
          <GiftedChat
            messages={this.state.messages}
            onSend={messages => this.onSend(messages)}
            user={{
              _id: 1
            }}
          />
        </View>
      </Container>
    );
  }
}
