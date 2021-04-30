import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import Colors from "../constants/color";
import DefaultText from "./DefaultText";

const GuruItem = (props) => {
  let TouchCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchCmp = TouchableNativeFeedback;
  }

  return (
    <TouchCmp useForeground>
      <View style={styles.item}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={styles.imageContainer}>
            <Image source={{ uri: props.imageUrl }} style={styles.image} />
          </View>
          <View style={styles.textContainer}>
            <DefaultText
              text={props.name}
              style={{
                fontWeight: "bold",
                fontSize: 22,
                color: Colors.secondary,
              }}
            />
            <View style={{ flexDirection: "row" }}>
              <DefaultText text="age: " />
              <DefaultText text={props.age} style={{ color: Colors.primary }} />
            </View>
            <DefaultText text={props.gender} />
          </View>
        </View>
      </View>
    </TouchCmp>
  );
};
const styles = StyleSheet.create({
  item: {
    height: 100,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  imageContainer: {
    width: "30%",
  },
  textContainer: {
    width: "70%",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default GuruItem;
