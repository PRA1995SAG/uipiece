import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";
import GuruItem from "./GuruItem";
import Guru from "../models/guru";
import Colors from "../constants/color";

const GuruList = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const loadDummyData = async () => {
      let arrayOfGurus = [];
      const response = await fetch("https://randomuser.me/api/?results=100", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        Alert.alert("Error", "Something went wrong!", [{ text: "Ok" }]);
        return;
      }
      const responseData = await response.json();

      for (const result of responseData.results) {
        arrayOfGurus.push(
          new Guru(
            result.login.uuid,
            result.name.first + " " + result.name.last,
            result.dob.age,
            result.gender,
            result.picture.large
          )
        );
      }
      setData(arrayOfGurus);
    };
    loadDummyData();
  }, []);

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <GuruItem
          name={item.name}
          age={item.age}
          gender={item.gender}
          imageUrl={item.imageUrl}
        />
      )}
    />
  );
};
{
  /* <GuruItem name={item.name.first} /> */
}
export default GuruList;
