import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import {
  ImageBackground,
  Image as RNImage,
  StyleSheet,
  View,
} from "react-native";
import { SvgUri } from "react-native-svg";
import { getItems } from "../utils/asyncStorage";

const logoUri = RNImage.resolveAssetSource(
  require("../assets/images/logo.svg"),
).uri;

const index = () => {
  const router = useRouter();

  const logoUri = RNImage.resolveAssetSource(
    require("../assets/images/logo.svg"),
  ).uri;

  useEffect(() => {
    const checkOnBoardingStatus = async () => {
      const onBoarded = await getItems("onBoarded");

      const timeoutId = setTimeout(() => {
        router.replace(onBoarded === "true" ? "/Home" : "/onBoarding");
      }, 2000);
    };

    checkOnBoardingStatus();
  }, [router]);

  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={styles.container}
    >
      <View style={styles.logoContainer}>
        <SvgUri uri={logoUri} style={styles.logo} />
      </View>
    </ImageBackground>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 60,
  },
  logoContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 100,
  },
});
