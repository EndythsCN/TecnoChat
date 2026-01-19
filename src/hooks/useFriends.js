import { useState } from "react";

const MOCK_FRIENDS = [
  {
    id: "1",
    name: "Maria Perez",
    isOnline: true,
    lastMessage: "¡Hola! ¿Cómo vas?",
  },
  {
    id: "2",
    name: "Juan Tecnico",
    isOnline: false,
    lastMessage: "Revisa el PR porfa",
  },
  {
    id: "3",
    name: "Ana Diseño",
    isOnline: true,
    lastMessage: "Ya subí los iconos",
  },
  {
    id: "4",
    name: "Carlos CEO",
    isOnline: false,
    lastMessage: "Reunión a las 3",
  },
  {
    id: "5",
    name: "Soporte IT",
    isOnline: false,
    lastMessage: "Reinicia el servidor",
  },
];

export const useFriends = () => {
  const [search, setSearch] = useState("");

  const friends = MOCK_FRIENDS.filter(f =>
    f.name.toLowerCase().includes(search.toLocaleLowerCase()),
  );
  return {
    friends,
    search,
    setSearch,
  };
};
