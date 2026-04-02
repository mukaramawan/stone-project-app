import Icon from "@/components/icon";
import { colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type MenuItem = {
  key: string;
  label: string;
  icon: React.ComponentProps<typeof Ionicons>["name"];
  rightLabel?: string;
  hideChevron?: boolean;
  onPress?: () => void;
};

const PROFILE_AVATAR_URI =
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80";

const Profile = () => {
  const router = useRouter();

  const menuItems: MenuItem[] = [
    {
      key: "personal-details",
      label: "Personal Details",
      icon: "person",
    },
    {
      key: "wishlist",
      label: "Wishlist",
      icon: "heart",
      onPress: () => router.push("/Wishlist"),
    },
    {
      key: "blog",
      label: "Blog",
      icon: "newspaper",
    },
    {
      key: "password",
      label: "Password",
      icon: "lock-closed",
    },
    {
      key: "privacy-policy",
      label: "Privacy Policy",
      icon: "shield-checkmark",
      onPress: () => router.push("/PrivacyPolicy"),
    },
    {
      key: "language",
      label: "Language",
      icon: "language",
      rightLabel: "English",
      hideChevron: true,
    },
  ];

  return (
    <SafeAreaView style={[styles.container, styles.drawerSheet]}>
      <View style={styles.headerRow}>
        <Icon
          size={34}
          iconSize={14}
          onPress={() => router.replace("/Home")}
          icon={
            <Ionicons name="chevron-back" size={16} color={colors.primary} />
          }
        />

        <Text style={styles.headerTitle}>Profile</Text>

        <Icon
          size={34}
          iconSize={14}
          icon={
            <Ionicons
              name="notifications-outline"
              size={16}
              color={colors.primary}
            />
          }
        />
      </View>

      <View style={styles.profileRow}>
        <View style={styles.avatarWrapper}>
          <Image source={{ uri: PROFILE_AVATAR_URI }} style={styles.avatar} />

          <Icon
            size={28}
            iconSize={12}
            style={styles.editAvatarButton}
            icon={
              <Ionicons
                name="create-outline"
                size={13}
                color={colors.primary}
              />
            }
          />
        </View>

        <View style={styles.userDetails}>
          <Text style={styles.userName}>Ahmed Hassan</Text>
          <Text style={styles.userMeta}>ahmedhassan1076@gmail.com</Text>
          <Text style={styles.userMeta}>+92 301 77 7 777</Text>
        </View>
      </View>

      <View style={styles.menuGroup}>
        {menuItems.map((item) => {
          const rowContent = (
            <>
              <View style={styles.menuLeftSection}>
                <Ionicons
                  name={item.icon}
                  size={22}
                  color={colors.white}
                  style={styles.menuItemIcon}
                />
                <Text style={styles.menuLabel}>{item.label}</Text>
              </View>

              <View style={styles.menuRightSection}>
                {item.rightLabel ? (
                  <Text style={styles.rightLabel}>{item.rightLabel}</Text>
                ) : null}

                {!item.hideChevron ? (
                  <Ionicons
                    name="chevron-forward"
                    size={24}
                    color={colors.white}
                  />
                ) : null}
              </View>
            </>
          );

          if (!item.onPress) {
            return (
              <View key={item.key} style={styles.menuRow}>
                {rowContent}
              </View>
            );
          }

          return (
            <Pressable
              key={item.key}
              onPress={item.onPress}
              style={({ pressed }) => [
                styles.menuRow,
                pressed ? styles.menuRowPressed : undefined,
              ]}
            >
              {rowContent}
            </Pressable>
          );
        })}
      </View>

      <Pressable
        onPress={() => router.replace("/Login")}
        style={({ pressed }) => [
          styles.menuRow,
          styles.logoutRow,
          pressed ? styles.menuRowPressed : undefined,
        ]}
      >
        <View style={styles.menuLeftSection}>
          <Ionicons
            name="log-out"
            size={22}
            color={colors.white}
            style={styles.menuItemIcon}
          />
          <Text style={styles.menuLabel}>Logout</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.18)",
  },
  drawerSheet: {
    paddingHorizontal: 16,
    paddingTop: 6,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    flex: 1,
    marginLeft: 16,
    color: colors.white,
    fontFamily: "Jura",
    fontSize: 32,
    lineHeight: 38,
  },
  profileRow: {
    marginTop: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  avatarWrapper: {
    width: 74,
    height: 74,
    borderRadius: 8,
    overflow: "visible",
    marginRight: 12,
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  editAvatarButton: {
    position: "absolute",
    right: -8,
    bottom: -8,
  },
  userDetails: {
    flex: 1,
  },
  userName: {
    color: colors.white,
    fontFamily: "PoppinsMedium",
    fontSize: 25,
    lineHeight: 30,
  },
  userMeta: {
    color: colors.white,
    opacity: 0.92,
    fontFamily: "PoppinsRegular",
    fontSize: 14,
    lineHeight: 20,
  },
  menuGroup: {
    marginTop: 28,
  },
  menuRow: {
    minHeight: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    borderRadius: 12,
    paddingHorizontal: 2,
  },
  menuRowPressed: {
    backgroundColor: "rgba(255, 255, 255, 0.08)",
  },
  menuLeftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuItemIcon: {
    width: 34,
    textAlign: "center",
  },
  menuLabel: {
    color: colors.white,
    fontFamily: "Jura",
    fontSize: 18,
    lineHeight: 24,
    marginLeft: 8,
  },
  menuRightSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginRight: 2,
  },
  rightLabel: {
    color: colors.white,
    fontFamily: "PoppinsRegular",
    fontSize: 14,
    lineHeight: 18,
    opacity: 0.96,
  },
  logoutRow: {
    marginTop: "auto",
    marginBottom: 14,
  },
});
