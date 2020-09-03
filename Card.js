import React from 'react';
import {StyleSheet, Image, View} from 'react-native';

import AppText from './components/AppText';
import colors from './config/color';

function Card({title, description, image}) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <AppText>{title}</AppText>
      <AppText>{description}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 25,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    height: 15,
    width: 15,
    borderRadius: 25,
    overflow: 'hidden',
  },
});

export default Card;
