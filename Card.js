import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

function Card({title, image}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Image style={styles.image} source={image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default Card;
