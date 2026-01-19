import {
  View,
  Text,
  FlatList,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useThemeStore } from "../../store/useThemeStore";
import { useUsers } from "../../hooks/useUsers";
import UserItem from "../../components/users/UserItem";
import CustomInput from "../../components/ui/CustomInput";

export default function UserScreen() {
  const { colors } = useThemeStore();
  const { width, height } = useWindowDimensions();
  const {
    searchQuery,
    setSearchQuery,
    users,
    sendFriendRequest,
    sentRequests,
  } = useUsers();

  return (
    <SafeAreaView
    edges={['top', 'left', 'right']}
    style={[
      styles.container,
      {backgroundColor: colors.background}
    ]} >
      <View
        style={[
          styles.responsive,
          {
            width: "100%",
            maxWidth: 800,
            alignSelf: "center",
          },
        ]}
      >
        <View style={styles.searchContainer}>
          <CustomInput
            placeholder="Buscar por nombre..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        <FlatList
          data={users}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20 }}
          renderItem={({ item }) => (
            <UserItem
              name={item.name}
              email={item.email}
              isRequestSent={sentRequests.includes(item.id)}
              onAdd={() => sendFriendRequest(item.id)}
            />
          )}
          ListEmptyComponent={
            <View
              style={[
                styles.emptyContainer,
                {
                  marginTop: height * 0.1,
                },
              ]}
            >
              <Text style={{ fontSize: width * 0.08, maxWidth: 60 }}>🔍</Text>
              <Text
                style={{
                  color: colors.textSecondary,
                  marginTop: 10,
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: 16,
                }}
              >
                No se encontraron usuarios
              </Text>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  responsive: {
    flex: 1,
    width: "100%",
  },
  searchContainer: {
    padding: 20,
    paddingBottom: 10,
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    opacity: 0.7,
  },
});
