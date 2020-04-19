import React, { useState, useEffect } from "react";
import Layout from "./History.screen";
import firebase from "../../services/firebase";
import { useSelector } from "react-redux";

export const History = () => {
  const { uid } = useSelector((state) => state);
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      let dataArray = [];
      const _data = await firebase
        .firestore()
        .collection("passenger")
        .doc(uid)
        .collection("tickets")
        .get();
      _data.forEach(function (doc) {
        dataArray.push(doc.data());
      });
      setData(dataArray);
    } catch (error) {
      console.log("fallo", error);
    }
  };
  useEffect(async () => {
    getData();
  }, []);

  return <Layout data={data} />;
};
