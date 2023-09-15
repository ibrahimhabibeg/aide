import { useContext, useEffect, useState } from "react";
import { Pressable, Text } from "react-native";
import { ThemeContext } from "../Providers/Theme";
import * as Clipboard from "expo-clipboard";

const CopyToClipboardButton = ({ text, disabled, title, onCopiedTitle }) => {
  const { theme } = useContext(ThemeContext);
  const [isTextCopied, setIsTextCopied] = useState(false);

  useEffect(() => {
    setIsTextCopied(false);
  }, [text]);

  const copyToClipboard = async () => {
    setIsTextCopied(true);
    await Clipboard.setStringAsync(text);
  };

  return (
    <Pressable
      style={{
        backgroundColor: disabled
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
      disabled={disabled}
    >
      <Text
        style={{
          color: disabled
            ? theme.colors.disabled.text
            : theme.colors.primary.contrastText,
          textAlign: "center",
          fontSize: theme.spacing[3.5],
        }}
      >
        {isTextCopied ? onCopiedTitle : title}
      </Text>
    </Pressable>
  );
};

export default CopyToClipboardButton;
