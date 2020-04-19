import React, { useEffect } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { AsyncStorage } from "react-native";

export default () => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  useEffect(async () => {
    try {
      const uid = await AsyncStorage.getItem("uid");
      dispatch({ type: "SET_USER", payload: { uid: uid } });
      if (uid !== null) {
        navigate("HomeTab");
      } else {
        navigate("Login");
      }
    } catch (error) {
      alert("ocurrio un error, intente nuevamente :(");
    }
  }, []);

  return <View></View>;
};
