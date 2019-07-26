import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Slide from '../components/Slide.js';

const SLIDE_DATA = [
  { text: 'Welcome to JobApp', color: '#03A9F4' },
  { text: 'Use this to get a job', color: '#009688' },
  { text: 'Set your location, then swipe away', color: '#03A9F4' }
];

class WelcomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarVisible: false,
  });

  onSlideComplete = () => {
    this.props.navigation.navigate("auth");
  }

  render () {
    return (
      <Slide data={SLIDE_DATA} onComplete={this.onSlideComplete}/>
    );
  }
}

export default WelcomeScreen;