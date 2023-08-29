import { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { ThemeContext } from "../Providers/Theme";

const ScreenCard = ({ title, description }) => {
  const { theme } = useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      width: "80%",
      backgroundColor: theme.colors.background.paper,
      alignSelf: "center",
      borderRadius: theme.spacing[6],
      height: theme.spacing[28],
      display:"flex",
      flexDirection:"column",
      textAlign:"center",
      justifyContent:"center",
      padding: theme.spacing[8],
      marginBottom: theme.spacing[10]
    },
    title:{
      color:theme.colors.text.primary,
      marginBottom: theme.spacing[2]
    },
    description:{
      color:theme.colors.text.hint
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default ScreenCard;
