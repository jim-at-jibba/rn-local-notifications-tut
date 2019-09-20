import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Title, Paragraph, Surface, FAB, Caption } from 'react-native-paper';
import { gStyle } from '../constants';

const notes = [
  {
    id: '123456',
    title: 'Note 1',
    content: 'A very interesting note'
  },
  {
    id: '23456',
    title: 'Note 2',
    content: 'Another very interesting note'
  }
];

const NoteScreen = ({ navigation }) => (
  <SafeAreaView style={gStyle.container}>
    <ScrollView contentContainerStyle={gStyle.contentContainer}>
      <View style={{ flex: 1, height: '100%', width: '100%' }}>
        <Surface style={styles.surface}>
          <View style={styles.textWrapper}>
            <Title>A Title</Title>
            <Caption>Created: 10/10/10</Caption>
            <Paragraph>This is a note</Paragraph>
          </View>
        </Surface>
      </View>
    </ScrollView>
  </SafeAreaView>
);

NoteScreen.navigationOptions = {
  title: 'Note'
};

NoteScreen.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0
  },
  textWrapper: {
    padding: 10
  },
  surface: {
    marginHorizontal: 10,
    marginVertical: 5,
    elevation: 4
  }
});

export default NoteScreen;
