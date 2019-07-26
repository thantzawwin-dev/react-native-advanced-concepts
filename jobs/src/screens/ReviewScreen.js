import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Button } from 'react-native-elements';

class ReviewScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: "Review Jobs",
    headerRight: <Button
      title="Setting" 
      type="clear"
      titleStyle={ { color: "rgba(0,122,255,1)" } }
      onPress={() => navigation.navigate("settings")}
    />,
    headerStyle: { marginTop: Platform.OS === "android" ? 24 : 0 } 
  });

  render () {
    return (
      <View>
        <Text>Review</Text>
      </View>
    );
  }
}

export default ReviewScreen;