import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useAuth } from "../authContext";

const ProfileScreen = ({ navigation }) => {
  const { dispatch } = useAuth();
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
      <TouchableOpacity style={styles.buttonContainer} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15
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
