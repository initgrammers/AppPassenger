import React from "react";
import Layout from "./Login.screen";
import { useNavigation } from "@react-navigation/native";
import { signInWithGoogleAsync } from "../../services/auth";
import firebase from "../../services/firebase";
import { useDispatch } from "react-redux";
import { AsyncStorage } from "react-native";

export const Login = () => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  const login = async () => {
    const result = await signInWithGoogleAsync();
    if (result.type === "success") {
      const credential = firebase.auth.GoogleAuthProvider.credential(
        result.idToken,
        result.accessToken
      );
      const { user } = await firebase.auth().signInWithCredential(credential);
      const { uid, displayName, email, photoURL } = user;

      try {
        await AsyncStorage.setItem("uid", uid);
        dispatch({
          type: "SET_USER",
          payload: { uid, name: displayName, email, photoURL },
        });
        navigate("HomeTab");
      } catch (error) {
        alert("Ocurrio un error intente nuevamente =(");
      }
    }
    if (result.cancelled) alert("Login cancelado");
    if (result.error) alert(result.message);
  };
  return <Layout onPressLogin={login} />;
};
