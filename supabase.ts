import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'
import { Database } from './assets/types/supabase';
import { AppState, Platform } from 'react-native';


const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY as string;


// Check if Supabase credentials are defined
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL or Anon Key is not defined');
}

class SupabaseStorage {
  // Get item from storage based on platform
  async getItem(key: string) {
    if (Platform.OS === "web") {
      if (typeof localStorage === "undefined") {
        return null;
      }
      return localStorage.getItem(key); 
    }
    return AsyncStorage.getItem(key); 
  }

  async removeItem(key: string) {
    if (Platform.OS === "web") {
      return localStorage.removeItem(key); 
    }
    return AsyncStorage.removeItem(key); 
  }

  async setItem(key: string, value: string) {
    if (Platform.OS === "web") {
      return localStorage.setItem(key, value); 
    }
    return AsyncStorage.setItem(key, value); 
  }
}


export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: new SupabaseStorage(), 
    autoRefreshToken: true,
    persistSession: false,
    detectSessionInUrl: false,
  },
});
