import React from "react";
import { View, Button } from "react-native";
import { signInWithGoogleAsync } from "../services/auth";
import firebase from "../services/firebase";

export default () => {
  const login = async () => {
    const result = await signInWithGoogleAsync();
    if (result.type === "success") {
      const credential = firebase.auth.GoogleAuthProvider.credential(
        result.idToken,
        result.accessToken
      );
      const data = await firebase.auth().signInWithCredential(credential);
      alert("success");
    }
    if (result.cancelled) alert("Login cancelado");
    if (result.error) alert(result.message);
  };
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button title="Login" onPress={login} />
    </View>
  );
};
