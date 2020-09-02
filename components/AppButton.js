import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import AppText from './AppText';
import colors from '../config/color';

function AppButton({title, color}) {
  return (
    <TouchableOpacity style={[styles.container, {backgroundColor: color}]}>
      <AppText>{title}</AppText>
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
});

export default AppButton;
