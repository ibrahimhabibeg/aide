import { ScrollView } from "react-native";
import ScreenCard from "./ScreenCard";
import { ThemeContext } from "../Providers/Theme";
import { useContext } from "react";
import { screenData as EssayScreenData } from "../Essay";
import { screenData as EmailScreenData } from "../Email";
import { screenData as ExplainScreenData } from "../Explain";
import { screenData as PoemScreenData } from "../Poem";
import { screenData as WordAnalysisScreenData } from "../WordAnalysis";
import withMadeByFooter from "../containers/MadeByFooter";

const ScreensData = [EmailScreenData, EssayScreenData, ExplainScreenData, PoemScreenData, WordAnalysisScreenData];

const Home = ({ navigation }) => {
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

export default withMadeByFooter(Home);
