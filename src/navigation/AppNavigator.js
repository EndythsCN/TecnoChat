import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";

import { useAuthStore } from "../store/useAuthStore";
import { useThemeStore } from "../store/useThemeStore";


import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen"; 
import FriendsScreen from "../screens/app/FriendsScreen";     

const Stack = createNativeStackNavigator();

export default function AppNavigator() {

  const { isAuthenticated } = useAuthStore(); 
  const { colors, mode } = useThemeStore(); 

  return (
  
    <NavigationContainer>
      <StatusBar
        barStyle={mode === "dark" ? "light-content" : "dark-content"}
        backgroundColor={colors.background}
      />

      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: colors.background },
          headerTintColor: colors.textPrimary,
          headerTitleStyle: { fontWeight: "bold" },
          contentStyle: { backgroundColor: colors.background }, 
        }}
      >
        {isAuthenticated ? (
          <Stack.Group>
            <Stack.Screen 
              name="Friends" 
              component={FriendsScreen} 
              options={{ title: 'Mis Amigos' }} 
            />
          </Stack.Group>
        ) : (
          <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}