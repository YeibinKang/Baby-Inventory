import { Text, View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "@/screens/HomeScreen";
import UserInventoryScreen from "@/screens/UserInventoryScreen";
import InventoryList from "@/components/InventoryList";
import InventoryDetailScreen from "@/screens/InventoryDetailScreen";



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Inventory(){
  return(
    
    
    <Stack.Navigator>
        <Stack.Screen name="InventoryDetailScreen" component={InventoryDetailScreen}></Stack.Screen>
    </Stack.Navigator>
  )
}
export default function Index() {
  return (
  
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
        <Tab.Screen name="InventoryList" component={InventoryList}></Tab.Screen>
        <Tab.Screen name="Inventory" component={Inventory}></Tab.Screen>
        
      </Tab.Navigator>

      

  );
}
