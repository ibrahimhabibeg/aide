import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import Essay from "../Essay";
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
