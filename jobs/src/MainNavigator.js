import React, { Component } from 'react';
import { StyleSheet, View  } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createAppContainer  } from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';
import AuthScreen from './screens/AuthScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingsScreen from './screens/SettingsScreen';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
// });

const MainNavigator = createBottomTabNavigator({
  welcome: WelcomeScreen,
  auth: AuthScreen,
  main: {
    screen: createBottomTabNavigator({
      map: MapScreen,
      deck: DeckScreen,
      review: {
        screen: createStackNavigator({
          review: ReviewScreen,
          settings: SettingsScreen
        })
      }
    })
  }
});

export default createAppContainer(MainNavigator);