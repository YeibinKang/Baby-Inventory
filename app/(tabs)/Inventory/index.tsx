import React from 'react';
import { Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';

const InventoryTab = () => {
  // const navigation = useNavigation();

  return (
    <View>
      <Button title="Go to Item Detail" onPress={() => router.push('/Inventory/ItemDetail')} />
    </View>
  );
};

export default InventoryTab;
