import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 24,
  },
});

const LoginTab = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={{ marginBottom: 16 }}
        mode="outlined"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        style={{ marginBottom: 16 }}
        mode="outlined"
        secureTextEntry
      />
      <Text variant="displaySmall">Forgot Password</Text>
      <Button mode="contained" onPress={handleLogin}>
        Login
      </Button>
    </View>
  );
};

export default LoginTab;
