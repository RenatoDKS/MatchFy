import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Linking
} from 'react-native';
import ReactNativeSettingsPage, { 
  NavigateRow,
  SwitchRow, 
  SectionRow
} from 'react-native-settings-page';
import {List, ListItem, Container, Content} from 'native-base';
export default class Politic extends React.Component {
  render() {
    return (
      <Container>
          <Content>
            <View style={{flex:1, flexDirection: "column", backgroundColor:'white'}}>
            <ReactNativeSettingsPage>
            <View style={{flex:1, flexDirection: "column", backgroundColor:'white'}}>
                <Text style = {{color:'black', marginLeft:6, fontSize: 20}}>{'Termos de uso e política de privacidade \n'}</Text>
                    <Text style={{textAlign: "justify", fontSize:15 }}>O MatchFy é uma rede social com objetivo específico voltado para a educação e pesquisa de diferentes algoritmos de pareamento entre pessoas com interesses em comum para facilitar os relacionamentos entre elas, permitindo unificar as principais funcionalidades dos aplicativos Tinder e Happn. Os usuários da aplicação MatchFy terão acesso a um ambiente seguro onde os usuários respeitem uns aos outros para construir relacionamentos, estabelecendo diferentes conexões de romance, amizade ou profissional.</Text>
                    <Text style={{textAlign: "justify", fontSize:15 }}>Sendo assim, o MatchFy possibilitará entender como funciona o match entre as pessoas e investigar principalmente como são formados os relacionamentos e estudar o comportamento das pessoas com gostos semelhantes e não apenas aparências e características físicas por meio dos dados obtidos do Facebook.</Text>
            <TouchableOpacity onPress={() => Linking.openURL('http://ricardoramosdeoliveira.com.br/politica/politica_privacidade.html')}>
            <Text style={{color: 'blue', fontSize:15}}>
              Ler mais...
            </Text>
          </TouchableOpacity>
            </View> 
            </ReactNativeSettingsPage>
           </View>
        </Content>
    </Container>
    )
  }
}
