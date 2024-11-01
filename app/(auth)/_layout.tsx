import React from 'react';
import {Stack} from 'expo-router'



const AuthLayout = () => {
  return (
      <Stack initialRouteName="Login">
        <Stack.Screen name="Login" />
        <Stack.Screen name="Signup" />
        <Stack.Screen name="ForgotPassword"/>
      </Stack>

  );
};

export default AuthLayout;
