import { colors } from "@/constants/theme";
import React from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity } from "react-native";

type AuthTermsRowProps = {
  checked: boolean;
  onToggle: () => void;
};

const AuthTermsRow = ({ checked, onToggle }: AuthTermsRowProps) => {
  return (
    <Pressable style={styles.container} onPress={onToggle}>
      <TouchableOpacity
        style={[styles.checkbox, checked && styles.checkboxChecked]}
        onPress={onToggle}
      />
      <Text style={styles.text}>
        By signing up you accept the Terms of Service and Privacy Policy
      </Text>
    </Pressable>
  );
};

export default AuthTermsRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingRight: 10,
  },
  checkbox: {
    width: 13,
    height: 13,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 3,
    marginRight: 12,
    marginTop: 4,
  },
  checkboxChecked: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  text: {
    fontSize: 11,
    color: colors.white,
    flex: 1,
    fontFamily: "PoppinsExtraLight",
    lineHeight: 20,
  },
});
