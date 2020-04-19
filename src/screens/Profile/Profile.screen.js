import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
const Layout = (props) => {
  const { photoURL } = useSelector((state) => state);
  return (
    <View style={styles.container}>
      <Image source={{ uri: photoURL }} />
      <Text style={styles.title}>Profile</Text>
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#242A37",
    fontSize: 32,
    fontWeight: "bold",
  },
  logo: {
    width: 290,
    height: 290,
    resizeMode: "stretch",
  },
  buttonContainer: {
    width: 300,
    height: 44,
    backgroundColor: "#fafafa",
    justifyContent: "space-evenly",
    alignItems: "center",
    elevation: 4,
    borderRadius: 8,
    flexDirection: "row",
  },
  buttonText: {
    color: "#FF8900",
    fontSize: 16,
    fontWeight: "300",
  },
});
