import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Formik} from 'formik';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import colors from '../config/color';
import AppFormField from '../components/forms/AppFormField';
import {SubmitButton} from '../components/forms';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

function RegisterScreen(props) {
  return (
    <Screen style={styles.container}>
      <Formik
        initialValues={{email: '', password: ''}}
        onsubmit={(values) => console.log(values)}
        validationSchema={validationSchema}>
        {({handleSubmit}) => (
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
                title="Register"
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
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonContainer: {
    flex: 1,
  },
});

export default RegisterScreen;
