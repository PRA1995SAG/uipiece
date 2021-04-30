import React, { useLayoutEffect, useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import Header from "../components/Header";
import AlertCard from "../components/AlertCard";
import Guru from "../models/guru";
import GuruItem from "../components/GuruItem";

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState();
  const [isRefreshing, setIsRefreshing] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Header />,
    });
  }, [navigation]);

  const loadDummyData = async () => {
    setIsRefreshing(true);
    let arrayOfGurus = [];
    const response = await fetch("https://randomuser.me/api/?results=1", {
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
    setIsRefreshing(false);
  };
  useEffect(() => {
    loadDummyData();
  }, []);

  return (
    <View style={styles.screen}>
      <AlertCard message="This app is made for demo purpose only. Some functionality may not work !" />
      {/* <GuruList /> */}
      <FlatList
        onRefresh={loadDummyData}
        refreshing={isRefreshing}
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
    </View>
  );
};
const styles = StyleSheet.create({
  screen: { flex: 1, alignItems: "center" },
});
export default HomeScreen;
