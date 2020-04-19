import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import moment from "moment";
const Layout = (props) => {
  const { data } = props;
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
  const {
    routeName = "Terminal Quitumbe - Recreo",
    price,
    date,
    normalRate,
    specialRate,
  } = props.site;
  const date_hour = moment(date.seconds * 1000).format("L LT");
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
          {routeName}
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
          <Text style={{ fontSize: 12, lineHeight: 16 }}>{date_hour}</Text>
          <Text style={{ fontSize: 12, lineHeight: 16 }}>
            {normalRate > 0 && "Tarifa Adulto"}
            {normalRate > 0 && specialRate > 0 && "/"}
            {specialRate > 0 && "Tarifa Especial"}
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
