import React from 'react';
import {View, StyleSheet, TextInput, Image} from 'react-native';

import defaultStyles from '../config/styles';
// import AntIcon from 'react-native-vector-icons/AntDesign';

function AppTextInput({icon, ...otherProps}) {
  return (
    <View style={styles.container}>
      <TextInput style={defaultStyles.text} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.color.whiteSmoke,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 20,
  },
});

export default AppTextInput;
