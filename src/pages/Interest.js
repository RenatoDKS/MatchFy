import React from 'react';
import { View, Text} from 'react-native';
import ReactNativeSettingsPage, { SwitchRow, SectionRow} from 'react-native-settings-page';
import Slider from 'react-native-slider';
import RangeSlider from 'rn-range-slider';
import {List, ListItem, Container, Content} from 'native-base';

export default class Interest extends React.Component {
  constructor(props) {
   super(props)
   this.state = { idade: 60, dist: 0, idade1: 18 }
  } 
  getVal(value){
  //console.warn(value);
  }     
  getDist(value1){
    //console.warn(value1);
  }
   buttonClickListener = () => {
    alert("Deseja realmente deletar sua conta?");
  };
  // TODO: implement your navigationOptions
   state = {
    check: false,
    switch: false,
    switch1: false,
    value: 40,
    value1: 40,
    value2: 60
  } 
 
  render() {
    return (
      <Container>
          <Content>
            <View style={{flex:1, flexDirection: "column", backgroundColor:'white'}}>
            <ReactNativeSettingsPage>
                <View style ={{flex: 1, backgroundColor:'white'}}>
                  <SectionRow><Text style = {{color:'black', marginLeft:16}}>{'Tenho interesse por\n'}</Text>
                    <SwitchRow 
                      text ='Homens' 
                      _value={this.state.switch}
                      _onValueChange={() => { this.setState({ switch: !this.state.switch }) }} />
                      <SwitchRow 
                      text='Mulheres' 
                      _value={this.state.switch1}
                      _onValueChange={() => { this.setState({ switch1: !this.state.switch1 }) }} /></SectionRow>
                      </View>
                      <View style ={{flex: 1, backgroundColor:'white'}}>
                      <List>
                      <ListItem>
                      <Text style = {{color:'black'}}>{'Distância máxima\n\n'}<Text style = {{color:'gray'}}>{this.state.dist} quilômetros</Text><Slider
                        style={{width: 320, height: 40}}
                        value = {this.state.dist}
                        step = {1}
                        minimumValue={0}
                        maximumValue={80}
                        minimumTrackTintColor="#7d7"
                        maximumTrackTintColor="#7d7" 
                        onValueChange={value1 => this.setState ({dist : value1})}
                        onSlidingComplete={(value1 => this.getDist(value1))}
                      /></Text>
                  </ListItem>
                  <ListItem>
                    <Text style = {{color:'black'}}>{'Idade\n\n'}<Text style = {{color:'gray'}}>{this.state.idade1} a {this.state.idade} anos</Text><RangeSlider
    style={{width: 320, height: 60}}
    gravity={'center'}
    min={18}
    max={60}
    step={1}
    selectionColor="#7d7"
    blankColor="#7d7"
    onValueChanged={value => this.setState ({idade:value}), value2 => this.setState ({idade1:value2})}/>
                      </Text>
                  </ListItem>
                  </List>
          </View>
             <View style ={{flex: 1, backgroundColor:'white'}}>
              </View>
      </ReactNativeSettingsPage>
      </View>
        </Content>
    </Container>
    )
  }
}
