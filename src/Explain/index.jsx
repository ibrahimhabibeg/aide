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
import * as Clipboard from "expo-clipboard";
import { API_KEY } from "@env";
import withMadeByFooter from "../containers/MadeByFooter";

const Explain = () => {
  const { theme } = useContext(ThemeContext);
  const [topic, setTopic] = useState("");
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(false);
  const [isExplanationCopied, setIsExplanationCopied] = useState(false);

  const handleTopicChange = (newTopic) => setTopic(newTopic);

  const copyToClipboard = async () => {
    setIsExplanationCopied(true);
    await Clipboard.setStringAsync(explanation);
  };

  const submitTopic = () => {
    setLoading(true);
    setIsExplanationCopied(false);
    axios
      .post(
        `https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText?key=${API_KEY}`,
        {
          prompt: {
            text: `Explain ${topic} as i am nine`,
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
        setExplanation(res.data.candidates[0].output);
        setLoading(false);
      })
      .catch((error) => {
        setExplanation(
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
          Explain It
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
            {explanation}
          </Text>
          {explanation && (
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
              onPress={copyToClipboard}
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
                {isExplanationCopied ? "Explanation Copied" : "Copy Explanation to Clipboard"}
              </Text>
            </Pressable>
          )}
        </>
      )}
    </ScrollView>
  );
};

export default withMadeByFooter(Explain);

export const screenData = {
  title: "Explainer",
  description: "Write the topic and Aide will explain it.",
  screen: "Explain",
};
