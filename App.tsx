import {useState} from 'react';
import {MD3LightTheme as DefaultTheme, Provider as PaperProvider} from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardTab from './app/(tabs)/Dashboard'; 
import LoginTab from './app/(auth)/Login'; 
import SignupTab from './app/(auth)/Signup'; 
import ForgotPasswordTab from './app/(auth)/ForgotPassword'; 
import InventoryTab from './app/(tabs)/Inventory'; 
import ShoppingListTab from './app/(tabs)/ShoppingList'; 
import UserSettingsTab from './app/(tabs)/UserSettings'; 

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();


const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'tomato',
      secondary: 'yellow',
    },
  };




function MainTabs() {
    return (
      <Tab.Navigator initialRouteName={"Home"}>
        <Tab.Screen name="Home" component={DashboardTab} />
        <Tab.Screen name="User Settings" component={UserSettingsTab} />
        <Tab.Screen name="Inventory" component={InventoryTab} />
        <Tab.Screen name="Shopping List" component={ShoppingListTab} />
      </Tab.Navigator>
    );
  }
  

 function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <PaperProvider theme={theme}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={isLoggedIn ? "MainTabs": "Login"}>
                    {
                        !isLoggedIn ? (
                            <>
                                <Stack.Screen name="Login" component={LoginTab} />
                                <Stack.Screen name="Signup" component={SignupTab} />
                                <Stack.Screen name="Forgot Password" component={ForgotPasswordTab} />
                            </>
                        ) : (
                            <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }}/>
                        )
                        
                    }
                </Stack.Navigator>
            </NavigationContainer>
          </PaperProvider>
    );
  }


  export default App;