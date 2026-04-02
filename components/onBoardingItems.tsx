import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
// import { SvgUri } from "react-native-svg";
import { colors, gradients } from "../constants/theme";

type OnboardingPage = {
  SupTitle?: string;
  title: string;
  subtitle: string;
  backgroundColor?: string;
  image?: any;
};

type OnboardingItemProps = {
  pages: OnboardingPage[];
  onDone: () => Promise<void> | void;
  onNext?: (nextIndex: number) => void;
  containerStyles?: StyleProp<ViewStyle>;
};

const OnboardingItem = ({
  pages,
  onDone,
  onNext,
  containerStyles,
}: OnboardingItemProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentPage = pages[currentIndex] ?? pages[0];

  const handlePrimaryAction = async () => {
    const isLastPage = currentIndex === pages.length - 1;

    if (isLastPage) {
      await onDone();
      return;
    }

    const nextIndex = currentIndex + 1;
    onNext?.(nextIndex);
    setCurrentIndex(nextIndex);
  };

  return (
    <ImageBackground
      source={require("../assets/images/background2.png")}
      style={[styles.container, containerStyles]}
      resizeMode="cover"
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.heroArea}>
        <Image
          source={
            currentPage?.image ?? require("../assets/images/splash-icon.png")
          }
          style={styles.heroImage}
          resizeMode="contain"
        />
        {/* <SvgUri
          uri={
            currentPage?.image ?? require("../assets/images/splash-icon.png")
          }
          style={styles.heroImage}
        /> */}
      </View>

      <View style={styles.copyArea}>
        <Text style={styles.supTitle}>{currentPage?.SupTitle}</Text>
        <Text style={styles.title}>{currentPage?.title}</Text>
        <Text style={styles.subtitle}>{currentPage?.subtitle}</Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.pagination}>
          {pages.map((page: OnboardingPage, index: number) => (
            <LinearGradient
              key={`${page.title}-${index}`}
              colors={gradients.accent.colors}
              locations={gradients.accent.locations}
              start={gradients.accent.start}
              end={gradients.accent.end}
              style={[
                styles.dot,
                index === currentIndex ? styles.dotActive : styles.dotInactive,
              ]}
            />
          ))}
        </View>

        <Pressable
          style={styles.nextButtonPressable}
          onPress={handlePrimaryAction}
        >
          <LinearGradient
            colors={gradients.accentReversed.colors}
            locations={gradients.accentReversed.locations}
            start={gradients.accentReversed.start}
            end={gradients.accentReversed.end}
            style={styles.nextButtonOutline}
          >
            <LinearGradient
              colors={gradients.accent.colors}
              locations={gradients.accent.locations}
              start={gradients.accent.start}
              end={gradients.accent.end}
              style={styles.nextButtonGradient}
            >
              <Ionicons name="chevron-forward" size={34} color={colors.white} />
            </LinearGradient>
          </LinearGradient>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C2429",
    paddingTop: 20,
    paddingBottom: 40,
    justifyContent: "space-between",
  },
  backgroundImage: {
    opacity: 1,
  },
  heroArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 18,
  },
  heroImage: {
    width: "100%",
    height: "75%",
  },
  copyArea: {
    paddingTop: 16,
  },
  supTitle: {
    color: colors.white,
    fontSize: 21,
    lineHeight: 28,
    fontFamily: "PoppinsRegular",
  },
  title: {
    color: colors.primary,
    fontSize: 38,
    lineHeight: 45,
    marginTop: 2,
    fontFamily: "Jura",
  },
  subtitle: {
    marginTop: 8,
    color: colors.white,
    fontSize: 16,
    lineHeight: 24,
    maxWidth: 350,
    fontFamily: "PoppinsRegular",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 26,
  },
  pagination: {
    flexDirection: "row",
    alignItems: "center",
  },
  dot: {
    height: 6,
    borderRadius: 999,
    marginRight: 8,
  },
  dotActive: {
    width: 18,
  },
  dotInactive: {
    width: 8,
    opacity: 0.55,
  },
  nextButtonPressable: {
    width: 72,
    height: 72,
    borderRadius: 36,
  },
  nextButtonOutline: {
    flex: 1,
    borderRadius: 36,
    padding: 2,
  },
  nextButtonGradient: {
    flex: 1,
    borderRadius: 34,
    alignItems: "center",
    justifyContent: "center",
  },
});
