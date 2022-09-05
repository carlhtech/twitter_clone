import React from "react";
import { Text, View, Image } from "react-native";
import { TweetType } from "../../../types";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

import Footer from "./Footer";

export type MainContainerProps = {
  tweet: TweetType;
};

const MainContainer = ({ tweet }: MainContainerProps) => (
  <View style={styles.container}>
    <View style={styles.tweetHeaderContainer}>
      <Text style={styles.name}>{tweet.user.name}</Text>
      <Text style={styles.username}>@{tweet.user.username}</Text>
      <Text style={styles.createdAt}>15s</Text>
      <Ionicons style={styles.moreIcon} name={"chevron-down"} />
    </View>
    <View>
      <Text style={styles.content}>{tweet.content}</Text>
      {!!tweet.image && (
        <Image style={styles.image} source={{ uri: tweet.image }} />
      )}
    </View>
    <Footer tweet={tweet} />
  </View>
);

export default MainContainer;
