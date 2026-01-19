import { View, Text, StyleSheet } from "react-native";
import { useThemeStore } from "../../store/useThemeStore";
import CustomButton from "../ui/CustomButton";

export default function UserItem({ name, email, onAdd, isRequestSent }) {
  const { colors } = useThemeStore();

  return (
    <View style={[styles.card, {backgroundColor: colors.surface, borderColor: colors.border }]}>
        <View style={styles.infoContainer}>
            <View style={[styles.avatar, {backgroundColor: colors.primary}]}>
                <Text style={{fontSize: 20}}>👤</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={[styles.name, {color: colors.textPrimary}]}>{name}</Text>
                <Text style={[styles.email, {color:colors.textSecondary}]}>{email}</Text>
            </View>
        </View>

        <View style={styles.actionContainer}>
            <CustomButton
            title={isRequestSent ? "Pendiente" : "Agregar"}
            variant={isRequestSent ? "outline" : "primary"}
            onPress={onAdd}
            disabled={isRequestSent}
            style={{height: 40, marginVertical: 0}}
            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: 12,
        padding: 12,
        marginBottom: 12,
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    textContainer: {
        flex: 1,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    email: {
        fontSize: 12,
    },
    actionContainer: {
        width: 100,
    }
})