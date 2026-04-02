import { Slot } from "expo-router";
import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const AuthLayout = () => {
  return (
    <ImageBackground
      source={require("../../assets/images/background2.png")}
      style={styles.container}
      resizeMode="cover"
    >
      <Slot />
    </ImageBackground>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
    backgroundColor: "#2C2429",
  },
});
