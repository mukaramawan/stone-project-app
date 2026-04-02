import { colors } from "@/constants/theme";
import React from "react";
import {
    StyleProp,
    StyleSheet,
    Text,
    TextInput,
    TextInputProps,
    TouchableOpacity,
    View,
    ViewStyle,
} from "react-native";

type AuthInputFieldProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  autoCapitalize?: TextInputProps["autoCapitalize"];
  keyboardType?: TextInputProps["keyboardType"];
  containerStyle?: StyleProp<ViewStyle>;
  forgotText?: string;
  onForgotPress?: () => void;
};

const AuthInputField = ({
  label,
  value,
  onChangeText,
  secureTextEntry,
  autoCapitalize,
  keyboardType,
  containerStyle,
  forgotText,
  onForgotPress,
}: AuthInputFieldProps) => {
  return (
    <View style={[styles.inputGroup, containerStyle]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
      />

      {forgotText && onForgotPress ? (
        <TouchableOpacity
          style={styles.forgotPasswordButton}
          onPress={onForgotPress}
        >
          <Text style={styles.forgotPasswordLink}>{forgotText}</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default AuthInputField;

const styles = StyleSheet.create({
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 17,
    color: colors.white,
    marginBottom: 0,
    fontFamily: "PoppinsRegular",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.primaryLight,
    paddingVertical: 2,
    paddingHorizontal: 0,
    fontSize: 16,
    color: colors.white,
    fontFamily: "PoppinsRegular",
  },
  forgotPasswordButton: {
    alignSelf: "flex-end",
    marginTop: 12,
  },
  forgotPasswordLink: {
    fontSize: 12,
    color: colors.white,
    textDecorationLine: "underline",
    fontFamily: "PoppinsRegular",
  },
});
