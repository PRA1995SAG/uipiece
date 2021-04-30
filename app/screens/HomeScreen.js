import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "../components/Header";
import AlertCard from "../components/AlertCard";
import GuruList from "../components/GuruList";

const HomeScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Header />,
    });
  }, [navigation]);
  return (
    <View style={styles.screen}>
      <AlertCard message="This app is made for demo purpose only. Some functionality may not work !" />
      <GuruList />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: { flex: 1, alignItems: "center" },
});
export default HomeScreen;
