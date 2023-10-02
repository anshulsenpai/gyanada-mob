import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useAuth } from "../authContext";
import { BASE_API_URL } from "../consts/urls";

const StudentListItem = ({ item }) => {
  const { state, dispatch } = useAuth();
  const { token } = state;
  const navigation = useNavigation();
  const [base64data, setBase64Data] = useState();
  const [type, setType] = useState();

  const handleStudentClick = (item) => {
    navigation.navigate("StudentDetailPage", { item });
  };
  // console.log(item._id)
  useEffect(() => {
    const getStudentImage = async () => {
      try {
        const response = await axios.get(
          `${BASE_API_URL}/api/web/user/student/image/${item._id}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        const { data } = response.data;
        setBase64Data(data);
        // console.log(data)
      } catch (error) {
        console.log(error);
      }
    };
    getStudentImage();
  }, []);

  const dataUri = `data:${base64data?.type};base64,${base64data?.data}`;
  // console.log(dataUri)

  return (
    <TouchableOpacity
      onPress={() => handleStudentClick(item)}
      key={item?._id}
      style={[
        styles.studentListItem,
        Platform.OS === "android" ? styles.androidShadow : styles.iosShadow,
      ]}
    >
      {/* use base64 image here */}
      <Image style={styles.photo} source={{ uri: dataUri }} />

      <View style={styles.studentDetails}>
        <Text style={styles.studentName}>
          {`${item?.firstname} ${item?.lastname}`}
        </Text>
        <View style={styles.detailsRow}>
          <Text style={styles.otherDetails}>{item?.email}</Text>
          <Text style={styles.otherDetails}>{item?.phone}</Text>
        </View>
        <View style={styles.detailsRow}>
          <Text style={styles.otherDetails}>{item?.studentClass}</Text>
          <Text style={styles.otherDetails}>{item?.city}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  studentListItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    padding: 15,
    borderRadius: 20,
    backgroundColor: "white",
    height: 110,
    // elevation: 2, // Add shadow for Android
    shadowColor: "#000", // Add shadow properties for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  photo: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#ddd",
  },
  studentDetails: {
    flex: 1,
    marginLeft: 15,
  },
  studentName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#1A163A",
  },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "start",
    marginBottom: 5,
    gap: 15,
  },
  otherDetails: {
    fontSize: 14,
    color: "#727d89",
  },
});

export default StudentListItem;
