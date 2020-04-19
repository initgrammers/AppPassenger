import React, { Component, useEffect } from "react";
import Layout from "./History.screen";
import firebase from "../../services/firebase";
import { useSelector } from "react-redux";

export const History = () => {
  const { uid } = useSelector((state) => state);

  useEffect(async () => {
    try {
      const data = await firebase
        .firestore()
        .collection("passenger")
        .doc(uid)
        .doc("tickets")
        .get();
      console.log(data);
    } catch (error) {
      log(error);
    }
  }, []);

  return <Layout />;
};
