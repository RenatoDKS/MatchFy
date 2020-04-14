import React, { Component } from "react";;
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  StatusBar,
  ScrollView,
  FlatList,
  SafeAreaView,
  BackHandler
} from "react-native";;
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../styles/Edit";
import { Divider } from "react-native-elements";
import Axios from 'axios';

/*
  Para adicionar uma imagem do usuário a API, precisa-se fazer um upload da imagem
  para a rota POST /v1/uploadFile com a key/identificador "imagens" e com o "id" do usuário no corpo da requisição.
  Podem ser enviadas mais de uma imagem por vez.

  Para pegar as imagens de volta basta fazer um GET /v1/getFiles passando o "id" do usuário como parâmetro. Isso vai retorna
  uma json com vários nomes de arquivos, basta fazer um POST /v1/downloadFile passando "nameFile" com o nome do arquivo no corpo da requisição.
  Infelizmente para baixar as imagens, deve ser feito um POST por vez para cada nome de arquivo.

  Para pegar a bio do usuário basta fazer um POST /v1/getBio com o "id" do usuário no corpo da requisição.
*/

export default class Edit extends Component {

  state = {
    data: [
      { id: '00', name: 'Relâmpago McQueen' },
      { id: '01', name: 'Agente Tom Mate' },
      { id: '02', name: 'Doc Hudson' },
      { id: '03', name: 'Cruz Ramirez' }
    ]
  };

  static navigationOptions = {
    title: "Edição de Perfil"
  };

  render() {
    const columns = 2;
    const { navigation } = this.props;
    const nome = this.props.navigation.getParam("nome");
    const text = "Digite sua bio";

    return (
      <View style={styles.container}>
        <ScrollView>
          <StatusBar backgroundColor="#f5f5f5" />

          <View style={styles.photo}>
            <Image
              source={{ uri: this.props.navigation.getParam("foto") }}
              style={styles.img}
            />
            <TouchableOpacity style={styles.icon}>
              <Icon
                name="camera"
                size={40}
                color="gray"
                onPress={() =>
                  this.props.navigation.navigate("ImageSelect", { texto: text })
                }
    />
            </TouchableOpacity>
          </View>

          <View style={styles.bio}>
            <TextInput
              defaultValue={"Digite sua Bio"}
              onChangeText={text => this.setState({ text })}
              value={this.state.text}
              multiline={true}
              numberOfLines={5}
            />
          </View>

          <View style={styles.form}>

          <TextInput editable={false}> { nome } </TextInput>
            <Divider />
            <TextInput editable={false}> Idade</TextInput>
            <Divider />
            <TextInput editable={false}> Genero</TextInput>
            <Divider />
            <TextInput editable={false}> Cidade</TextInput>
            <Divider />
   </View>

          <SafeAreaView>
            <Text style={{ fontSize: 20, marginBottom: 10, marginTop: 10 }}>
              Escolha suas fotos
            </Text>
            <FlatList
              data={createRows(this.state.data, columns)}
              keyExtractor={item => item.id}
              numColumns={columns}
              renderItem={({ item }) => {
                if (item.empty) {
                  return <View style={[styles.item, styles.itemEmpty]} />;
                }
                return (
    <Image
                    source
                    source={require("../assets/monica.jpeg")}
                    style={styles.foto}

                );
              }}
            />
          </SafeAreaView>

          <View style={styles.viewbtn}>
            <TouchableOpacity
              onPress={() => {
                Axios.post("http://192.168.0.103:1337/v1/updateBio", {
                  id: this.props.navigation.state.params.id,
                  bio: text
                }) //Envia a Bio para a API.
                  .then(res =>
                    this.props.navigation.navigate("User", { texto: text })
                  )
                  .catch(err => console.warn(err));;
              }}
              style={styles.button}
            >
              <Text style={styles.textbtn}> Salvar </Text>
</TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

function createRows(data, columns) {
  const rows = Math.floor(data.length / columns);
  let lastRowElements = data.length - rows * columns;

  while (lastRowElements !== columns) {
    data.push({
      id: `empty-${lastRowElements}`,
      name: `empty-${lastRowElements}`,
      empty: true,
    });
    lastRowElements += 1;
  }

  return data;
}
