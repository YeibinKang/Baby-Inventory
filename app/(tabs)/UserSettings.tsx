import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserSettingsTab = () => {
  return (
    <View style={styles.container}>
      <Text>User Settings</Text>
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

export default UserSettingsTab;
