import "react-native-gesture-handler";
import MainNavigator from "./src/Routers/MainRouter";
import { ThemeProvider } from "./src/Providers/Theme";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <MainNavigator />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
