import { colors } from "@/constants/theme";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const AuthDivider = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>or</Text>
      <View style={styles.line} />
    </View>
  );
};

export default AuthDivider;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  line: {
    flex: 1,
    height: 1,
    opacity: 0.85,
  },
  text: {
    marginHorizontal: 18,
    color: colors.primary,
    fontSize: 18,
    lineHeight: 18,
    fontFamily: "PoppinsRegular",
  },
});
