import React from "react";
import { Text } from "react-native";

const DefaultText = (props) => {
  return (
    <Text
      style={{
        ...{ fontFamily: "quicksand-regular", fontSize: 16 },
        ...props.style,
      }}
    >
      {props.text}
    </Text>
  );
};

export default DefaultText;
