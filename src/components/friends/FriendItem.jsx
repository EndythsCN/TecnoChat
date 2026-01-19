import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useThemeStore } from "../../store/useThemeStore";

export default function FriendItem({ name, lastMessage, isOnline, onPress }) {
  const { colors } = useThemeStore();

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[
        styles.card,
        { backgroundColor: colors.surface, borderColor: colors.border },
      ]}
    >
      <View style={styles.avatarContainer}>
        <View style={[styles.avatar, { backgroundColor: colors.primary }]}>
          <Text style={{ fontSize: 20, color: "#14213D" }}>👤</Text>
        </View>

        <View
          style={[
            styles.statusDot,
            {
              backgroundColor: isOnline ? "#10B981" : "#9CA3AF",
              borderColor: colors.surface,
            },
          ]}
        />
      </View>
      <View style={styles.info}>
        <Text
          style={[styles.name, { color: colors.textPrimary }]}
          numberOfLines={1}
        >
          {name}
        </Text>
        <Text
          style={[styles.statusText, { color: colors.textSecondary }]}
          numberOfLines={1}
        >
          {isOnline ? "En linea" : lastMessage || "Desconectado"}
        </Text>
      </View>

      <Ionicons name="chevron-forward" size={20} color={colors.textSecondary} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    marginBottom: 10,
    borderRadius: 16,
    borderWidth: 1,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  avatarContainer: {
    position: "relative",
    marginRight: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  statusDot: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 2,
  },
  info: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 2,
  },
  statusText: {
    fontSize: 13,
  },
});
