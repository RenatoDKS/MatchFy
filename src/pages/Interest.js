import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import ReactNativeSettingsPage, {
  SwitchRow,
  SectionRow
} from "react-native-settings-page";
import Slider from "react-native-slider";
import RangeSlider from "rn-range-slider";
import { List, ListItem, Container, Content, Button } from "native-base";
import Axios from "axios";

export default class Interest extends React.Component {
  constructor(props) {
    super(props);;
    this.state = {
      idade_min: 18,
      dist: 0,
      idade_max: 60,
      homens: false,
      mulheres: false,
      id: this.props.navigation.state.params.id
    };;
  }

  /*  getVal(value){
  //console.warn(value);
  }

  getDist(value1){
    //console.warn(value1);
  }

  buttonClickListener = () => {
    alert("Deseja realmente deletar sua conta?");
  };
  // TODO: implement your navigationOptions */

  render() {
    return (
      <Container>
        <Content>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              backgroundColor: "white"
            }}
          >
            <ReactNativeSettingsPage>
              <View style={{ flex: 1, backgroundColor: "white" }}>
                <SectionRow>
                  <Text style={{ color: "black", marginLeft: 16 }}>
                    {"Tenho interesse por\n"}
                  </Text>
                  <SwitchRow
                    text="Homens"
                    _value={this.state.homens}
                    _onValueChange={() => {
                      this.setState({ homens: !this.state.homens });
                    }}
                  />
                  <SwitchRow
                    text="Mulheres"
                    _value={this.state.mulheres}
                    _onValueChange={() => {
                      this.setState({ mulheres: !this.state.mulheres });
                    }}
                  />
                </SectionRow>
              </View>
              <View style={{ flex: 1, backgroundColor: "white" }}>
                <List>
                  <ListItem>
                    <Text style={{ color: "black" }}>
                      {"Distância máxima\n\n"}
                      <Text style={{ color: "gray" }}>
                        {this.state.dist} quilômetros
                      </Text>
                      <Slider
                        style={{ width: 320, height: 40 }}
                        value={this.state.dist}
                        step={1}
                        minimumValue={0}
                        maximumValue={80}
                        minimumTrackTintColor="#7d7"
                        maximumTrackTintColor="#7d7"
                        onValueChange={value1 =>
                          this.setState({ dist: value1 })
                        }
                        onSlidingComplete={value1 => this.getDist(value1)}
                      />
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text style={{ color: "black" }}>
                      {"Idade\n\n"}
                      <Text style={{ color: "gray" }}>
                        {this.state.idade_min} a {this.state.idade_max} anos
                      </Text>
                      <RangeSlider
                        style={{ width: 320, height: 60 }}
                        gravity={"center"}
                        min={18}
                        max={60}
                        step={1}
                        selectionColor="#7d7"
                        blankColor="#7d7"
                        onValueChanged={
                          (min, max) =>
                            this.setState({
                              idade_max: max,
                              idade_min: min
                            }) /* , value2 => this.setState ({idade1:value2}) */
                        }
                      />
                    </Text>
                  </ListItem>
                </List>
              </View>
              <View style={{ flex: 1, backgroundColor: "white" }} / />
      </ReactNativeSettingsPage>
          </View>
          <TouchableHighlight //Deve-se criar um botão salvar, e assim que clicado deve mandar os interesses do usuário a API.
            onPress={() => {
              console.warn(this.state);
              let st = this.state;;

            Axios.post('http://192.168.0.103:1337/v1/updateInterest',{
                data: this.state, //Dados a enviar.
              })
                .then(resul => console.warn(resul))
                .catch(err => console.warn(err));;
            }}
            style={{
              backgroundColor: "blue",
              width: 60,
              height: 60,
              alignSelf: "center",
              borderRadius: 30
            }}
          >
            <Text style={{ textAlign: "center" }}>Salvar</Text>
          </TouchableHighlight>
        </Content>
      </Container>
    );
  }
}
