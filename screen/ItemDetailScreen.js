import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

import AppText from '../components/AppText';
import Screen from '../components/Screen';
const image = {
  uri:
    'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=753283124,1576849009&fm=26&gp=0.jpg',
};

function ItemDetailScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.textContainer}>
        <AppText style={styles.title}>云台机</AppText>
        <AppText style={styles.description}>¥299</AppText>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    width: '100%',
    height: 300,
  },
  textContainer: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontFamily: 'Courier',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    color: '#f0e68c',
  },
});

export default ItemDetailScreen;
