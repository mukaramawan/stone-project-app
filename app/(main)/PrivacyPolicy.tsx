import Icon from "@/components/icon";
import { colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const PARAGRAPH_TEXT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem.";

const PrivacyPolicy = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerRow}>
        <Icon
          size={34}
          iconSize={14}
          onPress={() => router.replace("/Profile")}
          icon={
            <Ionicons name="chevron-back" size={16} color={colors.primary} />
          }
        />

        <Text style={styles.headerTitle}>Privacy Policy</Text>

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

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.paragraph}>{PARAGRAPH_TEXT}</Text>
        <Text style={styles.paragraph}>{PARAGRAPH_TEXT}</Text>
        <Text style={styles.paragraph}>{PARAGRAPH_TEXT}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 6,
    backgroundColor: "rgba(0, 0, 0, 0.18)",
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
  scrollView: {
    flex: 1,
    marginTop: 28,
  },
  scrollContent: {
    paddingBottom: 36,
  },
  paragraph: {
    color: colors.white,
    opacity: 0.92,
    fontFamily: "PoppinsRegular",
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 24,
  },
});
