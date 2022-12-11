import { StyleSheet } from "react-native";

export const COLORS = {
  white: "#fff",
  black: "#000",
  redis: "#e31c3d",
  blackis: "#2B2A33",
  // your colors
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    height: 700,
    width: "100%",
  },
  contentContainer: {
    height: "100%",
    flex: 1,
  },
  text: {
    color: "white",
  },
  userBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 53,
    width: "100%",
    backgroundColor: "#2b2727",
    borderTopWidth: 2,
    borderTopColor: "red",
  },
  banner: {
    height: "100%",
    width: "10%",
    backgroundColor: "black",
    paddingLeft: "2%",
    paddingRight: "2%",
  },
  bannerFlag: {
    position: "relative",
    backgroundColor: "red",
    width: "100%",
    height: "75%",
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  userInfo: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    padding: "1%",
    // backgroundColor: "#0F0F0F",
  },
  userAvatar: {
    height: 30,
    width: 30,
    backgroundColor: "gray",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "red",
  },
  userName: {
    color: "white",
    paddingLeft: "2%",
  },
  userTags: {
    color: "white",
    fontWeight: "bold",
    width: "100%",
  },
  postWrapper: {
    display: "flex",
    alignItems: "center",
    height: "70%",
    width: "100%",
    backgroundColor: "#51585a",
  },
  postImage: {
    width: "100%",
    height: "90%",
    backgroundColor: "#51585a",
  },
  postIcon: {
    color: "white",
  },
  postTitle: {
    color: "white",
    fontSize: 15,
    width: "100%",
    textAlign: "center",
  },
  postButtons: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    height: "100%",
    backgroundColor: "#51585a",
    fontSize: 10,
    justifyContent: "space-around",
    alignItems: "center",
    paddingLeft: "2%",
    paddingRight: "2%",
  },
  posts: {
    width: "100%",
    padding: "5%",
    height: "100%",
  },
});

module.exports = styles;
