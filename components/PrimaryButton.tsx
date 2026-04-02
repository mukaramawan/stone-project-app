import { colors, gradients, radius } from "@/constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

type AuthPrimaryButtonProps = {
  label: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

const AuthPrimaryButton = ({
  label,
  onPress,
  style,
}: AuthPrimaryButtonProps) => {
  return (
    <TouchableOpacity style={[styles.buttonPressable, style]} onPress={onPress}>
      <View style={styles.buttonGlow} />
      <LinearGradient
        colors={gradients.accentReversed.colors}
        locations={gradients.accentReversed.locations}
        start={gradients.accentReversed.start}
        end={gradients.accentReversed.end}
        style={styles.buttonOutline}
      >
        <LinearGradient
          colors={gradients.accent.colors}
          locations={gradients.accent.locations}
          start={gradients.accent.start}
          end={gradients.accent.end}
          style={styles.buttonFill}
        >
          <Text style={styles.buttonText}>{label}</Text>
        </LinearGradient>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default AuthPrimaryButton;

const styles = StyleSheet.create({
  buttonPressable: {
    width: "70%",
    height: 45,
    alignSelf: "center",
    marginBottom: 20,
  },
  buttonGlow: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#171311",
    borderRadius: radius._30,
    opacity: 0.35,
    transform: [{ translateY: 2 }],
  },
  buttonOutline: {
    flex: 1,
    borderRadius: radius._30,
    padding: 3,
  },
  buttonFill: {
    flex: 1,
    borderRadius: radius._30,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: colors.white,
    fontSize: 19,
    fontFamily: "Jura",
    fontWeight: "600",
  },
});
