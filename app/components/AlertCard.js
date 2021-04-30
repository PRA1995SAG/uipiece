import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/color";

const AlertCard = (props) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.text}>{props.message}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    margin: 10,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 4,
    backgroundColor: Colors.ternary,
  },
  text: {
    padding: 10,
    color: Colors.primary,
    fontFamily: "quicksand-medium",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default AlertCard;
