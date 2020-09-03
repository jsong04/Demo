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

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        {/*<Card
          title="doorcamera"
          description="¥198"
          image={require('./assets/doorcamera.png')}
        />
        <Card
          title="doorcamera"
          description="¥159"
          image={require('./assets/cardcamera.png')}
        />
        <Card
          title="doorcamera"
          description="¥298"
          image={require('./assets/xxxxcamera.png')}
        />*/}
        <ItemListScreen />
      </SafeAreaView>
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
