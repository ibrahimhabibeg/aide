import { createContext, useState } from "react";

const theme = {
  spacing: {
    0: 0,
    px: 1,
    0.5: 2,
    1: 4,
    1.5: 6,
    2: 8,
    2.5: 10,
    3: 12,
    3.5: 14,
    4: 16,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    9: 36,
    10: 40,
    11: 44,
    12: 48,
    14: 56,
    16: 64,
    20: 80,
    24: 96,
    28: 112,
    32: 128,
    36: 144,
    40: 160,
    44: 176,
    48: 192,
    52: 208,
    56: 224,
    60: 240,
    64: 256,
    72: 288,
    80: 320,
    96: 384,
  },
};

const LightColors = {
  type: "light",
  primary: {
    main: "#3f51b5",
    dark: "#2c387e",
    light: "#6573c3",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#f50057",
    light: "#f73378",
    dark: "#ab003c",
    contrastText: "#ffffff",
  },
  text: {
    primary: "rgba(0,0,0,0.86)",
    secondary: "rgba(0,0,0,0.53)",
    disabled: "rgba(0,0,0,0.37)",
    hint: "rgba(0,0,0,0.37)",
  },
  background: {
    default: "#eeeeee",
    paper: "#f5f5f5",
  },
  divider: "rgba(0,0,0,0.12)",
  disabled:{
    background:"#9e9e9e",
    text:"#e0e0e0"
  }
};

const DarkColors = {
  type: "dark",
  primary: {
    main: "#3f51b5",
    light: "#6573c3",
    dark: "#2c387e",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#f50057",
    light: "#f73378",
    dark: "#ab003c",
    contrastText: "#ffffff",
  },
  background: {
    default: "#212121",
    paper: "#424242",
  },
  text: {
    secondary: "rgba(255,255,255,0.7)",
    disabled: "rgba(255,255,255,0.5)",
    hint: "rgba(255,255,255,0.5)",
    primary: "#ffffff",
  },
  divider: "rgba(255,255,255,0.12)",
  disabled:{
    background:"#424242",
    text:"#ffffff"
  }
};

const LightTheme = {
  ...theme,
  colors: LightColors,
};

const DarkTheme = {
  ...theme,
  colors: DarkColors,
};

export const ThemeContext = createContext({
  theme: DarkTheme,
  toggleTheme: () => {},
  isDark: true,
});

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  return (
    <ThemeContext.Provider
      value={{
        isDark: isDark,
        theme: isDark ? DarkTheme : LightTheme,
        toggleTheme: () => setIsDark((val) => !val),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
