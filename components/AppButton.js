import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';

import AppText from './AppText';
import colors from '../config/color';

function AppButton({title, color, onPress}) {
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: color}]}
      onPress={onPress}>
      <AppText style={styles.text}>{title}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default AppButton;
