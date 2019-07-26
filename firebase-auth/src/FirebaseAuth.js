import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import firebase from 'firebase';

import SignInForm from './component/SignInForm';
import SignUpForm from './component/SignUpForm';

export default class FirebaseAuth extends Component {
  componentDidMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyClHbyvknsXKPIoeXwoKBffAT0BramICZ4",
      authDomain: "one-time-password-c63ab.firebaseapp.com",
      databaseURL: "https://one-time-password-c63ab.firebaseio.com",
      projectId: "one-time-password-c63ab",
      storageBucket: "one-time-password-c63ab.appspot.com",
      messagingSenderId: "1012759895480",
      appId: "1:1012759895480:web:bb369bcf59964ab9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'space-around',
  },
});
