import { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { useThemeStore } from "../../store/useThemeStore";

export default function CustomInput({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
}) {
  const { colors } = useThemeStore();
  const [isFocused, setIsFocused ] = useState(false)

  return (
    <View style={styles.container}>
        {label && (
            <Text style={[styles.label, {color: colors.textPrimary}]}>
                {label}
            </Text>
        )}

        <TextInput
        style={[
            styles.input,
            {
                backgroundColor: colors.surface,
                color: colors.textPrimary,
                borderColor: isFocused ? colors.primary : colors.border,
                borderWidth: isFocused ? 2:1,
            }
        ]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.textSecondary}
        secureTextEntry={!!secureTextEntry}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
        width: '100%',
    },
    label: {
        fontSize: 14,
        marginBottom: 8,
        fontWeight: '600',
        marginLeft:4,
    },
    input: {
        height: 50,
        borderRadius: 12,
        paddingHorizontal: 16,
        fontSize: 16,
    }
})
