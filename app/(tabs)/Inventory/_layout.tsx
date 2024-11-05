import React from 'react';
import { Stack } from 'expo-router';
import InventoryDetailScreen from './InventoryDetailList';

const InventoryLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="InventoryDetailList" options={{ headerShown: false }}/>

    </Stack>
  );
};

export default InventoryLayout;
