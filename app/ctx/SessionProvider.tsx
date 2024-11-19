import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppState } from 'react-native';

const SessionContext = createContext();

const SessionProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check login status on app launch
    const checkLoginStatus = async () => {
      setIsLoading(true);
      try {
        const loggedIn = await AsyncStorage.getItem('isLoggedIn');
        if (loggedIn === 'true') {
          const userData = await AsyncStorage.getItem('userData');
          setIsLoggedIn(true);
          if (userData) {
            const parsedUserData = JSON.parse(userData);
            console.log('User Data:', parsedUserData);
          }
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error('Error checking login status:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkLoginStatus();
  }, []);

  // Handle background app state
  useEffect(() => {
    const handleAppStateChange = async (nextAppState) => {
      if (nextAppState === 'background' || nextAppState === 'inactive') {
        await AsyncStorage.removeItem('isLoggedIn');
        await AsyncStorage.removeItem('userData');
        console.log('Removed login data from AsyncStorage');
      }
    };

    const subscription = AppState.addEventListener('change', handleAppStateChange);

    return () => {
      subscription.remove();
    };
  }, []);

  // User login function
  const userLogin = async (userData) => {
    try {
      await AsyncStorage.setItem('isLoggedIn', 'true');
      await AsyncStorage.setItem('userData', JSON.stringify(userData)); 
      setIsLoggedIn(true);
      console.log('User logged in:', userData);
    } catch (error) {
      console.error('Error saving login data:', error);
    }
  };

  // User logout function
  const userLogout = async () => {
    try {
      await AsyncStorage.removeItem('isLoggedIn');
      await AsyncStorage.removeItem('userData');
      setIsLoggedIn(false);
      console.log('User logged out');
    } catch (error) {
      console.error('Error removing login data:', error);
    }
  };

  return (
    <SessionContext.Provider value={{ isLoggedIn, setIsLoggedIn, isLoading, setIsLoading, userLogin, userLogout }}>
      {children}
    </SessionContext.Provider>
  );
};

// Custom hook to use session data
const useSession = () => useContext(SessionContext);

export { SessionProvider, useSession };
