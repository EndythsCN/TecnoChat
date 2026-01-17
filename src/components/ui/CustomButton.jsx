import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useThemeStore } from "../../store/useThemeStore";

export default function CustomButton({
  title,
  onPress,
  variant = "primary",
  isLoading,
}) {
  const { colors } = useThemeStore();

  const isPrimary = variant === "primary";
  const bgColor = isPrimary ? colors.primary : "transparent";
  const textColor = isPrimary ? "#14213D" : (colors.textPrimary || "#000");

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={!!isLoading}
      activeOpacity={0.8}
      style={[
        styles.button,
        { backgroundColor: bgColor, borderColor: colors.primary },
        !isPrimary && styles.outlineButton,
      ]}
    >
      {!!isLoading ? (
        <ActivityIndicator color={textColor} />
      ) : (
        <Text style={[styles.text, { color: textColor }]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 52,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginVertical: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  outlineButton: {
    borderWidth: 2,
    elevation: 0,
    backgroundColor: "transparent",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
});
