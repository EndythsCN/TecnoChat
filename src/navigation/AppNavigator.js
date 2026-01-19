import { useEffect } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import * as SystemUI from "expo-system-ui";

import { StatusBar } from "expo-status-bar";

import { useAuthStore } from "../store/useAuthStore";
import { useThemeStore } from "../store/useThemeStore";

import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";

import MainTabNavigator from "./MainTabNavigator";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { isAuthenticated } = useAuthStore();
  const { colors, mode } = useThemeStore();

  useEffect(() => {
    const changeSystemBackground = async () => {
      try {
        await SystemUI.setBackgroundColorAsync(colors.background);
      } catch (e) {
        console.log("Error cambiando el background: ", e);
      }
    };
    changeSystemBackground()
  }, [colors.background]);

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.background,
      primary: colors.primary,
      text: colors.textPrimary,
      card: colors.background,
      border: colors.border || "transparent",
    },
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background}}>
    <NavigationContainer theme={MyTheme}>
      <StatusBar
        style={mode === "dark" ? "light" : "dark"}
        backgroundColor={colors.background}
        hidden={false}
        translucent={false}
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
              name="MainTabs"
              component={MainTabNavigator}
              options={{ headerShown: false }}
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
    </View>
  );
}
