import { useState } from "react";
import { View, StyleSheet } from "react-native";

import AuthLayaout from "../../components/auth/AuthLayaout";
import AuthHeader from "../../components/auth/AuthHeader";
import CustomInput from "../../components/ui/CustomInput";
import CustomButton from "../../components/ui/CustomButton";

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AuthLayaout>
      <AuthHeader
        title="Crear Cuenta"
        subtitle="Unete a la Comunidad TecnoChat"
      />
      <View style={styles.form}>
        <CustomInput
          label="Nombre Completo"
          placeholder="Ej: John Doe"
          value={name}
          onChangeText={setName}
        />
        <CustomInput
          label="Correo Electronico"
          placeholder="usuario@correo.com"
          value={email}
          onChangeText={setEmail}
        />
        <CustomInput
          label="Contraseña"
          placeholder="******"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <View style={styles.actions}>
          <CustomButton
            title="Registrarse"
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    </AuthLayaout>
  );
}

const styles = StyleSheet.create({
    form: { marginBottom: 20 },
    actions: { marginTop: 20 },
})
