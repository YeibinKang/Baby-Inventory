import React from 'react';
import { Slot, Redirect } from 'expo-router';
import { Text } from 'react-native';
import { useSession } from '../ctx/SessionProvider';



const AuthCheck = () => {
    const { isLoggedIn, isLoading } = useSession();
  
    if (isLoading) {
      return <Text>Loading...</Text>;
    }
  
    if (isLoggedIn) {
      return <Redirect href="/Dashboard" />;
    } else {
      return <Redirect href="/Login" />;
    }
  };
  
  export default AuthCheck;