import React from 'react';
import {View, StyleSheet, Image, SafeAreaView} from 'react-native';

import colors from '../config/color';

const image = {
  uri:
    'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=753283124,1576849009&fm=26&gp=0.jpg',
};

const closeButton = require('../assets/closeButton.png');
const deleteButton = require('../assets/icon_delete_normal.png');

function CameraItemScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.closeButton} source={closeButton} />
      <Image style={styles.deleteButton} source={deleteButton} />
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray,
  },
  closeButton: {
    width: 50,
    height: 50,
    alignItems: 'flex-start',
    position: 'absolute',
    top: 50,
    left: 30,
    backgroundColor: colors.secondary,
    borderRadius: 25,
  },
  deleteButton: {
    width: 50,
    height: 50,
    alignItems: 'flex-end',
    position: 'absolute',
    top: 50,
    right: 30,
    backgroundColor: colors.lightSkyBlue,
    borderRadius: 25,
  },
  image: {
    width: '100%',
    height: '60%',
    resizeMode: 'cover',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
});

export default CameraItemScreen;
