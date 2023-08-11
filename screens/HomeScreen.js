import { View, StyleSheet, Text } from "react-native";
import WebView from "react-native-webview";
import { useAuth } from "../authContext";

const HomeScreen = () => {
  const { state } = useAuth();
  const { token } = state;
  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: `http://192.168.160.134:5173/native-form/?token=${token}`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
});

export default HomeScreen;
