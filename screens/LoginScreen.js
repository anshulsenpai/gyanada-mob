import axios from "axios";
import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import icon from "../assets/logo.png"; // Import your company logo image here

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    console.log("Clicked Login button");
    try {
      if (!email || !password) {
        console.log("Login details not provided");
      } else {
        const res = await axios.post("http://10.0.2.2:8082/api/web/login", {
          email,
          password,
        });
        console.log(res);
        navigation.navigate("Home");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleForgotPassword = () => {
    navigation.navigate("Forgot Password");
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={icon} style={styles.logo} />
      </View>
      <Text style={styles.titleText}>
        Welcome to Gyanada Institutes, Please enter your login details
      </Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        autoCapitalize="none"
      />
      {(!email || !password) && <Text style={styles.errorText}>All the fields are required!</Text>}
      <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login as Agent</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPasswordLink}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  logoContainer: {
    alignItems: "center",
  },
  titleText: {
    width: "80%",
    fontSize: 16,
    fontWeight: "400",
    marginBottom: 30,
    color: "#727272",
    textAlign: "center",
  },
  errorText: {
    color: "red",
    marginBottom: 10
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  input: {
    width: "100%",
    marginBottom: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
  },
  buttonContainer: {
    backgroundColor: "#16B596",
    width: "100%",
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  forgotPasswordLink: {
    marginTop: 20,
    color: "#0A0944",
    fontSize: 16,
    fontWeight: "500",
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
