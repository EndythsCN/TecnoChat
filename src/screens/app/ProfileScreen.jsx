import React from 'react';
import { View, Text } from 'react-native';
import { useThemeStore } from '../../store/useThemeStore';
import { useAuthStore } from '../../store/useAuthStore';
import CustomButton from '../../components/ui/CustomButton';

export default function ProfileScreen() {
  const { colors, toggleTheme, mode } = useThemeStore();
  const { logout, user } = useAuthStore();

  return (
    <View style={{ flex: 1, backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ color: colors.textPrimary, fontSize: 24, marginBottom: 10 }}>Mi Perfil</Text>
      <Text style={{ color: colors.textSecondary, marginBottom: 30 }}>{user?.name}</Text>
      
      <CustomButton title={`Tema: ${mode.toUpperCase()}`} onPress={toggleTheme} variant="outline" />
      <View style={{ marginTop: 10, width: '100%' }}>
        <CustomButton title="Cerrar Sesión" onPress={logout} />
      </View>
    </View>
  );
}