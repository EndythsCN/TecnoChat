import { View, Text, FlatList, StyleSheet } from "react-native";
import { useThemeStore } from "../../store/useThemeStore";
import { useFriends } from "../../hooks/useFriends";
import FriendItem from "../../components/friends/FriendItem";
import CustomInput from "../../components/ui/CustomInput";

export default function FriendsScreen({ navigation }) {
  const { colors } = useThemeStore();
  const { friends, search, setSearch } = useFriends();

  const handlePressFriend = (friend) => {
    navigation.navigate("PrivateChat", {
      userId: friend.id,
      userName: friend.name,
    });
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.textPrimary }]}>
          Mis contactos ({friends.length})
        </Text>
      </View>

      <FlatList
        data={friends}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <FriendItem
            name={item.name}
            isOnline={item.isOnline}
            lastMessage={item.lastMessage}
            onPress={() => handlePressFriend(item)}
          />
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={{ fontSize: 40 }}>😎</Text>
            <Text style={{ color: colors.textSecondary, marginTop: 10 }}>
              No se encontraron Amigos
            </Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  listContent: {
    padding: 20,
    paddingTop: 10,
  },
  emptyContainer: {
    alignItems: "center",
    marginTop: 50,
  },
});
