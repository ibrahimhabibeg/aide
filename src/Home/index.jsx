import { ScrollView } from "react-native";
import ScreenCard from "./ScreenCard";
import { ThemeContext } from "../Providers/Theme";
import { useContext } from "react";
import { screenData as EssayScreenData } from "../Essay";

const ScreensData = [
  EssayScreenData,
];

const Home = ({navigation}) => {
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
          screen={screenData.screen}
          navigation={navigation}
        />
      ))}
    </ScrollView>
  );
};

export default Home;
