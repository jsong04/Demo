import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from 'react-native';

import AppText from './AppText';
import defaultStyles from '../config/styles';
import Screen from './Screen';
import PickerItem from './PickerItem';
// import AntIcon from 'react-native-vector-icons/AntDesign';

function AppPicker({
  icon,
  placeholder,
  items,
  selectedItem,
  onSelectedItem,
  ...otherProps
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          <AppText>{selectedItem ? selectedItem : placeholder}</AppText>
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({item}) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectedItem(item.label);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.color.whiteSmoke,
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    width: '100%',
    marginVertical: 15,
    height: 50,
  },
});

export default AppPicker;
