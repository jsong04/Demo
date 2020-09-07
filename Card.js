import React from 'react';
import {StyleSheet, Image, View} from 'react-native';

import AppText from './components/AppText';
import colors from './config/color';

function Card({title, description, image}) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.textContainer}>
        <AppText numberOfLines={1}>{title}</AppText>
        <AppText style={styles.description} numberOfLines={2}>
          {description}
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: 'hidden',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textContainer: {
    marginTop: 10,
    marginLeft: 8,
  },
  image: {
    height: 50,
    width: 50,
    top: 10,
    left: 10,
    borderRadius: 25,
    overflow: 'hidden',
  },
  description: {
    color: '#c0c0c0',
    fontSize: 15,
  },
});

export default Card;
