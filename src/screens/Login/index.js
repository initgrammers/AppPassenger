import React from "react";
import Layout from "./Login.screen";
import { useNavigation } from "@react-navigation/native";
import { signInWithGoogleAsync } from "../../services/auth";
import firebase from "../../services/firebase";

export const Login = () => {
  const { navigate } = useNavigation();

  const login = async () => {
    const result = await signInWithGoogleAsync();
    if (result.type === "success") {
      const credential = firebase.auth.GoogleAuthProvider.credential(
        result.idToken,
        result.accessToken
      );
      const data = await firebase.auth().signInWithCredential(credential);
      console.log(data);
      navigate("HomeTab");
      alert("success");
    }
    if (result.cancelled) alert("Login cancelado");
    if (result.error) alert(result.message);
  };
  const navigationScreen = () => {
    navigate("HomeTab");
  };
  return <Layout onPressLogin={() => navigationScreen()} />;
};
