import { useContext, useState } from "react";
import {
  Pressable,
  Text,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { ThemeContext } from "../Providers/Theme";
import axios from "axios";
import { API_KEY } from "@env";
import withMadeByFooter from "../containers/MadeByFooter";
import CopyToClipboardButton from "../components/CopyToClipboardButton";

const Poem = () => {
  const { theme } = useContext(ThemeContext);
  const [topic, setTopic] = useState("");
  const [poem, setPoem] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTopicChange = (newTopic) => setTopic(newTopic);

  const submitTopic = () => {
    setLoading(true);
    axios
      .post(
        `https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText?key=${API_KEY}`,
        {
          prompt: {
            text: `Write a poem about ${topic}`,
          },
          temperature: 0.7,
          top_k: 40,
          top_p: 0.95,
          candidate_count: 1,
          max_output_tokens: 1024,
          stop_sequences: [],
        }
      )
      .then((res) => {
        setPoem(res.data.candidates[0].output);
        setLoading(false);
      })
      .catch((error) => {
        setPoem(
          "An error occured while connecting to server. Check your internet connection and retry"
        );
        setLoading(false);
      });
  };

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
          Create Poem
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
            {poem}
          </Text>
          {poem && (
            <CopyToClipboardButton
              text={poem}
              disabled={loading || !topic}
              title={"Copy Poem to Clipboard"}
              onCopiedTitle={"Poem Copied"}
            />
          )}
        </>
      )}
    </ScrollView>
  );
};

export default withMadeByFooter(Poem);

export const screenData = {
  title: "Poem Writer",
  description: "Didn't you know that Aide is a poet?",
  screen: "Poem",
};
