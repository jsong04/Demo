import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';

import AppText from './AppText';
import Screen from '../components/Screen';

function ListItem({title, description, image, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Screen style={styles.container}>
        <Image style={styles.image} source={image} />
        <View>
          {title && <AppText numberOfLines={1}>{title}</AppText>}
          {description && <AppText numberOfLines={2}>{description}</AppText>}
        </View>
      </Screen>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 15,
    padding: 1,
    margin: 5,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
});

export default ListItem;
