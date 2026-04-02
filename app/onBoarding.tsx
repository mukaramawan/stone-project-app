import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import OnboardingItem from "../components/onBoardingItems";
import { setItems } from "../utils/asyncStorage";

// const logoUri = RNImage.resolveAssetSource(
//   require("../assets/images/onboarding3.svg"),
// ).uri;

const OnBoardingScreen = () => {
  const router = useRouter();

  const handleDone = async () => {
    await setItems("onBoarded", "true");
    router.replace("/Login");
  };

  return (
    <View style={styles.container}>
      <OnboardingItem
        onDone={handleDone}
        containerStyles={styles.onboardingContainer}
        pages={[
          {
            SupTitle: "Welcome to",
            title: "Stone Project",
            subtitle:
              "Whether you're renovating your home, building a commercial space, or sourcing materials as a contractor.",
            image: require("../assets/images/onboarding1.png"),
          },
          {
            title: "Quality Stones",
            subtitle:
              "Browse curated materials, compare options, and choose the right finish for your space.",
            image: require("../assets/images/onboarding2.png"),
          },
          {
            SupTitle: "Plan Faster",
            title: "Build Better",
            subtitle:
              "Keep ideas, products, and progress in one place so every project moves smoothly.",
            image: require("../assets/images/onboarding3.png"),
          },
        ]}
      />
    </View>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#2C2429",
  },
  onboardingContainer: {
    paddingHorizontal: 18,
  },
});
