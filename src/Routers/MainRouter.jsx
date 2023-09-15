import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import Essay from "../Essay";
import Poem from "../Poem";
import WordAnalysis from "../WordAnalysis";
import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import { ThemeContext } from "../Providers/Theme";
import Explain from "../Explain";
import { Pressable } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import Email from "../Email";

const Stack = createStackNavigator();

const ThemeToggle = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <Pressable onPress={toggleTheme}>
      <FontAwesomeIcon
        icon={theme.colors.type === "light" ? faSun : faMoon}
        style={{
          marginRight: theme.spacing[5],
          color: theme.colors.text.secondary,
        }}
      />
    </Pressable>
  );
};

const MainNavigator = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: theme.colors.background.paper },
          headerTintColor: theme.colors.text.secondary,
          headerRight: ThemeToggle,
          cardShadowEnabled: true,
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Aide" }}
        />
        <Stack.Screen name="Essay" component={Essay} />
        <Stack.Screen name="Email" component={Email} />
        <Stack.Screen name="Explain" component={Explain} />
        <Stack.Screen name="Poem" component={Poem} />
        <Stack.Screen
          name="WordAnalysis"
          component={WordAnalysis}
          options={{ title: "Word Analysis" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
