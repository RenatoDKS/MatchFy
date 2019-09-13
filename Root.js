import { createAppContainer, createStackNavigator } from "react-navigation";

import LoginScreen from './src/pages/Login';
import TabNavScreen from './src/pages/TabNav';
import UserScreen from './src/pages/User';
import ChatListScreen from './src/pages/ChatList';
import MainScreen from './src/pages/Main';
import ConfigScreen from './src/pages/Config';
import EditScreen from './src/pages/Edit';
import AboutScreen from './src/pages/About';
import InterestScreen from './src/pages/Interest';
import PoliticScreen from './src/pages/Politic';
import AdditionalScreen from './src/pages/Additional';
import ChatScreen from './src/pages/Chat';
import InfoScreen from './src/pages/Info';
 
const Stack = createAppContainer(
  createStackNavigator({
    Login: LoginScreen,

    TabNav: {
      screen: TabNavScreen,
      navigationOptions: {
        header: null,
      },
    },
      
    Main: MainScreen,
    User: UserScreen,
    ChatList: ChatListScreen, 

    Config: {
      screen: ConfigScreen, 
      navigationOptions: {
        title: 'Configurações',
      }
    },
    Edit: EditScreen,

    About: {
     screen: AboutScreen,
     navigationOptions: {
      title: 'Sobre',
    }
    },

    Interest: {
      screen: InterestScreen,
      navigationOptions: {
        title: 'Interesses',
      }
    },

    Politic: {
      screen: PoliticScreen,
      navigationOptions: {
        title: 'Política',
      }
    },

    Additional: {
      screen: AdditionalScreen,
      navigationOptions: {
        title: 'Adicionais',
      }
    },

    Chat: {
      screen: ChatScreen,
      navigationOptions: {
        title: 'Chat(Conversas)',
      }
    },

    Info: {
      screen: InfoScreen,
      navigationOptions: {
        title: 'Informações'
      }
    },

  })
);

export default Stack;
