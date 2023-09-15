import "react-native-gesture-handler";
import MainNavigator from "./src/Routers/MainRouter";
import { ThemeProvider } from "./src/Providers/Theme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import NetworkRequired from "./src/containers/NetworkRequired";

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <NetworkRequired>
          <MainNavigator />
        </NetworkRequired>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
