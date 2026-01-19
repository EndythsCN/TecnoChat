import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { useTabOptions } from "../hooks/useTabOptions";

import FriendsScreen from "../screens/app/FriendsScreen";
import UsersScreen from "../screens/app/UserScreen";
import GlobalScreen from "../screens/app/GlobalScreen";
import ProfileScreen from "../screens/app/ProfileScreen";
import RequestsScreen from "../screens/app/RequestsScreen";

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  const screenOptions = useTabOptions();

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Users"
        component={UsersScreen}
        options={{ title: "Explorar", headerShown: false }}
      />
      <Tab.Screen
        name="Requests"
        component={RequestsScreen}
        options={{
          title: "Solicitudes",
          tabBarBadge: 2,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Friends"
        component={FriendsScreen}
        options={{ title: "Amigos", headerShown: false }}
      />

      <Tab.Screen
        name="GlobalChat"
        component={GlobalScreen}
        options={{ title: "Chat Global", headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: "Perfil", headerShown: false }}
      />
    </Tab.Navigator>
  );
}
