import "react-native-gesture-handler";
import MainNavigator from "./src/Routers/MainRouter";
import { ThemeProvider } from "./src/Providers/Theme";

export default function App() {
  return (
    <ThemeProvider>
      <MainNavigator />
    </ThemeProvider>
  );
}
