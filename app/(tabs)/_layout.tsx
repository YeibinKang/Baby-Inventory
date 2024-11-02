import React from 'react';
import { Redirect, Stack } from 'expo-router';
import { Text } from 'react-native';
import { useSession } from '../ctx/SessionProvider';
import BottomNavigation from '../components/BottomNavigation'


const AppLayout = () => {
  const { isLoggedIn, isLoading} = useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!isLoggedIn) {
    return <Redirect href="/Login" />;
  }

  return (
    <>
      <Stack initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" options={{ headerShown: false }}/>
        <Stack.Screen name="Inventory" options={{ headerShown: false }}/>
        <Stack.Screen name="ShoppingList" options={{ headerShown: false }}/>
        <Stack.Screen name="UserSettings" options={{ headerShown: false }}/>
      </Stack>
      <BottomNavigation />
    </>
  );
};

export default AppLayout;