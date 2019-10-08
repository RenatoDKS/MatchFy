import React, { Component } from 'react';
import { View, StyleSheet, Text, Image} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { Header, Button, Container, Left, Body, Title } from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';


export default class Chat extends Component {

    static navigationOptions = {
    title: 'Chat',
  };

  state = {
    messages: [],
  };
  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: "Hello developer",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar: "https://placeimg.com/140/140/any",
          },
        },
      ],
    });
  }
  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }
  render() {
    return (
      <Container style={{ flex: 1 }}>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-left' />
            </Button>
          </Left>
          <Body>
            <Title>Ricardão</Title>
          </Body>
        </Header>
        <View style={{ flex: 1 }}>
          <GiftedChat
            messages={this.state.messages}
            onSend={messages => this.onSend(messages)}
            user={{
              _id: 1,
            }}
          />
        </View>
      </Container>
    );
  }
}