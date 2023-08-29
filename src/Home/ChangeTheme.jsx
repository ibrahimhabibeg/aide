import { useContext } from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { ThemeContext } from "../Providers/Theme";

const ChangeTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      width: "80%",
      backgroundColor: theme.colors.background.paper,
      alignSelf: "center",
      borderRadius: theme.spacing[6],
      height: theme.spacing[28],
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      justifyContent: "center",
      padding: theme.spacing[8],
      marginBottom: theme.spacing[10],
    },
    title: {
      color: theme.colors.text.primary,
      marginBottom: theme.spacing[2],
    },
    description: {
      color: theme.colors.text.hint,
    },
  });

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={toggleTheme}
    >
      <Text style={styles.title}>{theme.colors.type==="light"?"Dark Mode":"Light Mode"}</Text>
      <Text style={styles.description}>{theme.colors.type==="light"?"Feed your inner Dracula":"Switch to light mode"}</Text>
    </TouchableOpacity>
  );
};

export default ChangeTheme;
