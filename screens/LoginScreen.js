import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ActivityIndicator,
} from "react-native";
import icon from "../assets/logo.png"; // Import your company logo image here
import { useAuth } from "../authContext";
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkRequired, setCheckRequired] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Add isLoading state

  const { dispatch } = useAuth();
  const handleLogin = async () => {
    try {
      if (!email || !password) {
        console.log("Login details not provided");
        setCheckRequired(true);
      } else {
        setIsLoading(true);
        const res = await axios.post("http://10.0.2.2:8082/api/web/login", {
          email,
          password,
        });

        if (res.data.success) {
          const { token } = res.data.data;
          dispatch({ type: "LOGIN", payload: token });
          // console.log(res);
          navigation.navigate("Home");
        } else {
          console.log("something went wrong");
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    navigation.navigate("Forgot Password");
  };

  useEffect(() => {
    setCheckRequired(false);
  }, [email, password]);

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
        style={{ ...styles.input, borderColor: checkRequired ? "red" : "#ccc" }}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{ ...styles.input, borderColor: checkRequired ? "red" : "#ccc" }}
        autoCapitalize="none"
      />
      {checkRequired && (
        <Text style={styles.errorText}>All the fields are required!</Text>
      )}
      <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
        {isLoading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.buttonText}>Login as Agent</Text>
        )}
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
    padding: 15,
    backgroundColor: "#fff",
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 50
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
    marginBottom: 10,
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
