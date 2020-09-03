import React from 'react';
import {Text, StyleSheet} from 'react-native';

import colors from '../config/color';

function AppText({children}) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.black,
    marginVertical: 10,
  },
});

export default AppText;
