import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppState } from 'react-native'
const SessionContext = createContext();

const SessionProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    const handleAppStateChange = async (nextAppState) => {
      if (nextAppState === 'background' || nextAppState === 'inactive') {
        await AsyncStorage.removeItem('isLoggedIn');
        console.log('Removed isLoggedIn from AsyncStorage');
      }
    };

    const subscription = AppState.addEventListener('change', handleAppStateChange);

    return () => {
      subscription.remove();
    };
  }, [])

  useEffect(() => {
    const checkLoginStatus = async () => {
      setIsLoading(true)
      const loggedIn = await AsyncStorage.getItem('isLoggedIn');

      if (loggedIn === 'true') {
        setIsLoggedIn(true);
        console.log('User is logged in');
        setIsLoading(false)
      } else {
        setIsLoggedIn(false);
        console.log('User is not logged in');
        setIsLoading(false)
      }
    };
    checkLoginStatus();
  }, []);


  const userLogout = async() => {
    await AsyncStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    console.log('User is not logged in');
  } 

  return (
    <SessionContext.Provider value={{ isLoggedIn, setIsLoggedIn, isLoading, setIsLoading, userLogout }}>
      {children}
    </SessionContext.Provider>
  );
};

const useSession = () => useContext(SessionContext);

export { SessionProvider, useSession };
