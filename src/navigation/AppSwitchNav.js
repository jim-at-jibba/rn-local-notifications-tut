import * as React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SnackBar from '../components/snack-bar';
import TabsNav from './TabsNav';

const SwitchNavigator = createSwitchNavigator({
  Main: TabsNav
});

const AppNav = createAppContainer(SwitchNavigator);

const App = () => (
  <>
    <AppNav />
    <SnackBar />
  </>
);

export default App;
