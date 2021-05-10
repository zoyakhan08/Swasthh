import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import DisplayScreen from '../screens/DisplayScreen';

export const AppTabNavigator = createBottomTabNavigator({
  Home : {
    screen: HomeScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/homeTab.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Home",
    }
  },
  Display: {
    screen: DisplayScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/displayTab.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Display",
    }
  }
});
