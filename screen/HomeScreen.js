import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  Text,
  SafeAreaView,
  Image,
  View,
} from 'react-native';

import AppButton from '../components/AppButton';
import colors from '../config/color';

const image = {
  uri:
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599057491205&di=6e669b7300772affc19c8844114620c3&imgtype=0&src=http%3A%2F%2Fimage.suning.cn%2Fuimg%2Fsop%2Fcommodity%2F179368685017040423703886_x.jpg',
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
          <Text style={styles.text}>My React native Demo</Text>
        </View>
        <AppButton title="Login" color={colors.secondary} />
        <AppButton title="SignUp" color={colors.primary} />
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
    paddingVertical: 10,
  },
});

export default HomeScreen;
