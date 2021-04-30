import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header = (props) => {
  let TouchComponent = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.headerContainer}>
      <View style={styles.itemContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="find guru"
            style={styles.input}
            selectionColor="#315ba0"
          />
          <TouchComponent useForeground>
            <View style={styles.touchable}>
              <Ionicons
                name={Platform.OS === "android" ? "md-search" : "ios-search"}
                size={24}
                color="#315ba0"
              />
            </View>
          </TouchComponent>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#ff914d",
    justifyContent: "center",
  },
  input: {
    padding: 8,
    width: "85%",
    fontFamily: "quicksand-medium",
    fontSize: 16,
  },
  itemContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 4,
  },
  touchable: {
    overflow: "hidden",
    borderRadius: 30,
    padding: 6,
  },
  inputContainer: {
    flex: 1,
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 8,
    width: "100%",
  },
});
export default Header;
