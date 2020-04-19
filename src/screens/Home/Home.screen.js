import React from "react";
import { Ionicons } from "@expo/vector-icons";
import QRCode from "react-native-qrcode-generator";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const Layout = (props) => {
  const { name = "usuario", text } = props;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{`Bienvenido ${name}`}</Text>
        <Text style={styles.text1}>
          Utiliza este código para pagar tu pasaje
        </Text>
        {/* <QRCode value={text} size={200} bgColor="black" fgColor="white" /> */}
      </View>
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    marginTop: 32,
    width: "100%",
    padding: 8,
  },
  title: {
    color: "#242A37",
    fontSize: 32,
    fontWeight: "bold",
  },
  text1: {
    color: "#242A37",
    fontSize: 16,
    fontWeight: "500",
  },
});
