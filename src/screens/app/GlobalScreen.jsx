import React from 'react';
import { View, Text } from 'react-native';
import { useThemeStore } from '../../store/useThemeStore';

export default function GlobalChatScreen() {
  const { colors } = useThemeStore();
  return (
    <View style={{ flex: 1, backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: colors.textPrimary, fontSize: 20 }}>🌎 Chat Global</Text>
    </View>
  );
}