import { View, Text, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useThemeStore } from "../../store/useThemeStore";
import RequestItem from "../../components/friends/RequestItem";

const MOCKS_REQUEST = [
  { id: "1", name: "Maria Perez" },
  { id: "2", name: "Juan Pablo" },
  { id: "3", name: "Jesus Leones" },
];

export default function RequestsScreen() {
  const { colors } = useThemeStore();
  const handleConfirm = (id) => {
    console.log("Confirmando a: ", id);
  };

  const handleDelete = (id) => {
    console.log("Eliminando a: ", id);
  };

  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>
        Solicitudes Pendientes
      </Text>

      <FlatList
        data={MOCKS_REQUEST}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 20 }}
        renderItem={({ item }) => (
          <RequestItem
            name={item.name}
            onConfirm={() => handleConfirm(item.id)}
            onDelete={() => handleDelete(item.id)}
          />
        )}
        ListEmptyComponent={
          <Text
            style={{
              color: colors.textSecondary,
              textAlign: "center",
              marginTop: 50,
            }}
          >
            No tienes Solicitudes
          </Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
  },
});
