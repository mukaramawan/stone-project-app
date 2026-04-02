import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import React from "react";

const _layout = () => {
  const [fontsLoaded] = useFonts({
    Jura: require("../assets/fonts/Jura-VariableFont_wght.ttf"),
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
    PoppinsExtraLight: require("../assets/fonts/Poppins-ExtraLight.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
};

export default _layout;
