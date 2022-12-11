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
    backgroundColor: "gray",
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
    borderBottomWidth: 1,
    borderBottomColor: "red",
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
    height: "100%",
    borderRadius: 15,
    top: -15,
  },
  userAvatarWrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    padding: "1%",
    backgroundColor: "#0F0F0F",
  },
  userAvatar: {
    height: 30,
    width: 30,
    backgroundColor: "gray",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "red",
  },
  userTags: {
    color: "white",
    fontWeight: "bold",
    width: "100%",
    paddingLeft: "2%",
  },
});

module.exports = styles;
