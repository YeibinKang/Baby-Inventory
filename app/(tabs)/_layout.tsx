import React from 'react';
import { Redirect, Tabs } from 'expo-router';
import { Text } from 'react-native';
import { useSession } from '../ctx/SessionProvider';


const AppLayout = () => {
  const { isLoggedIn, isLoading} = useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!isLoggedIn) {
    return <Redirect href="/Login" />;
  }

  return (
    <Tabs initialRouteName="Dashboard">
      <Tabs.Screen name="Dashboard" options={{ headerShown: false }}/>
      <Tabs.Screen name="Inventory" options={{ headerShown: false }}/>
      <Tabs.Screen name="ShoppingList" options={{ headerShown: false }}/>
      <Tabs.Screen name="UserSettings" options={{ headerShown: false }}/>
    </Tabs>
  );
};

export default AppLayout;
