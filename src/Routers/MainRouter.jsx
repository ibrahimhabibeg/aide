import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import Essay from "../Essay";
import Poem from "../Poem";
import WordAnalysis from "../WordAnalysis";
import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import { ThemeContext } from "../Providers/Theme";
import Explain from "../Explain";

const Stack = createStackNavigator();

const MainNavigator = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: theme.colors.background.paper },
          headerTintColor: theme.colors.text.secondary,
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Aide" }}
        />
        <Stack.Screen name="Essay" component={Essay} />
        <Stack.Screen name="Explain" component={Explain} />
        <Stack.Screen name="Poem" component={Poem} />
        <Stack.Screen name="WordAnalysis" component={WordAnalysis} options={{ title: "Word Analysis" }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
