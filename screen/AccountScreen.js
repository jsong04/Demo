import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';

const items = [
  {title: '消息中心', description: 'niubi'},
  {title: '共享', description: 'niubi'},
  {title: '实验室功能', description: 'niubi'},
  {title: '帮助与反馈', description: 'niubi'},
  {title: '去评分', description: 'niubi'},
  {title: '开发者选项', description: 'niubi'},
];

function AccountScreen(props) {
  const [refreshing, setRefreshing] = useState(false);

  return (
    <View style={styles.container}>
      <ListItem
        title="宋京铮"
        description="song.jingz@northeastern.edu"
        image={require('../assets/Me.jpeg')}
        onPress={() => console.log('User info')}
      />
      <FlatList
        data={items}
        keyExtractor={(item) => item.title}
        renderItem={({item}) => (
          <ListItem
            title={item.title}
            description={item.description}
            onPress={() => console.log('pressed!!!')}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setRefreshing(false);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AccountScreen;
