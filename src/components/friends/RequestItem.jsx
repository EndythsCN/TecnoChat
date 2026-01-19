import { View, Text, StyleSheet } from "react-native";
import { useThemeStore } from "../../store/useThemeStore";
import CustomButton from "../ui/CustomButton";

export default function RequestItem({ name, onConfirm, onDelete }) {
  const { colors } = useThemeStore();

  return (
    <View
      style={[
        styles.card,
        { backgroundColor: colors.surface, borderColor: colors.border },
      ]}
    >
      <View style={[styles.info]}>
        <View style={[styles.avatar, { backgroundColor: colors.primary }]}>
          <Text style={{ fontSize: 18 }}>👤</Text>
        </View>
        <Text style={[styles.name, { color: colors.textPrimary }]}>{name}</Text>
      </View>

      <View style={styles.actions}>
        <View style={{ flex: 1, marginRight: 5 }}>
            <CustomButton
            title="Confirmar"
            onPress={onConfirm}
            style={{height: 40, marginVertical:0}}
            />
        </View>
        <View style={{flex:1, marginLeft:5}}>
            <CustomButton
            title="Borrar"
            variant="outline"
            onPress={onDelete}
            />
        </View>
      </View>
    </View>
  );
}

const styles= StyleSheet.create({
    card: {
        borderWidth:1,
        borderRadius: 12,
        padding: 15,
        marginBottom: 12,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1},
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})
