import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useAuth } from "../authContext";

const ProfileScreen = ({ navigation }) => {
  const { state, dispatch } = useAuth();
  const { user } = state;

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileImageContainer}>
        <Image
          source={{ uri: `http://10.0.2.2:8082/uploads/${user?.photo}` }} // Replace with actual image source
          style={styles.profileImage}
        />
      </View>
      <ScrollView style={styles.scrollView}>
        {/* this must be scrollabel */}
        <Text style={styles.name}>{user?.fullname}</Text>
        <Text style={styles.infoTextTitle}>Email</Text>
        <Text style={styles.infoText}>{user?.email}</Text>
        <Text style={styles.infoTextTitle}>Phone</Text>
        <Text style={styles.infoText}>{user?.mobile}</Text>
        <Text style={styles.infoTextTitle}>Address</Text>
        <Text style={styles.infoText}>{user?.address}</Text>
        <Text style={styles.infoTextTitle}>Role</Text>
        <Text style={styles.infoText}>{user?.role}</Text>
      </ScrollView>
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
    justifyContent: "space-between",
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
    borderWidth: 1,
  },
  buttonContainer: {
    backgroundColor: "#BB2525",
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
  scrollView: {
    flex: 1,
    width: "100%",
  },
});

export default ProfileScreen;
