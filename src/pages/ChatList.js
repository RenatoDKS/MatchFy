import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator,  BackHandler } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import axios from "axios";

/* 
  A lista de chat deve ser atualizada sempre que ocorrer um match.
  A pesquisa de usuários precisa ser consertada.
*/

export default class ChatList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
    };

    this.arrayholder = [];
  }

  componentDidMount() {
    console.log("ChatList");
    this.makeRemoteRequest();
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', () => { return true; });
  } 

  makeRemoteRequest = () => {

    this.setState({ loading: true }); 

    axios.get("http://192.168.0.103:1337/v1/match",{ params : { id : this.props.navigation.state.params.id } })
    .then( resp => {
      if( resp.data.list ){
        //Tratamento para inicializar os cards com a lista recebida da API.
        this.setState({
          data: resp.data.results, //Resultados da API.
          error: null,
          loading: false,
        });
      } 
    })
    .catch( error => {
        console.log(error);
        this.setState({ error, loading: false });
    })
  
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '70%',
          backgroundColor: '#000',
          marginLeft: '18%'
        }}
      />
    );
  };

  searchFilterFunction = text => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.nome.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Procure o contatinho..." 
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value} 
        inputContainerStyle={{backgroundColor:"white", borderWidth: 0, borderRadius: 50}} 
        containerStyle={{backgroundColor:"white" }}
        /> 
    );
  };

  render() {
    const { navigation } = this.props;
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
              leftAvatar={item.picture}
              title={item.nome}
              subtitle={item.email}
              onPress={() => navigation.navigate('Chat',{ id : this.props.navigation.state.params.id, target_id : item.id })} //Necessita passar o id do item clickado.
            />
          )}
          keyExtractor={item => item.email}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}
