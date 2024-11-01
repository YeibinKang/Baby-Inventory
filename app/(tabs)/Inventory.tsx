import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InventoryTab = () => {
  return (
    <View style={styles.container}>
      <Text>Inventroy</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default InventoryTab;
