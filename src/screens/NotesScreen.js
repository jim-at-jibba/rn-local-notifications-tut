import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Surface, FAB, List } from 'react-native-paper';
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

const NotesScreen = ({ navigation }) => (
  <SafeAreaView style={gStyle.container}>
    <ScrollView contentContainerStyle={gStyle.contentContainer}>
      <View style={{ flex: 1, height: '100%', width: '100%' }}>
        {notes.map(note => {
          return (
            <Surface key={note.id} style={styles.surface}>
              <List.Item
                title={note.title}
                description={note.content}
                onPress={() => navigation.navigate('Note', { id: '123' })}
                left={props => <List.Icon {...props} icon="create" />}
              />
            </Surface>
          );
        })}
      </View>
    </ScrollView>
    <FAB
      style={styles.fab}
      icon="add"
      onPress={() => navigation.navigate('NoteCreate')}
    />
  </SafeAreaView>
);

NotesScreen.navigationOptions = {
  title: 'Notes'
};

NotesScreen.propTypes = {
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
  surface: {
    marginHorizontal: 10,
    marginVertical: 5,
    elevation: 4
  }
});

export default NotesScreen;
