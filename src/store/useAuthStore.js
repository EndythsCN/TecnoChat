import { create } from "zustand";

//Manejo del estado del usuario (si esta logueado o no)
export const useAuthStore = create((set) => ({
  user: null, //Datos del usuario
  token: null, //Token seguro
  isLoading: false,
  isAuthenticated: false,

  //Acciones de cambio de Estado
  setAuth: (user, token) => set({ user, token, isAuthenticated: true }),
  logout: () => set({ user: null, token: null, isAuthenticated: false }),
}));
