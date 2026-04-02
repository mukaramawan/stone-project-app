import Icon from "@/components/icon";
import { colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type BlogItem = {
  id: string;
  title: string;
  image: string;
  author: string;
  authorImage?: string;
  data: string;
  date?: string;
  summary?: string;
  content: string;
};

const BLOGS = require("../../data/blogsData.json") as BlogItem[];

const Blog = () => {
  const router = useRouter();

  const openBlogPost = (id: string) => {
    router.push({
      pathname: "/BlogInner",
      params: { id },
    });
  };

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

        <Text style={styles.headerTitle}>Blog</Text>

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

      <FlatList
        data={BLOGS}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item }) => {
          return (
            <Pressable
              style={({ pressed }) => [
                styles.card,
                pressed ? styles.cardPressed : undefined,
              ]}
              onPress={() => openBlogPost(item.id)}
            >
              <Image source={{ uri: item.image }} style={styles.cardImage} />

              <Text numberOfLines={1} style={styles.cardTitle}>
                {item.title}
              </Text>

              <Text numberOfLines={3} style={styles.cardSummary}>
                {item.summary ?? item.content}
              </Text>

              <View style={styles.authorRow}>
                <Image
                  source={{
                    uri:
                      item.authorImage ??
                      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
                  }}
                  style={styles.authorAvatar}
                />

                <View>
                  <Text style={styles.authorName}>{item.author}</Text>
                  <Text style={styles.authorDate}>
                    {item.data ?? item.date}
                  </Text>
                </View>
              </View>
            </Pressable>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Blog;

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
  listContent: {
    paddingTop: 28,
    paddingBottom: 28,
    rowGap: 12,
  },
  columnWrapper: {
    justifyContent: "space-between",
    gap: 12,
  },
  card: {
    flex: 1,
    backgroundColor: "rgba(51, 51, 54, 0.97)",
    padding: 10,
  },
  cardPressed: {
    opacity: 0.85,
  },
  cardImage: {
    width: "100%",
    height: 106,
    marginBottom: 10,
    backgroundColor: "rgba(255, 255, 255, 0.06)",
  },
  cardTitle: {
    color: colors.white,
    fontFamily: "PoppinsMedium",
    fontSize: 16,
    lineHeight: 21,
  },
  cardSummary: {
    color: colors.white,
    opacity: 0.86,
    marginTop: 8,
    fontFamily: "PoppinsRegular",
    fontSize: 11,
    lineHeight: 15,
  },
  authorRow: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  authorAvatar: {
    width: 20,
    height: 20,
    borderRadius: 999,
  },
  authorName: {
    color: colors.white,
    fontFamily: "PoppinsRegular",
    fontSize: 8,
    lineHeight: 10,
  },
  authorDate: {
    color: colors.white,
    opacity: 0.74,
    fontFamily: "PoppinsRegular",
    fontSize: 8,
    lineHeight: 10,
  },
});
