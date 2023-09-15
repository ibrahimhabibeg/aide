import { Text, View, ScrollView } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../Providers/Theme";

const MadeByFooter = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <View style={{ backgroundColor: theme.colors.background.default, paddingBottom:theme.spacing[5]}}>
      <Text
        style={{
          color: theme.colors.text.secondary,
          textAlign: "center"
        }}
      >
        Made with ❤️ by Ibrahim Habib
      </Text>
    </View>
  );
};

const withMadeByFooter = (Compnent) => (props) => {
  return (
    <ScrollView style={{minHeight:"100%"}} contentContainerStyle={{minHeight:"100%"}}>
      <Compnent {...props} />
      <MadeByFooter />
    </ScrollView>
  );
};

export default withMadeByFooter;
