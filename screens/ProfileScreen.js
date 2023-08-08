import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useAuth } from "../authContext";

const ProfileScreen = ({ navigation }) => {
  const { dispatch } = useAuth();
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileImageContainer}>
        <Image
          source={require("../assets/icon.png")} // Replace with actual image source
          style={styles.profileImage}
        />
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.infoTextTitle}>Email</Text>
        <Text style={styles.infoText}>john.doe@example.com</Text>
        <Text style={styles.infoTextTitle}>Phone</Text>
        <Text style={styles.infoText}>+123 456 7890</Text>
        <Text style={styles.infoTextTitle}>Role</Text>
        <Text style={styles.infoText}>Agent</Text>
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    alignItems: "center",
    justifyContent: "space-between"
  },
  profileImageContainer: {
    alignItems: "center",
    marginTop: 20,
    borderRadius: 75,
    overflow: "hidden",
    marginBottom: 10,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  profileInfo: {
    flex: 2,
    width: "100%",
    marginTop: 20,
    alignItems: "flex-start",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  infoTextTitle: {
    margin: 5,
    fontWeight: "500",
  },
  infoText: {
    width: "100%",
    fontSize: 16,
    marginBottom: 5,
    color: "#525252",
    padding: 15,
    borderColor: "#ddd",
    borderRadius: 10,
    borderWidth: 1
  },
  buttonContainer: {
    backgroundColor: "#16B596",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    marginVertical: 20,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
