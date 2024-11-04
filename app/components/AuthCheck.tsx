import React from 'react';
import { Slot, Redirect } from 'expo-router';
import { Text, ActivityIndicator, View } from 'react-native';
import { useSession } from '../ctx/SessionProvider';



const AuthCheck = () => {
    const { isLoggedIn, isLoading } = useSession();
  
    if (isLoading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>Loading...</Text>
        </View>
      )
    }
  
    if (isLoggedIn) {
      return <Redirect href="/Dashboard" />;
    } else {
      return <Redirect href="/Login" />;
    }
  };
  
  export default AuthCheck;