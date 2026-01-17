import { View, Text, StyleSheet } from "react-native";
import { useAuthStore } from "../../store/useAuthStore";
import { useThemeStore } from "../../store/useThemeStore";
import CustomButton from "../../components/ui/CustomButton";

export default function FriendsScreen() {
  const { logout, user } = useAuthStore();
  const { colors } = useThemeStore();

  return (
    <View style={[styles.content, { backgroundColor: colors.background }]}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: colors.textSecondary }]}>
          ¡Hola, {user?.name || "Usuario"}! 👋
        </Text>

        <Text style={[styles.text, { color: colors.textSecondary }]}>
          Amigos
        </Text>
        <View style={styles.buttonContainer}>
          <CustomButton title="Cerrar Sesion" onPress={logout} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
  },
  buttonContainer: {
    width: "100%",
  },
});
