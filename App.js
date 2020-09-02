/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';

/* import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'; */

// import Card from './Card';
import HomeScreen from './screen/HomeScreen';
// import CameraItemScreen from './screen/CameraItemScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <HomeScreen />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
