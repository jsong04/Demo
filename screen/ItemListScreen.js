import React from 'react';
import {StyleSheet, ScrollView, View, FlatList} from 'react-native';

import AppText from '../components/AppText';
import Card from '../Card';
import Screen from '../components/Screen';

const items = [
  {
    title: '可视门铃1',
    description: '¥298',
    imageUrl: '../assets/doorcamera.png',
  },
  {
    title: '可视门铃2',
    description: '¥298',
    imageUrl: '../assets/doorcamera.png',
  },
  {
    title: '可视门铃3',
    description: '¥298',
    imageUrl: '../assets/doorcamera.png',
  },
  {
    title: '可视门铃4',
    description: '¥298',
    imageUrl: '../assets/doorcamera.png',
  },
  {
    title: '可视门铃5',
    description: '¥298',
    imageUrl: '../assets/doorcamera.png',
  },
  {
    title: '可视门铃6',
    description: '¥298',
    imageUrl: '../assets/doorcamera.png',
  },
  {
    title: '可视门铃7',
    description: '¥298',
    imageUrl: '../assets/doorcamera.png',
  },
  {
    title: '可视门铃8',
    description: '¥298',
    imageUrl: '../assets/doorcamera.png',
  },
  {
    title: '可视门铃9',
    description: '¥298',
    imageUrl: '../assets/doorcamera.png',
  },
  {
    title: '可视门铃10',
    description: '¥298',
    imageUrl: '../assets/doorcamera.png',
  },
  {
    title: '可视门铃11',
    description: '¥298',
    imageUrl: '../assets/doorcamera.png',
  },
  {
    title: '可视门铃12',
    description: '¥298',
    imageUrl: '../assets/doorcamera.png',
  },
  {
    title: '可视门铃13',
    description: '¥298',
    imageUrl: '../assets/doorcamera.png',
  },
];

function ItemListScreen(props) {
  return (
    <Screen style={styles.container}>
      <ScrollView>
        <AppText>我的设备</AppText>
        <FlatList
          data={items}
          keyExtractor={(item) => item.title}
          renderItem={({item}) => (
            <View style={styles.imageContainer}>
              <Card
                title={item.title}
                description={item.description}
                image={require('../assets/doorcamera.png')}
              />
            </View>
          )}
        />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  imageContainer: {
    flexDirection: 'row',
  },
});

export default ItemListScreen;
