import { Text, View } from "react-native";
import { useContext } from "react";
import { useNetInfo } from "@react-native-community/netinfo";
import { ThemeContext } from "../Providers/Theme";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faWifi } from "@fortawesome/free-solid-svg-icons";

const NoNetworkPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <View
      style={{
        backgroundColor: theme.colors.background.default,
        height: "100%",
        justifyContent: "center",
      }}
    >
      <FontAwesomeIcon
        icon={faWifi}
        style={{ color: theme.colors.text.primary, alignSelf: "center" }}
        size={theme.spacing[10]}
      />
      <View
        style={{
          width: "80%",
          alignSelf: "center",
          marginTop: theme.spacing[5],
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: theme.colors.text.primary,
            fontSize: theme.spacing[5],
          }}
        >
          Network connection is required to use the app
        </Text>
      </View>
    </View>
  );
};

const NetworkRequired = ({ children }) => {
  const netInfo = useNetInfo();
  if (netInfo.isConnected) return children;
  else return <NoNetworkPage />;
};

export default NetworkRequired;
