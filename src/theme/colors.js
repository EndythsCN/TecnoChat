{
  /* Manejo de Temas (Oscuro y Claro) y Colores de la Paleta */
}

const PALETTE = {
  black: "#000000",
  prussianBlue: "#14213D",
  secondaryBlue: "#213766",
  orange: "#FCA311",
  alabaster: "#E5E5E5",
  white: "#FFFFFF",
};

export const lightTheme = {
  mode: "light",
  primary: PALETTE.orange,
  background: PALETTE.white,
  surface: PALETTE.alabaster,
  textPrimary: PALETTE.prussianBlue,
  textSecondary: "#4B5563",
  border: PALETTE.alabaster,

  bubbleMe: PALETTE.orange,
  textMe: PALETTE.prussianBlue,
  bubbleOther: PALETTE.alabaster,
  textOther: PALETTE.black,

  statusBar: "dark-content",
};

export const darkTheme = {
  mode: "dark",
  primary: PALETTE.orange,
  background: PALETTE.prussianBlue,
  surface: PALETTE.secondaryBlue,
  textPrimary: PALETTE.white,
  textSecondary: PALETTE.alabaster,
  border: "#1E293B",

  bubbleMe: PALETTE.orange,
  textMe: PALETTE.prussianBlue,
  bubbleOther: "#000000",
  textOther: PALETTE.white,

  statusBar: "light-content",
};

export const THEMES = {
  light: lightTheme,
  dark: darkTheme,
};
