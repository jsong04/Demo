import React from 'react';
import {View, StyleSheet} from 'react-native';

function ListItemSeparator(props) {
  return <View style={styles.line} />;
}

const styles = StyleSheet.create({
  line: {
    alignItems: 'flex-start',
    width: '90%',
    height: 1,
    backgroundColor: '#c0c0c0',
  },
});

export default ListItemSeparator;
