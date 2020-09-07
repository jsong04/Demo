/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';

/* import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'; */

// import Card from './Card';

import Screen from './components/Screen';
import AccountScreen from './screen/AccountScreen';
import LoginScreen from './screen/LoginScreen';
import CameraItemScreen from './screen/CameraItemScreen';
import ListingEditScreen from './screen/ListingEditScreen';
import RegisterScreen from './screen/RegisterScreen';
import {AppForm, AppFormField} from './components/forms';
import ItemListScreen from './screen/ItemListScreen';
import ItemDetailScreen from './screen/ItemDetailScreen';

const App = () => {
  return <ItemListScreen />;
};

export default App;
