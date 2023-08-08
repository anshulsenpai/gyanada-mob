import React from "react";
import { View, StyleSheet } from "react-native";
import WebView from "react-native-webview";

const HomeScreen = () => {
  return <WebView source={{ uri: "http://192.168.160.134:5173/native-form" }} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});

export default HomeScreen;
