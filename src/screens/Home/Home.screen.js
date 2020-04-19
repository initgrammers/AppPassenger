import React, { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import firebase from "../../services/firebase";
import { useDispatch, useSelector } from "react-redux";
const Layout = (props) => {
  const { onPressLogin } = props;
  const { uid } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    firebase
      .firestore()
      .collection("passenger")
      .doc(uid)
      .onSnapshot((doc) => {
        dispatch({
          type: "SET_USER",
          payload: doc.data(),
        });
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
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
