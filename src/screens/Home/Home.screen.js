import React from "react";
import QRCode from "react-native-qrcode-generator";
import { View, Text, Image, ActivityIndicator, StyleSheet } from "react-native";

const Layout = (props) => {
  const { name = "usuario", card, photoURL } = props;
  const firstName = name.split(" ")[0];
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.title}>{`Bienvenido ${firstName}`}</Text>
          <Image
            style={{ width: 40, height: 40, borderRadius: 20 }}
            source={
              photoURL
                ? { uri: photoURL }
                : require("../../../assets/defaulUser.png")
            }
          />
        </View>
        <Text style={styles.balance}>
          {card.balance ? `Tu saldo es de ` : `Cargando...`}
        </Text>
        {card.balance && (
          <Text
            style={{
              margin: 16,
              color: "#FF8900",
              fontSize: 64,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            ${card.balance}
          </Text>
        )}
        <Text style={styles.text1}>
          Utiliza este código para pagar tu pasaje
        </Text>
        <View style={styles.qr}>
          {card.id != null ? (
            <QRCode
              value={card.id}
              size={300}
              bgColor="black"
              fgColor="white"
            />
          ) : (
            <ActivityIndicator size="large" color="#FF8900" />
          )}
        </View>
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
    flex: 1,
    marginTop: 32,
    width: "100%",
    padding: 8,
  },
  title: {
    color: "#242A37",
    fontSize: 28,
    fontWeight: "bold",
  },
  balance: {
    color: "#242A37",
    fontSize: 24,
    fontWeight: "800",
  },
  text1: {
    color: "#242A37",
    marginTop: 16,
    marginBottom: 16,
    fontSize: 16,
    fontWeight: "500",
  },
  qr: {
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
