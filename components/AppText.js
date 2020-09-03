import React from 'react';
import {Text, StyleSheet} from 'react-native';

import colors from '../config/color';

function AppText({children, style}) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.black,
    marginVertical: 3,
  },
});

export default AppText;
