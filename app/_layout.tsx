import React from 'react';
import { SessionProvider} from './ctx/SessionProvider';
import { Slot} from 'expo-router';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#db0f0f',
    secondary: '#134bcd',
  },
};

const Root = () => {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider theme={theme}>
          <SessionProvider>
            <Slot />
          </SessionProvider>
      </PaperProvider>
    </GestureHandlerRootView>
  );
};

export default Root;
