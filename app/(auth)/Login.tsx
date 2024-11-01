import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { TextInput, Button, ActivityIndicator } from 'react-native-paper';
import { Link, useNavigation, router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSession } from '../ctx/SessionProvider'

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
});

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { setIsLoggedIn, isLoggedIn } = useSession();

  const handleLogin = async () => {
    setLoading(true);
    setError('');
    if (email && password) {
      console.log('Success')
      setLoading(false);
      setIsLoggedIn(true);
      await AsyncStorage.setItem('isLoggedIn', 'true');
      console.log('User is Logged in! ',isLoggedIn)
      router.replace('/Dashboard');

    } else {
      setError('Invalid email or password');
      setLoading(false);
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
      <Pressable mode="contained" onPress={handleLogin} disabled={loading}>
        <Text>
          {loading ? <ActivityIndicator color="white" /> : 'Login'}
        </Text>
      </Pressable>
      <View style={{flexDirection:'row'}}>
        <Text style={{ marginTop: 20 }}>Don't have an account? </Text>
        <Link href='/Signup' asChild>
            <Text>
              Signup here
            </Text>
        </Link>
      </View>
    </View>
  )

}


export default Login;