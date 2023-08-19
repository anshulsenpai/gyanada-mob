import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import WebView from "react-native-webview";
import Icon from "react-native-vector-icons/Ionicons";
import { useAuth } from "../authContext";

const StudentForm = ({ navigation }) => {
  const { state } = useAuth();
  const { token } = state;

  const [isLoading, setIsLoading] = useState(true);

  const handleBackButton = () => {
    navigation.goBack();
  };

  const handleWebViewLoad = () => {
    setIsLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={styles.header.backgroundColor}
        barStyle="light-content"
      />
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackButton} style={styles.backButton}>
          <Icon name="arrow-back" size={25} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add Student</Text>
      </View>

      <WebView
        source={{
          uri: `http://192.168.160.134:5173/native-form/?token=${token}`,
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 0,
  },
  header: {
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    backgroundColor: "#0A0944",
  },
  headerTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff", // Set text color to match status bar content
  },
  backButton: {
    padding: 10,
    borderRadius: 5,
    marginLeft: 5,
  },
  webView: {
    flex: 1,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default StudentForm;
