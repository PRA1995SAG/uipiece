import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import Card from "../components/Card";
import { useFocusEffect } from "@react-navigation/native";

const window = Dimensions.get("window");

const DetailScreen = ({ navigation }) => {
  const [dimensions, setDimensions] = useState(window);

  const changeHandler = ({ window }) => {
    setDimensions(window);
  };

  useEffect(() => {
    Dimensions.addEventListener("change", changeHandler);
    return () => {
      Dimensions.removeEventListener("change", changeHandler);
    };
  });

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/faceImage.jpg")}
          style={styles.image}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "black",
          height: 40,
        }}
      >
        <View>
          <Text>Lorem ipsum</Text>
        </View>
        <View>
          <Text>Lorem ipsum</Text>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  imageContainer: { height: 300, width: "100%" },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default DetailScreen;
