import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
// import { SvgUri } from "react-native-svg";
import { colors } from "../constants/theme";

const { width } = Dimensions.get("window");

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
      source={require("../assets/images/background.png")}
      style={[styles.container, containerStyles]}
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
            <View
              key={`${page.title}-${index}`}
              style={[
                styles.dot,
                index === currentIndex ? styles.dotActive : styles.dotInactive,
              ]}
            />
          ))}
        </View>

        <Pressable style={styles.nextButton} onPress={handlePrimaryAction}>
          <Ionicons name="chevron-forward" size={34} color={colors.white} />
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 12,
    paddingBottom: 20,
    justifyContent: "space-between",
  },
  heroArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 18,
  },
  heroImage: {
    width: width * 0.8,
    height: width * 0.8,
    maxWidth: 330,
    maxHeight: 330,
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
    backgroundColor: colors.primary,
  },
  dotInactive: {
    width: 8,
    backgroundColor: colors.primaryLight,
  },
  nextButton: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});
function useFonts(arg0: { Jura_700Bold: any }): [any] {
  throw new Error("Function not implemented.");
}
