import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { SessionProvider} from './ctx/SessionProvider';
import AuthCheck from './components/AuthCheck';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};


const App = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <SessionProvider >
          <AuthCheck/>
        </SessionProvider>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;
