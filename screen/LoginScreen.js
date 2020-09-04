import React, {useState} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
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

function LoginScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <Text style={styles.tagline}>我家</Text>
      <View style={styles.textContainer}>
        <AppTextInput
          placeholder="Username"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
        />
        <AppTextInput
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Login"
          color={colors.secondary}
          onPress={() => console.log(email, password)}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  tagline: {
    textAlign: 'center',
    fontWeight: '700',
    color: colors.gray,
  },
  textContainer: {
    flex: 1,
    marginTop: 30,
  },
  buttonContainer: {
    flex: 1,
    bottom: 100,
  },
});

export default LoginScreen;
