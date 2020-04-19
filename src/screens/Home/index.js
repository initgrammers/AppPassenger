import React, { useEffect, useState } from "react";
import Layout from "./Home.screen";
import firebase from "../../services/firebase";
import { useDispatch, useSelector } from "react-redux";
export const Home = () => {
  const [text, setText] = useState("");
  const { uid } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    firebase
      .firestore()
      .collection("passenger")
      .doc(uid)
      .onSnapshot((doc) => {
        dispatch({
          type: "SET_USER",
          payload: doc.data(),
        });
      });
  }, []);
  return <Layout text={text} />;
};
