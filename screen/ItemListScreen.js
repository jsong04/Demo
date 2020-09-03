import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';

import AppText from '../components/AppText';
import Card from '../Card';

function ItemListScreen(props) {
  return (
    <ScrollView style={styles.container}>
      <AppText>我的设备</AppText>
      <View style={styles.imageContainer}>
        <Card
          title="可视门铃2"
          description="¥298"
          image={require('../assets/doorcamera.png')}
        />
        <Card
          title="abc"
          description="¥298"
          image={require('../assets/doorcamera.png')}
        />
      </View>
      <View style={styles.imageContainer}>
        <Card
          title="abc"
          description="¥298"
          image={require('../assets/doorcamera.png')}
        />
        <Card
          title="abc"
          description="¥298"
          image={require('../assets/doorcamera.png')}
        />
      </View>
      <View style={styles.imageContainer}>
        <Card
          title="abc"
          description="¥298"
          image={require('../assets/doorcamera.png')}
        />
        <Card
          title="abc"
          description="¥298"
          image={require('../assets/doorcamera.png')}
        />
      </View>
      <View style={styles.imageContainer}>
        <Card
          title="abc"
          description="¥298"
          image={require('../assets/doorcamera.png')}
        />
        <Card
          title="abc"
          description="¥298"
          image={require('../assets/doorcamera.png')}
        />
      </View>
      <View style={styles.imageContainer}>
        <Card
          title="abc"
          description="¥298"
          image={require('../assets/doorcamera.png')}
        />
        <Card
          title="abc"
          description="¥298"
          image={require('../assets/doorcamera.png')}
        />
      </View>
      <View style={styles.imageContainer}>
        <Card
          title="abc"
          description="¥298"
          image={require('../assets/doorcamera.png')}
        />
        <Card
          title="abc"
          description="¥298"
          image={require('../assets/doorcamera.png')}
        />
      </View>
    </ScrollView>
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
