import React from 'react';
import { Stack } from 'expo-router';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ItemDetail from './ItemDetail';
import AddItem from "./AddItem";
import { NavigationContainer } from '@react-navigation/native';

//const Stack = createNativeStackNavigator();

const InventoryLayout = () => {
  return (
    // <Stack>
    //   <Stack.Screen name="index" options={{ headerShown: false }} />
    //   <Stack.Screen name="ItemDetail" options={{ headerShown: false }} />
    // </Stack>

    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="ItemDetail" options={{ headerShown: false }} />
      <Stack.Screen name="AddItem" options={{ headerShown: false }} />
    </Stack>
  );
};

export default InventoryLayout;
