import { Text, View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "@/screens/HomeScreen";
import UserInventoryScreen from "@/screens/UserInventoryScreen";



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function Index() {
  return (

      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
        <Tab.Screen name="Inventory" component={UserInventoryScreen}></Tab.Screen>
      </Tab.Navigator>

  );
}
