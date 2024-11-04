import React from 'react';
import { Stack } from 'expo-router';

const UserSettingsLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="BabyInfo" options={{ headerShown: false }} />
    </Stack>
  );
};

export default UserSettingsLayout;
