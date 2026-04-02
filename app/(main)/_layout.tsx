import { colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const MainLayout = () => {
  return (
    <ImageBackground
      source={require("../../assets/images/background2.png")}
      style={styles.container}
      resizeMode="cover"
    >
      <Tabs
        initialRouteName="Home"
        screenOptions={({ route }) => {
          return {
            headerShown: false,
            sceneStyle: { backgroundColor: "transparent" },
            tabBarHideOnKeyboard: true,
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: colors.white,
            tabBarBackground: () => null,
            tabBarActiveBackgroundColor: "transparent",
            tabBarInactiveBackgroundColor: "transparent",
            tabBarStyle: styles.tabBar,
            tabBarLabelStyle: styles.tabBarLabel,
            tabBarIcon: ({ color, size, focused }) => {
              let iconName: React.ComponentProps<typeof Ionicons>["name"] =
                "home-outline";

              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Wishlist") {
                iconName = focused ? "heart" : "heart-outline";
              } else if (route.name === "Recommended") {
                iconName = focused ? "sparkles" : "sparkles-outline";
              } else if (route.name === "Profile") {
                iconName = focused ? "person" : "person-outline";
              }

              return <Ionicons name={iconName} color={color} size={size} />;
            },
          };
        }}
      >
        <Tabs.Screen name="Home" options={{ title: "Home" }} />
        <Tabs.Screen name="Wishlist" options={{ title: "Wishlist" }} />
        <Tabs.Screen name="Recommended" options={{ title: "Recommended" }} />
        <Tabs.Screen
          name="Profile"
          options={{
            title: "Profile",
            tabBarStyle: { display: "none" },
          }}
        />
        <Tabs.Screen
          name="PrivacyPolicy"
          options={{
            href: null,
            tabBarStyle: { display: "none" },
          }}
        />
        <Tabs.Screen
          name="Blog"
          options={{
            href: null,
            tabBarStyle: { display: "none" },
          }}
        />
        <Tabs.Screen
          name="BlogInner"
          options={{
            href: null,
            tabBarStyle: { display: "none" },
          }}
        />
      </Tabs>
    </ImageBackground>
  );
};

export default MainLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
    backgroundColor: "#2C2429",
  },
  tabBar: {
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 20,
    height: 64,
    borderTopWidth: 0,
    elevation: 0,
    shadowColor: "transparent",
    shadowOpacity: 0,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 0,
    borderColor: "transparent",
    backgroundColor: "transparent",
  },
  tabBarLabel: {
    fontFamily: "Jura",
    fontSize: 12,
  },
});
