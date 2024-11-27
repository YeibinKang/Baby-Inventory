import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthCheck from '@components/AuthCheck';
// import { NavigationContainer } from '@react-navigation/native';
import { SessionProvider } from './ctx/SessionProvider';


const App = () => {
  return (
        <SafeAreaProvider>
            <SessionProvider>
                <AuthCheck />
            </SessionProvider>
        </SafeAreaProvider>
  );
};

export default App;
