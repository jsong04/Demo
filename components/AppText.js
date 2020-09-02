import React from 'react';
import {Text, StyleSheet} from 'react-native';

function AppText({children}) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: '700',
  },
});

export default AppText;
