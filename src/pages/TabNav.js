
import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import ViewPager from "@react-native-community/viewpager";

import {
  createMaterialTopTabNavigator,
  createAppContainer,
  MaterialTopTabBar,  
} from 'react-navigation';

import ChatList from '../pages/ChatList';
import User from '../pages/User'
import Main from '../pages/Main';
import { hidden } from 'ansi-colors';



function SafeAreaMaterialTopTabBar(props) {

  return (
    <View>
      <MaterialTopTabBar {...props} /> 
    </View>
  );
}

const mainNavigation = createMaterialTopTabNavigator(
  {

    
    
    User: {
      screen: User,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Icon name="user" size={29} color="white" />  
        ),
      }), 
    }, 

    Main: {
      screen: Main,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Icon name="home" size={29} color="white" />  
        ),
      }),
    },
  
    ChatList: {
      screen: ChatList,
      navigationOptions: () => ({ 
        tabBarIcon: ({ focused }) => (
          <Icon name="comment" size={25} color="white"/>   
        ),
      }),
    },
},

 
  {
    initialRouteName: "Main", 
    swipeEnabled: false,
    tabBarComponent: SafeAreaMaterialTopTabBar, 
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      tabStyle: {
        backgroundColor: 'purple',   
      },
    },
  },
);

export default createAppContainer(mainNavigation);