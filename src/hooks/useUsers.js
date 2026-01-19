import { useState, useEffect } from "react";

const MOCK_USERS = [
  { id: "1", name: "Jose Ramirez", email: "jose21@gmail.com" },
  { id: "2", name: "Endyths Carrasquel", email: "Endyths21@gmail.com" },
  { id: "3", name: "Ysmael Bolivar", email: "Ysmael21@gmail.com" },
  { id: "4", name: "Andrierber Leal", email: "Andri21@gmail.com" },
  { id: "5", name: "Carlos Perez", email: "Perez21@gmail.com" },
];

export const useUsers = () => {
  const [searchQuery, setSearchQuery] = useState();
  const [users, setUsers] = useState(MOCK_USERS);
  const [filteredUsers, setFilteredUsers] = useState(MOCK_USERS);
  const [sentRequests, setSentRequests] = useState([]);

  useEffect(() => {
    if (!searchQuery) {
      setFilteredUsers(users);
    } else {
      const lowerText = searchQuery.toLowerCase();
      const filtered = users.filter(
        (user) =>
          user.name.toLowerCase().includes(lowerText) ||
          user.email.toLowerCase().includes(lowerText),
      );
      setFilteredUsers(filtered);
    }
  }, [searchQuery, users]);

  const sendFriendRequest = (userId) => {
    console.log(`Endiando solicitud a ${userId}....`);
    setSentRequests((prev) => [...prev, userId]);
  };

  return {
    searchQuery,
    setSearchQuery,
    users: filteredUsers,
    sendFriendRequest,
    sentRequests
  }
};
