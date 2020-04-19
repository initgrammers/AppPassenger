import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
const Layout = (props) => {
  const data = [
    {
      id: 0,
      nameSite: "Río Coca - Playon de la Marín",
      price: 0.37,
      date: "10/04/2020 7:25am",
      normalRate: true,
      specialRate: true,
    },
    {
      id: 1,
      nameSite: "Playon de la Marín - Manuela Cañizares",
      price: 0.25,
      date: "10/04/2020 10:25am",
      normalRate: true,
      specialRate: false,
    },
    {
      id: 2,
      nameSite: "De las universidades - Hospital Eugenio Espejo",
      price: 0.25,
      date: "11/04/2020 10:25am",
      normalRate: true,
      specialRate: false,
    },
    {
      id: 3,
      nameSite: "Playon de la Marín - Manuela Cañizares",
      price: 0.75,
      date: "10/04/2020 10:25am",
      normalRate: true,
      specialRate: false,
    },
    {
      id: 4,
      nameSite: "De las universidades - Hospital Eugenio Espejo",
      price: 0.25,
      date: "11/04/2020 10:25am",
      normalRate: true,
      specialRate: false,
    },
    {
      id: 5,
      nameSite: "Playon de la Marín - Manuela Cañizares",
      price: 1.0,
      date: "10/04/2020 10:25am",
      normalRate: true,
      specialRate: false,
    },
    {
      id: 6,
      nameSite: "De las universidades - Hospital Eugenio Espejo",
      price: 1.25,
      date: "11/04/2020 10:25am",
      normalRate: true,
      specialRate: false,
    },
  ];
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {data.map((site) => (
          <CardInfo site={site} />
        ))}
      </View>
    </ScrollView>
  );
};

const CardInfo = (props) => {
  const { nameSite, price, date, normalRate, specialRate } = props.site;
  return (
    <View style={styles.cardContainer}>
      <View style={styles.titleView}>
        <Text
          style={{
            fontSize: 15,
            lineHeight: 19,
            margin: 10,
            fontWeight: "600",
            flex: 1,
          }}
        >
          {nameSite}
        </Text>
        <Text
          style={{
            width: "20%",
            color: "#BEC2CE",
            fontWeight: "600",
          }}
        >
          $ {price}
        </Text>
      </View>
      <View style={styles.infoView}>
        <View style={{ margin: 15 }}>
          <Text style={{ fontSize: 12, lineHeight: 16 }}>{date}</Text>
          <Text style={{ fontSize: 12, lineHeight: 16 }}>
            {normalRate && "Tarifa Adulto"}
            {normalRate && specialRate && "/"}
            {specialRate && "Tarifa Especial"}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            position: "absolute",
            flexDirection: "row",
            justifyContent: "flex-end",
            bottom: 0,
            right: 15,
          }}
        >
          <Text style={{ color: "#FF8900" }}>Ver detalles</Text>
          <MaterialIcons color="#FF8900" name="navigate-next" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Layout;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: "#fff",
  },
  content: {
    marginTop: 32,
    width: "100%",
  },
  cardContainer: {
    margin: 8,
    elevation: 4,
    borderRadius: 15,
  },
  titleView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f2f2f2",
  },
  infoView: {
    position: "relative",
    backgroundColor: "#fff",
  },
});
