import React from 'react';
import { Stack } from 'expo-router';
//import { ShoppingListProvider } from '/context/ShoppingListProvider';
import { ShoppingListProvider } from 'app/ctx/ShoppingListProvider';


const UserSettingsLayout = () => {
    return (
        <ShoppingListProvider>
            <Stack>
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen name="Online" options={{ headerShown: false }} />
                <Stack.Screen name="Stores" options={{ headerShown: false }} />
            </Stack>
        </ShoppingListProvider>
    );
};


export default UserSettingsLayout;
