import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { TextInput, ActivityIndicator } from 'react-native-paper';
import { Link, useNavigation, router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSession } from '../ctx/SessionProvider'
import { Button } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 24,
  },
  errorText: {
    color: 'red',
    marginBottom: 16,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  linkText: {
    color: 'blue',
  },
  button: {
    marginTop: 16,
  },
});

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setIsLoggedIn, isLoggedIn, isLoading, setIsLoading} = useSession();


  const handleLogin = async () => {
    setIsLoading(true);
    setError('');
    if (email && password) {
      console.log('Success')
      setIsLoading(false);
      setIsLoggedIn(true);
      await AsyncStorage.setItem('isLoggedIn', 'true');
      console.log('User is Logged in! ',isLoggedIn)
      router.replace('/Dashboard');

    } else {
      setError('Invalid email or password');
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BABY INVENTORY</Text>
      <Text style={styles.title}>Login</Text>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={{ marginBottom: 16 }}
        mode="outlined"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        style={{ marginBottom: 16 }}
        mode="outlined"
        secureTextEntry
      />
      <Link href='/ForgotPassword'>Forgot Password</Link>
      <Button mode="contained" onPress={handleLogin} disabled={isLoading}>
          {isLoading ? <ActivityIndicator color="white" /> : 'Login'}
      </Button>
      <View style={styles.row}>
        <Text>Don't have an account? </Text>
        <Link href='/Signup'>
          <Text style={styles.linkText}>Signup here</Text>
        </Link>
      </View>
    </View>


  )

}


export default Login;