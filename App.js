import React from 'react';
import { StatusBar, View } from 'react-native';
import { AppLoading, ScreenOrientation } from 'expo';
import { Provider as PaperProvider } from 'react-native-paper';
import { device, func, gStyle } from './src/constants';
import ContextProvider from './src/globalState/state';

// navigation switch
import AppSwitchNav from './src/navigation/AppSwitchNav';

const App = () => {
  const [isLoading, setLoading] = React.useState(true);

  if (isLoading) {
    return (
      <AppLoading
        onFinish={() => setLoading(false)}
        startAsync={func.loadAssetsAsync}
      />
    );
  }

  return (
    <View style={gStyle.container}>
      <StatusBar barStyle={device.iOS ? 'dark-content' : 'light-content'} />
      <PaperProvider>
        <ContextProvider>
          <AppSwitchNav />
        </ContextProvider>
      </PaperProvider>
    </View>
  );
};

export default App;
