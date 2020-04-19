import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
const logo = "../../../assets/logo.png";
const Layout = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <Image source={require(logo)} style={styles.logo} />
      <TouchableOpacity style={styles.buttonContainer}>
        <Ionicons name="logo-google" color="#FF8900" size={28} />
        <Text style={styles.buttonText}>Iniciar sesion con Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFD428",
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
