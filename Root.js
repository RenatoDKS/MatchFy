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
import ChatScreen from './src/pages/Chat';
import InfoScreen from './src/pages/Info';
import ImageSelectScreen from './src/pages/ImageSelect';
 
const Stack = createAppContainer(
  createStackNavigator({
    Login: LoginScreen,

    TabNav: {
      screen: TabNavScreen,
      navigationOptions: {
        header: null,
      },
    },
    
    ImageSelect: ImageSelectScreen,

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
        title: 'Preferências', 
      }
    },

    Politic: {
      screen: PoliticScreen,
      navigationOptions: {
        title: 'Política',
      }
    },

    Chat: {
      screen: ChatScreen,
      navigationOptions: {
        title: 'Chat(Conversas)',
        header: null,
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
