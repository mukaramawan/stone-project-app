import { colors, gradients } from "@/constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type AuthSocialButtonsProps = {
  onGooglePress: () => void;
  onFacebookPress: () => void;
};

const AuthSocialButtons = ({
  onGooglePress,
  onFacebookPress,
}: AuthSocialButtonsProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonPressable} onPress={onGooglePress}>
        <LinearGradient
          colors={gradients.accentReversed.colors}
          locations={gradients.accentReversed.locations}
          start={gradients.accentReversed.start}
          end={gradients.accentReversed.end}
          style={styles.buttonOutline}
        >
          <LinearGradient
            colors={gradients.dark.colors}
            locations={gradients.dark.locations}
            start={gradients.dark.start}
            end={gradients.dark.end}
            style={styles.buttonInner}
          >
            <Text style={styles.label}>G</Text>
          </LinearGradient>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonPressable}
        onPress={onFacebookPress}
      >
        <LinearGradient
          colors={gradients.accentReversed.colors}
          locations={gradients.accentReversed.locations}
          start={gradients.accentReversed.start}
          end={gradients.accentReversed.end}
          style={styles.buttonOutline}
        >
          <LinearGradient
            colors={gradients.dark.colors}
            locations={gradients.dark.locations}
            start={gradients.dark.start}
            end={gradients.dark.end}
            style={styles.buttonInner}
          >
            <Text style={styles.label}>f</Text>
          </LinearGradient>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default AuthSocialButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 81,
    marginBottom: 20,
  },
  buttonPressable: {
    width: 50,
    height: 50,
    borderRadius: 999,
  },
  buttonOutline: {
    flex: 1,
    borderRadius: 999,
    padding: 2,
    shadowColor: "#2A2A2A",
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.8,
    shadowRadius: 11,
    elevation: 8,
  },
  buttonInner: {
    flex: 1,
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: colors.primary,
    fontSize: 20,
    fontFamily: "PoppinsMedium",
  },
});
