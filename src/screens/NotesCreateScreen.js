import React from 'react';
import PropTypes from 'prop-types';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Surface, TextInput, Button } from 'react-native-paper';
import { Formik } from 'formik';
import { v4 as uuid } from 'uuid';
import moment from 'moment';
import { gStyle } from '../constants';
import { AlertContext } from '../globalState';

const NoteCreateScreen = ({ navigation }) => {
  const { dispatchAlert } = React.useContext(AlertContext);
  return (
    <SafeAreaView style={gStyle.container}>
      <ScrollView contentContainerStyle={gStyle.contentContainer}>
        <View style={{ flex: 1, height: '100%', width: '100%' }}>
          <Surface style={styles.surface}>
            <Formik
              initialValues={{ note: '', title: '' }}
              onSubmit={({ note, title }) => {
                const input = {
                  id: uuid(),
                  title,
                  note,
                  createdAt: moment().toISOString()
                };

                dispatchAlert({
                  type: 'open',
                  alertType: 'success',
                  message: 'Note created'
                });
                navigation.goBack();
              }}
            >
              {({ values, handleSubmit, handleChange }) => {
                return (
                  <>
                    <View style={styles.inputWrapper}>
                      <TextInput
                        mode="outlined"
                        label="Title"
                        onChangeText={handleChange('title')}
                        value={values.title}
                      />
                    </View>
                    <View style={styles.inputWrapper}>
                      <TextInput
                        mode="outlined"
                        label="Note"
                        multiline
                        numberOfLines={5}
                        onChangeText={handleChange('note')}
                        value={values.note}
                      />
                    </View>
                    <View style={styles.inputWrapper}>
                      <Button mode="contained" onPress={handleSubmit}>
                        Submit
                      </Button>
                    </View>
                  </>
                );
              }}
            </Formik>
          </Surface>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

NoteCreateScreen.navigationOptions = {
  title: 'Note'
};

NoteCreateScreen.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  inputWrapper: {
    padding: 10
  },
  surface: {
    marginHorizontal: 10,
    marginVertical: 5,
    elevation: 4
  }
});

export default NoteCreateScreen;
