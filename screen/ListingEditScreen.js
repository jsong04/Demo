import React from 'react';
import {View, StyleSheet} from 'react-native';

import * as Yup from 'yup';

import {AppForm, AppFormField, SubmitButton} from '../components/forms';

import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
});

const categories = [
  {label: 'Doorcamera', value: 1},
  {label: 'Cardcamera', value: 2},
  {label: 'XXXXcamera', value: 3},
];

function ListingEditScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}>
        <>
          <View style={styles.textContainer}>
            <AppFormField maxLength={255} name="title" placeholder="Title" />
            <AppFormField
              keyboardType="numeric"
              maxLength={8}
              name="price"
              placeholder="Price"
            />
            <AppFormField
              maxLength={255}
              multiline
              name="description"
              numberofLines={3}
              placeholder="Description"
            />
          </View>
          <View style={styles.buttonContainer}>
            <SubmitButton title="Post" />
          </View>
        </>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    marginTop: 30,
  },
  buttonContainer: {
    flex: 1,
    bottom: 60,
  },
});

export default ListingEditScreen;
