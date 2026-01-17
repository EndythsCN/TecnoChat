import {  useState } from "react";
import { useAuthStore } from "../store/useAuthStore";

export const useLogin = () => {
  const { setAuth } = useAuthStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = () => {
    if (!email || !password) {
      setError("Por favor llena los campos");
      return;
    }

    setError(null);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setAuth({ name: "John Doe", email }, "tokenseguro123");
    }, 1500);
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    error,
    handleLogin,
  };
};
