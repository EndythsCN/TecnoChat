import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";
import { useThemeStore } from "../../store/useThemeStore";
import logo from "../../assets/images/TecnoCHat.png";

export default function AuthHeader({ title, subtitle }) {
  const { colors } = useThemeStore();
  const { width, height } = useWindowDimensions();

  const logoSize = Math.min(width * 0.45, 200)

  return (
    <View style={[styles.header, {marginTop: height * 0.05}]}>
      <View 
      style={[styles.logoPlaceholder,
        {
          width: logoSize,
          height: logoSize,
          borderRadius: logoSize / 2,
          shadowColor: colors.primary,
          backgroundColor: colors.background
        }
      ]}>
        <Image source={logo} style={{ width: logoSize * 0.7, height: logoSize * 0.7}} resizeMode="contain" />
      </View>

      <Text style={[styles.title, { color: colors.textPrimary }]}>{title}</Text>

      <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
        {subtitle}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    marginBottom: 20,
    width: '100%',
  },
  logoPlaceholder: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
  },
});
