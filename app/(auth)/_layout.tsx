import React from 'react';
import {Stack} from 'expo-router'



const AuthLayout = () => {
  return (
      <Stack initialRouteName="Login">
        <Stack.Screen name="Login" options={{ headerShown: false }} />
        <Stack.Screen name="Signup" options={{title: 'Create Account'}}/>
        <Stack.Screen name="ForgotPassword" options={{title: 'Reset Password'}}/>
      </Stack>

  );
};

export default AuthLayout;
