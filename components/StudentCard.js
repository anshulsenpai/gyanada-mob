import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const StudentCard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://static.dc.com/dc/files/default_images/Char_Profile_Batman_20190116_5c3fc4b40faec2.47318964.jpg",
        }}
        style={styles.studentImage}
      />
      <Text>Name</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "48%",
    height: 180,
    borderColor: "#000",
    padding: 15,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 10,
  },
  studentImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default StudentCard;
