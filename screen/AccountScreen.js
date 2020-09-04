import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';

const items = [
  '消息中心',
  '共享',
  '设备耗材',
  '语音设置',
  '小组件',
  '我的有品',
  '蓝牙网关',
  '设置',
  '其他平台设备',
  '实验室功能',
  '帮助与反馈',
  '去评分',
  '开发者选项',
];

function AccountScreen({onPress}) {
  return (
    <View style={styles.container}>
      <ListItem
        title="宋京铮"
        description="song.jingz@northeastern.edu"
        image={require('../assets/Me.jpeg')}
      />
      <FlatList
        data={items}
        keyExtractor={(item) => item}
        renderItem={({item}) => <ListItem title={item} />}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AccountScreen;
