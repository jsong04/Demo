import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';

import AppText from '../components/AppText';
import Card from '../Card';

function ItemListScreen(props) {
  return (
    <ScrollView style={styles.container}>
      <AppText>Scroll me plz</AppText>
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
      <AppText>If you like</AppText>
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
      <AppText>Scrolling down</AppText>
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
      <AppText>What's the best</AppText>
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
      <AppText>Framework around?</AppText>
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
      <AppText>React Native</AppText>
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
    paddingHorizontal: 10,
    backgroundColor: 'blue',
  },
});

export default ItemListScreen;
