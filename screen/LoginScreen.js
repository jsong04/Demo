import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

import {Formik} from 'formik';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import colors from '../config/color';
import AppFormField from '../components/forms/AppFormField';
import {SubmitButton} from '../components/forms';

const logo = {
  uri:
    'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3954992643,1884321385&fm=26&gp=0.jpg',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <Text style={styles.tagline}>我家</Text>
      <Formik
        initialValues={{email: '', password: ''}}
        onsubmit={(values) => console.log(values)}
        validationSchema={validationSchema}>
        {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
          <>
            <View style={styles.textContainer}>
              <AppFormField
                placeholder="Email"
                autoCapitalize="none"
                autoCorrect={false}
                name="email"
                keyboardType="email-address"
                textContentType="emailAddress"
              />
              <AppFormField
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                name="password"
                textContentType="password"
                secureTextEntry
              />
            </View>
            <View style={styles.buttonContainer}>
              <SubmitButton
                title="Login"
                color={colors.mediumseagreen}
                onPress={handleSubmit}
              />
            </View>
          </>
        )}
      </Formik>
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
    marginTop: 30,
  },
  buttonContainer: {
    top: 20,
  },
});

export default LoginScreen;
