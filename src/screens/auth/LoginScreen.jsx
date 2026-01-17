import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useThemeStore } from "../../store/useThemeStore";
import { useLogin } from "../../hooks/useLogin";
import AuthLayaout from "../../components/auth/AuthLayaout";
import AuthHeader from "../../components/auth/AuthHeader";
import CustomInput from "../../components/ui/CustomInput";
import CustomButton from "../../components/ui/CustomButton";

export default function LoginScreen({ navigation }) {
  const { colors, mode, toggleTheme } = useThemeStore();

  const {
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    error,
    handleLogin,
  } = useLogin();

  return (
    <AuthLayaout>
      <View style={{ flex: 1, backgroundColor: colors.backgroundColor, padding: 20 }}>
        <AuthHeader
          title="Bienvenido"
          subtitle="Ingresa tus credenciales para continuar"
        />
        <View style={styles.form}>
          <CustomInput
            label="Correo Electronico"
            placeholder="usuario@corre.com"
            value={email}
            onChangeText={setEmail}
          />

          <CustomInput
            label="Contraseña"
            placeholder="*******"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          {error && (
            <Text
              style={{
                color: colors.error || "red",
                marginBottom: 10,
                textAlign: "center",
              }}
            >
              {error}
            </Text>
          )}

          <View style={styles.actions}>
            <CustomButton
              title="Iniciar Sesion"
              onPress={handleLogin}
              isLoading={isLoading}
            />
            <CustomButton
              title="Crear Cuenta"
              variant="outline"
              onPress={() => navigation.navigate("Register")}
            />
          </View>
        </View>

        <View style={styles.footer}>
          <Text
            onPress={toggleTheme}
            style={[styles.link, { color: colors.textSecondary }]}
          >
            Cambiar a {mode === "light" ? "Modo Oscuro 🌙" : "Modo Claro ☀"}
          </Text>
        </View>
      </View>
    </AuthLayaout>
  );
}

const styles = StyleSheet.create({
  form: {
    marginBottom: 20,
  },
  actions: {
    marginTop: 10,
  },
  footer: {
    alignItems: "center",
    marginTop: 30,
  },
  link: {
    fontSize: 14,
    textDecorationLine: "underline",
    padding: 10,
  },
});
