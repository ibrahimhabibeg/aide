import { useContext, useState } from "react";
import {
  Pressable,
  Text,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { ThemeContext } from "../Providers/Theme";
import withMadeByFooter from "../containers/MadeByFooter";
import CopyToClipboardButton from "../components/CopyToClipboardButton";
import usePalmQuery from "../hooks/usePalmQuery";

const WordAnalysis = () => {
  const { theme } = useContext(ThemeContext);
  const [topic, setTopic] = useState("");
  const { data, loading, fetchData } = usePalmQuery(
    (input) =>
      `For the following word, define it, write two synonyms for it, write 2 antonyms for it, write 
      its root, its part of speech,  and put it in two sentences.\ninput: ${input}\noutput`
  );

  const handleTopicChange = (newTopic) => setTopic(newTopic);

  const submitTopic = () => fetchData(topic);

  return (
    <ScrollView
      style={{
        backgroundColor: theme.colors.background.default,
        paddingVertical: theme.spacing[10],
      }}
    >
      <TextInput
        value={topic}
        onChangeText={handleTopicChange}
        placeholder="Topic"
        placeholderTextColor={theme.colors.text.hint}
        multiline={true}
        style={{
          marginTop: theme.spacing[12],
          width: "80%",
          color: theme.colors.text.primary,
          alignSelf: "center",
          textAlign: "center",
          fontSize: theme.spacing[5],
        }}
      />
      <Pressable
        style={{
          backgroundColor:
            loading || !topic
              ? theme.colors.disabled.background
              : theme.colors.primary.main,
          width: "80%",
          height: theme.spacing[12],
          borderRadius: theme.spacing[6],
          alignSelf: "center",
          justifyContent: "center",
          marginVertical: theme.spacing[10],
        }}
        onPress={submitTopic}
        disabled={loading || !topic}
      >
        <Text
          style={{
            color:
              loading || !topic
                ? theme.colors.disabled.text
                : theme.colors.primary.contrastText,
            textAlign: "center",
            fontSize: theme.spacing[3.5],
          }}
        >
          Analyze Word
        </Text>
      </Pressable>
      {loading ? (
        <ActivityIndicator size={"large"} color={theme.colors.text.primary} />
      ) : (
        <>
          <Text
            style={{
              color: theme.colors.text.primary,
              textAlign: "center",
              fontSize: theme.spacing[4],
              width: "80%",
              alignSelf: "center",
            }}
            selectable={true}
            selectionColor={theme.colors.primary.main}
          >
            {data}
          </Text>
          {data && (
            <CopyToClipboardButton
              text={data}
              disabled={loading || !topic}
              title={"Copy Analysis to Clipboard"}
              onCopiedTitle={"Analysis Copied"}
            />
          )}
        </>
      )}
    </ScrollView>
  );
};

export default withMadeByFooter(WordAnalysis);

export const screenData = {
  title: "Word Analyzer",
  description: "Definition, Synonyms, Antonyms, Root, and Sentences",
  screen: "WordAnalysis",
};
