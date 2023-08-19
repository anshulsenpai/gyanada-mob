import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { BASE_IP } from "../App";
import { useAuth } from "../authContext";
import axios from "axios";

const HomeScreen = ({ navigation }) => {
  const { state, dispatch } = useAuth();
  const { token, user } = state;

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(`${BASE_IP}:8082/api/web/my-profile`, {
          headers: {
            Authorization: token,
          },
        });

        const {
          _id,
          fullname,
          email,
          mobile,
          dateOfBirth,
          photo,
          address,
          status,
          role,
        } = res.data.data;

        // Dispatch the "SAVE_USER" action after setting the user details
        dispatch({
          type: "SAVE_USER",
          payload: {
            _id,
            fullname,
            email,
            mobile,
            dateOfBirth,
            photo,
            address,
            status,
            role,
          },
        });
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  const handleProfile = () => {
    navigation.navigate("Profile");
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000" />
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Hii, {user?.fullname.split(" ")[0]}
        </Text>
        <TouchableOpacity onPress={handleProfile} style={styles.profileBtn}>
          <Image
            style={styles.profileImage}
            source={{ uri: `http://10.0.2.2:8082/uploads/${user?.photo}` }}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: "#FFFFFF",
  },
  header: {
    height: 75,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#FFF",
  },
  headerText: {
    fontSize: 22,
    fontFamily: "poppins_semibold",
    color: "#000",
    textTransform: "capitalize",
    textShadowColor: "rgba(0, 0, 0, 0.10)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 20,
  },
  scrollView: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 14,
    color: "#080202",
    marginBottom: 10,
  },
  addStudentCard: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 20,
  },
  recentlyJoined: {
    flex: 1,
    marginVertical: 15,
  },
  recentStudents: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  profileBtn: {
    borderRadius: 20,
    overflow: "hidden",
  },
  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 20,
  },
});

export default HomeScreen;
