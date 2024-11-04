import React from 'react';
import { Redirect, Stack } from 'expo-router';
import { Text, SafeAreaView } from 'react-native';
import { useSession } from '../ctx/SessionProvider';
import BottomNavigation from '../components/BottomNavigation';
import { usePathname } from 'expo-router';


const AppLayout = () => {
  const { isLoggedIn, isLoading } = useSession();

  const pathname = usePathname();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!isLoggedIn) {
    return <Redirect href="/Login" />;
  }



  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" options={{ headerShown: false }} />
        <Stack.Screen name="Inventory" options={{ headerShown: false }} />
        <Stack.Screen name="ShoppingList" options={{ headerShown: false }} />
        <Stack.Screen name="UserSettings" options={{ headerShown: false }} />
      </Stack>
      { ('/Inventory/ItemDetail' !== pathname) && <BottomNavigation />}
    </SafeAreaView>
  );
};

export default AppLayout;
