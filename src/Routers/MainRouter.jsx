import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
