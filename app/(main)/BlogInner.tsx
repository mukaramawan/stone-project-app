import Icon from "@/components/icon";
import { colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type BlogItem = {
  id: string;
  title: string;
  image: string;
  author: string;
  data: string;
  date?: string;
  summary?: string;
  content: string;
};

const BLOGS = require("../../data/blogsData.json") as BlogItem[];

const BlogInner = () => {
  const router = useRouter();
  const params = useLocalSearchParams<{ id?: string }>();

  const post = React.useMemo(() => {
    const selected = BLOGS.find((item) => item.id === params.id);
    return selected ?? BLOGS[0];
  }, [params.id]);

  const paragraphs = React.useMemo(() => {
    return post.content
      .split("\n\n")
      .map((entry) => entry.trim())
      .filter(Boolean);
  }, [post.content]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerRow}>
        <Icon
          size={34}
          iconSize={14}
          onPress={() => router.replace("/Blog")}
          icon={
            <Ionicons name="chevron-back" size={16} color={colors.primary} />
          }
        />

        <Text style={styles.headerTitle} numberOfLines={1}>
          {post.title}
        </Text>

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
        <Image source={{ uri: post.image }} style={styles.heroImage} />

        <Text style={styles.articleHeading}>{post.title}</Text>

        {paragraphs.slice(0, 4).map((paragraph, index) => {
          return (
            <Text key={`top-${index}`} style={styles.paragraph}>
              {paragraph}
            </Text>
          );
        })}

        <Text style={styles.subHeading}>{post.title}</Text>

        {paragraphs.slice(2).map((paragraph, index) => {
          return (
            <Text key={`bottom-${index}`} style={styles.paragraph}>
              {paragraph}
            </Text>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default BlogInner;

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
  heroImage: {
    width: "100%",
    height: 140,
    backgroundColor: "rgba(255, 255, 255, 0.08)",
  },
  articleHeading: {
    marginTop: 14,
    color: colors.white,
    fontFamily: "PoppinsMedium",
    fontSize: 17,
    lineHeight: 24,
  },
  subHeading: {
    marginTop: 14,
    marginBottom: 6,
    color: colors.white,
    fontFamily: "PoppinsMedium",
    fontSize: 17,
    lineHeight: 24,
  },
  paragraph: {
    color: colors.white,
    opacity: 0.92,
    fontFamily: "PoppinsRegular",
    fontSize: 16,
    lineHeight: 22,
    marginTop: 6,
  },
});
