import React from "react";
import Layout from "./Login.screen";
import { useNavigation } from "@react-navigation/native";
import { signInWithGoogleAsync } from "../../services/auth";
import firebase from "../../services/firebase";
import { useDispatch } from "react-redux";

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
      dispatch({
        type: "SET_USER",
        payload: { uid, name: displayName, email, photoURL },
      });
      navigate("HomeTab");
    }
    if (result.cancelled) alert("Login cancelado");
    if (result.error) alert(result.message);
  };
  return <Layout onPressLogin={login} />;
};
