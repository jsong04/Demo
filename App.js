/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, StatusBar, SafeAreaView} from 'react-native';

/* import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'; */

// import Card from './Card';
import HomeScreen from './screen/HomeScreen';
import CameraItemScreen from './screen/CameraItemScreen';
import AppButton from './components/AppButton';
import Card from './Card';
import ItemListScreen from './screen/ItemListScreen';
import ListItem from './components/ListItem';
import AccountScreen from './screen/AccountScreen';
import LoginScreen from './screen/LoginScreen';

const App = () => {
  return (
    <>
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
