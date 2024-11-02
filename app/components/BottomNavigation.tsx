import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {router} from 'expo-router'


const BOTTOM_APPBAR_HEIGHT = 80;

const MyComponent = () => {
  const { bottom } = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <Appbar
      style={[
        styles.bottom,
        {
          height: BOTTOM_APPBAR_HEIGHT + bottom,
          backgroundColor: theme.colors.elevation.level2,
          justifyContent: 'space-around'
        },
      ]}
      safeAreaInsets={{ bottom }}
    >
      <Appbar.Action icon="view-dashboard" onPress={() => router.push('/Dashboard')}  />
      <Appbar.Action icon="format-list-checkbox" onPress={() => router.push('/Inventory')}  />
      <Appbar.Action icon="cart" onPress={() => router.push('/ShoppingList')}  />
      <Appbar.Action icon="account" onPress={() => router.push('/UserSettings')}  />
    </Appbar>
  );
};

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: 'aquamarine',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row'
    
  },
});

export default MyComponent;