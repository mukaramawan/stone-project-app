import { colors } from "@/constants/theme";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type AuthSwitchRowProps = {
  prefixText: string;
  actionText: string;
  onPress: () => void;
};

const AuthSwitchRow = ({
  prefixText,
  actionText,
  onPress,
}: AuthSwitchRowProps) => {
  return (
    <View style={styles.row}>
      <Text style={styles.prefix}>{prefixText}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.action}>{actionText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthSwitchRow;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  prefix: {
    color: colors.white,
    fontSize: 14,
    fontFamily: "PoppinsRegular",
  },
  action: {
    color: colors.white,
    fontSize: 14,
    fontFamily: "PoppinsRegular",
    textDecorationLine: "underline",
  },
});
