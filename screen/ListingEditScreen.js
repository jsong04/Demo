import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Formik} from 'formik';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import colors from '../config/color';
import AppFormField from '../components/forms/AppFormField';
import AppPicker from '../components/AppPicker';
import {SubmitButton} from '../components/forms';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
});

const categories = [
  {label: 'Furniture', value: 1},
  {label: 'Clothing', value: 2},
  {label: 'Camera', value: 3},
];

function ListingEditScreen(props) {
  return (
    <Screen style={styles.container}>
      <Formik
        initialValues={{title: '', price: '', description: '', category: null}}
        onsubmit={(values) => console.log(values)}
        validationSchema={validationSchema}>
        {({handleSubmit}) => (
          <>
            <View style={styles.textContainer}>
              <AppFormField maxLength={255} name="title" placeholder="名称" />
              <AppFormField
                keyboardType="numeric"
                maxLength={8}
                name="price"
                placeholder="价格"
              />
              <AppPicker
                items={categories}
                name="category"
                placeholder="分类"
              />
              <AppFormField
                maxLength={255}
                multiline
                name="description"
                numberOfLines={3}
                placeholder="描述"
              />
            </View>
            <View style={styles.buttonContainer}>
              <SubmitButton
                title="提交"
                color={colors.mediumseagreen}
                onPress={handleSubmit}
              />
            </View>
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonContainer: {
    flex: 1,
  },
});

export default ListingEditScreen;
