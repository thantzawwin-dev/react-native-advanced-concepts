import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Swipe from './src/Swipe';

function App() {
  return (
    <View style={styles.container}>
      <Swipe />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default App;