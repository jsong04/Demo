import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  Text,
  SafeAreaView,
  Image,
  View,
} from 'react-native';

import colors from '../config/color';

const image = {
  uri:
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599028530939&di=a5b1ae4539eb36b04a7828da4d1a8d13&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20190312%2F7cc801ae589042958894c3c1e5921a76.jpeg',
};

const logo = {
  uri:
    'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3954992643,1884321385&fm=26&gp=0.jpg',
};

function HomeScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.text}>This is the home screen.</Text>
        </View>
        <View style={styles.loginButton} />
        <View style={styles.signUpButton} />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.primary,
    borderRadius: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  text: {
    color: '#006633',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  signUpButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.secondary,
    borderRadius: 20,
  },
});

export default HomeScreen;
