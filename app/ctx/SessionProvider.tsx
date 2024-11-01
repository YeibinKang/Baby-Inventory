import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SessionContext = createContext();

const SessionProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      setIsLoading(true)
      const loggedIn = await AsyncStorage.getItem('isLoggedIn');
      console.log('Checking login status:', loggedIn);
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

  return (
    <SessionContext.Provider value={{ isLoggedIn, setIsLoggedIn, isLoading }}>
      {children}
    </SessionContext.Provider>
  );
};

const useSession = () => useContext(SessionContext);

export { SessionProvider, useSession };
