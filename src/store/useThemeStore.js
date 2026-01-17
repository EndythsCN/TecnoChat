import { create } from "zustand";
import { THEMES } from "../theme/colors";

export const useThemeStore = create((set) => ({
  mode: "light",
  colors: THEMES.light,

  toggleTheme: () =>
    set((state) => {
      const newMode = state.mode === "light" ? "dark" : "light";
      return {
        mode: newMode,
        colors: THEMES[newMode],
      };
    }),
}));
