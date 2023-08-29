import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import { ThemeContext } from "../Providers/Theme";

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
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
