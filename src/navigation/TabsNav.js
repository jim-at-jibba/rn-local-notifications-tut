import React from 'react';
import PropTypes from 'prop-types';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import { colors } from '../constants';

// grab screens
import NotesScreen from '../screens/NotesScreen';
import NoteScreen from '../screens/NoteScreen';
import NoteCreateScreen from '../screens/NotesCreateScreen';
// grab svg icons

import SvgHome from '../components/icons/Svg.Home';

// Home Stack
// /////////////////////////////////////////////////////////////////////////////
const NotesStack = createStackNavigator({
  Home: NotesScreen,
  Note: NoteScreen,
  NoteCreate: NoteCreateScreen
});

const NotesTabBarIcon = ({ focused }) => <SvgHome active={focused} />;
NotesTabBarIcon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

NotesStack.navigationOptions = {
  tabBarLabel: 'Notes',
  tabBarIcon: NotesTabBarIcon
};

export default createBottomTabNavigator(
  {
    NotesStack
  },
  {
    initialRouteName: 'NotesStack',
    tabBarOptions: {
      activeTintColor: colors.brandPrimary,
      inactiveTintColor: colors.grey
    }
  }
);
