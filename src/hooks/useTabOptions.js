import { Ionicons } from "@expo/vector-icons";
import { useThemeStore } from "../store/useThemeStore";

export const useTabOptions = () => {
  const { colors } = useThemeStore();

  const getIconName = (routeName, focused) => {
    switch (routeName) {
      case "Friends":
        return focused ? "people" : "people-outline";
      case "Users":
        return focused ? "search" : "search-outline";
      case "Requests":
        return focused ? "notifications" : "notifications-outline";
      case "GlobalChat":
        return focused ? "planet" : "planet-outline";
      case "Profile":
        return focused ? "settings" : "settings-outline";
      default:
        return "help-circle";
    }
  };

 const screenOptions=({ route }) => ({
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
          height: 60,
          paddingBottom: 8,
        },
        tabBarActiveTintColor: colors.textPrimary,
        tabBarInactiveTintColor: colors.textSecondary,
        headerStyle: {
          backgroundColor: colors.background,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: colors.textPrimary,
        headerTitleStyle: { fontWeight: "bold" },

        tabBarIcon: ({ focused, color, size }) => {
            const iconName = getIconName(route.name, focused)
            return <Ionicons name={iconName} size={size} color={color}/>
        }
    })
    return screenOptions
};
