import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';

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
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const url = `https://randomuser.me/api/?&results=20`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => { console.log(res); res.json()})
      .then(res => {
        console.log(res);
        this.setState({
          data: res.results,
          error: res.error || null,
          loading: false,
        }); 
        this.arrayholder = res.results;
      })
      .catch(error => {
        console.log(error);
        this.setState({ error, loading: false });
      });
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
  };

  searchFilterFunction = text => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.name.title.toUpperCase()} ${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
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
        inputContainerStyle={{backgroundColor:"white", borderWidth: 10, borderBottomWidth: 10, borderRadius: 50, borderColor: "purple"}} 
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
              leftAvatar={{ source: { uri: item.picture.thumbnail } }}
              title={`${item.name.first} ${item.name.last}`}
              subtitle={item.email}
              onPress={() => navigation.navigate('Chat')}
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
