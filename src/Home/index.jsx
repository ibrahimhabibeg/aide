import { ScrollView } from "react-native";
import ScreenCard from "./ScreenCard";
import { ThemeContext } from "../Providers/Theme";
import { useContext } from "react";

const ScreensData = [
  {
    title: "Essay Writer",
    description: "Just ask for the topic and we will wrire it.",
  },
  {
    title: "Explainer",
    description: "Explain the topic as if I am 5 years old.",
  },
];

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ScrollView
      style={{
        width: "100%",
        backgroundColor: theme.colors.background.default,
        paddingVertical: theme.spacing[10],
      }}
    >
      {ScreensData.map((screenData, index) => (
        <ScreenCard
          key={index}
          title={screenData.title}
          description={screenData.description}
        />
      ))}
    </ScrollView>
  );
};

export default Home;
