import { colors, gradients } from "@/constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
    Image,
    ImageResizeMode,
    ImageSourcePropType,
    ImageStyle,
    StyleProp,
    StyleSheet,
    TouchableOpacity,
    ViewStyle,
} from "react-native";

type IconProps = {
  source?: ImageSourcePropType;
  icon?: React.ReactNode;
  onPress?: () => void;
  size?: number;
  iconSize?: number;
  style?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  resizeMode?: ImageResizeMode;
  activeOpacity?: number;
};

const Icon = ({
  source,
  icon,
  onPress,
  size = 36,
  iconSize = 14,
  style,
  iconStyle,
  resizeMode = "contain",
  activeOpacity = 0.8,
}: IconProps) => {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      onPress={onPress}
      style={[
        styles.buttonPressable,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
        },
        style,
      ]}
    >
      <LinearGradient
        colors={gradients.accentReversed.colors}
        locations={gradients.accentReversed.locations}
        start={gradients.accentReversed.start}
        end={gradients.accentReversed.end}
        style={[
          styles.buttonOutline,
          {
            borderRadius: size / 2,
          },
        ]}
      >
        <LinearGradient
          colors={gradients.dark.colors}
          locations={gradients.dark.locations}
          start={gradients.dark.start}
          end={gradients.dark.end}
          style={[
            styles.buttonInner,
            {
              borderRadius: size / 2,
            },
          ]}
        >
          {source ? (
            <Image
              source={source}
              resizeMode={resizeMode}
              style={[
                styles.image,
                {
                  width: iconSize,
                  height: iconSize,
                },
                iconStyle,
              ]}
            />
          ) : (
            icon
          )}
        </LinearGradient>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Icon;

const styles = StyleSheet.create({
  buttonPressable: {
    borderRadius: 999,
  },
  buttonOutline: {
    flex: 1,
    borderRadius: 999,
    padding: 2,
    shadowColor: colors.black,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.45,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonInner: {
    flex: 1,
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    tintColor: colors.primary,
  },
});
