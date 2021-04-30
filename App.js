// import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import RootStackNavigator from "./app/navigation/RootStackNavigator";
import { Asset } from "expo-asset";

import Header from "./app/components/Header";

const fetchFonts = async () => {
  await Font.loadAsync({
    "quicksand-bold": require("./assets/fonts/static/Quicksand-Bold.ttf"),
    "quicksand-light": require("./assets/fonts/static/Quicksand-Light.ttf"),
    "quicksand-medium": require("./assets/fonts/static/Quicksand-Medium.ttf"),
    "quicksand-regular": require("./assets/fonts/static/Quicksand-Regular.ttf"),
    "quicksand-semibold": require("./assets/fonts/static/Quicksand-SemiBold.ttf"),
  });
  await Asset.loadAsync(require("./assets/faceImage.jpg"));
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
        onError={console.log("error while loading font.")}
      />
    );
  }

  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontFamily: "quicksand-medium",
    fontSize: 20,
  },
});
