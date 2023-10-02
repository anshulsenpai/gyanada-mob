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
import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { BASE_API_URL } from "../consts/urls";

const ProfileScreen = ({ navigation }) => {
  const { state, dispatch } = useAuth();
  const { user } = state;
  // console.log(user);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigation.navigate("Home");
  };

  const handleBack = () => {
    navigation.goBack();
  };

  // console.log(`${BASE_API_URL}/uploads/${user?.photo}`)

  return (
    <View style={styles.container}>
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
        <Text style={styles.headerText}>My Profile</Text>
      </View>
      {/* Profile details container */}
      <View style={styles.profile}>
        <View style={styles.profilePhotoContainer}>
          <Image
            style={styles.profilePhoto}
            source={{ uri: `${BASE_API_URL}/uploads/${user?.photo}` }}
          />
        </View>
        {/* Basic Details */}
        <ScrollView style={{ marginVertical: 20 }}>
          <Text style={styles.title}>General Details</Text>
          <View style={styles.profileDetails}>
            <View style={styles.profileDataContainer}>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
              >
                <FontAwesome5 name="user-tie" size={20} />
                <Text style={styles.key}>Fullname</Text>
              </View>
              <Text style={{ textTransform: "capitalize", ...styles.value }}>
                {user?.fullname}
              </Text>
            </View>
            <View style={styles.profileDataContainer}>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
              >
                <MaterialIcons name="device-unknown" size={20} />
                <Text style={styles.key}>Role</Text>
              </View>
              <Text style={styles.value}>{user?.role}</Text>
            </View>
          </View>
          <View style={styles.profileDetails}>
            <View style={styles.profileDataContainer}>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
              >
                <Ionicons name="calendar" size={20} />
                <Text style={styles.key}>Date of Birth</Text>
              </View>
              <Text style={styles.value}>
                {user?.dateOfBirth.split("T")[0]}
              </Text>
            </View>
            <View style={styles.profileDataContainer}>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
              >
                <Ionicons name="phone-portrait" size={20} />
                <Text style={styles.key}>Active</Text>
              </View>
              <Text style={styles.value}>{user?.status ? "Active" : ""}</Text>
            </View>
          </View>

          {/* Contact details */}
          <Text style={styles.title}>Contact Details</Text>
          <View style={styles.profileDetails}>
            <View style={styles.profileDataContainer}>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
              >
                <Ionicons name="mail" size={20} />
                <Text style={styles.key}>Email</Text>
              </View>
              <Text style={styles.value}>{user?.email}</Text>
            </View>
            <View style={styles.profileDataContainer}>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
              >
                <Ionicons name="phone-portrait" size={20} />
                <Text style={styles.key}>Mobile No.</Text>
              </View>
              <Text style={styles.value}>{user?.mobile}</Text>
            </View>
          </View>
          <View style={styles.profileDetails}>
            <View style={styles.profileDataContainer}>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
              >
                <Ionicons name="location" size={20} />
                <Text style={styles.key}>Address</Text>
              </View>
              <Text style={styles.value}>{user?.address}</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={handleLogout}
            style={{
              padding: 12,
              backgroundColor: "#BB2525",
              borderRadius: 5,
              marginBottom: 20,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "#FFF",
                fontFamily: "poppins_semibold",
                textAlign: "center",
                marginTop: 3,
              }}
            >
              Log Out
            </Text>
            <MaterialIcons name="logout" size={20} color="#FFF" />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  profile: {
    flex: 1,
    margin: 15,
  },
  profilePhotoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    color: "#424242",
    fontFamily: "poppins_semibold",
    marginTop: 20,
  },
  profilePhoto: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "#ddd",
  },
  profileDetails: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  profileDataContainer: {
    flex: 1,
    marginBottom: 10,
    paddingVertical: 10,
  },
  key: {
    fontSize: 14,
    color: "#191825",
    fontFamily: "poppins_semibold",
  },
  value: {
    fontSize: 14,
    color: "#424242",
    fontFamily: "poppins_semibold",
  },
});

export default ProfileScreen;
