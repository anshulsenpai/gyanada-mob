import React, { useState } from "react";
import WebView from "react-native-webview";
import { useAuth } from "../authContext";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// import { BASE_IP } from "../App";
import { FORM_URL } from "../consts/urls";

const StudentForm = ({ navigation }) => {
  const { state } = useAuth();
  const { token } = state;

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={handleBack}
          style={{ marginRight: 15, marginBottom: 3 }}
        >
          <FontAwesome5
            name="arrow-left"
            size={22}
            color={styles.headerText.color}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Add Student</Text>
      </View>
      <WebView
        source={{
          uri: `${FORM_URL}/native-form/?token=${token}`,
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    height: 75,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 15,
    backgroundColor: "#FFF",
  },
  headerText: {
    fontSize: 22,
    fontFamily: "poppins_semibold",
    color: "#191825",
    textTransform: "capitalize",
    textShadowColor: "rgba(0, 0, 0, 0.10)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 20,
  },
});

export default StudentForm;
