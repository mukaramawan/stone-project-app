import { colors, gradients } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type SignUpProfileRowProps = {
  onPress: () => void;
};

const SignUpProfileRow = ({ onPress }: SignUpProfileRowProps) => {
  return (
    <View style={styles.profileRow}>
      <TouchableOpacity style={styles.cameraCirclePressable} onPress={onPress}>
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
            style={styles.cameraCircle}
          >
            <Ionicons name="camera-outline" size={33} color={colors.primary} />
          </LinearGradient>
        </LinearGradient>
      </TouchableOpacity>

      <View>
        <Text style={styles.profilePictureText}>
          Upload Your Profile Picture
        </Text>
        <Text style={styles.profilePictureSubtext}>(Optional)</Text>
      </View>
    </View>
  );
};

export default SignUpProfileRow;

const styles = StyleSheet.create({
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 42,
  },
  cameraCirclePressable: {
    width: 84,
    height: 84,
    borderRadius: 999,
    marginRight: 14,
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
  cameraCircle: {
    flex: 1,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#2A2A2A",
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.7,
    shadowRadius: 11,
    elevation: 8,
  },
  profilePictureText: {
    fontSize: 14,
    lineHeight: 19,
    color: colors.white,
    fontFamily: "PoppinsRegular",
  },
  profilePictureSubtext: {
    fontSize: 14,
    lineHeight: 19,
    color: colors.white,
    fontFamily: "PoppinsRegular",
  },
});
