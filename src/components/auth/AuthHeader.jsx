import { View, Text, StyleSheet, Image } from "react-native";
import { useThemeStore } from "../../store/useThemeStore";
import logo from '../../assets/images/TecnoCHat.png'

export default function AuthHeader({ title, subtitle }) {
  const { colors } = useThemeStore();

  return (
    <View style={styles.header}>
      <View>
        <Image 
        source={logo} style={styles.Logo} resizeMode="contain"
        />
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
        alignItems: 'center',
        marginBottom:40,
    },
    logoText: {
      fontSize:40,
    },
    title: {
      fontSize:32,
      fontWeight: 'bold',
      marginBottom: 8,
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 16,
      textAlign: 'center',
    },
    Logo: {
      width:200,
      height: 200,
      borderRadius:100,
    },
})