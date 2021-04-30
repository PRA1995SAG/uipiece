import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import Colors from "../constants/color";
import { Platform } from "react-native";

const Stack = createStackNavigator();

function RootStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primary : "",
        },
        headerTitleStyle: { fontFamily: "quicksand-bold" },
      }}
      initialRouteName="Home"
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home Screen" }}
      />
    </Stack.Navigator>
  );
}

export default RootStackNavigator;
