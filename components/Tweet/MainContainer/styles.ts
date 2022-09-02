import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 6,
  },
  tweetHeaderContainer: {
    flexDirection: "row",
  },
  name: {
    marginRight: 5,
    fontWeight: "bold",
  },
  username: {
    marginRight: 5,
    color: "grey",
  },
  createdAt: {
    marginRight: 5,
    color: "grey",
  },
  moreIcon: {
    size: 16,
    color: "grey",
  },
  content: {
    lineHeight: 18,
    marginTop: 5,
  },
});

export default styles;
