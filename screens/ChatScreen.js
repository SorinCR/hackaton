import { View, Text } from "react-native";
import styles from "../styles/Messages";

export function ChatScreen() {
  return (
    <View style={{ backgroundColor: "#2b2727", height: "100%" }}>
      <Text style={styles.search}>Search</Text>

      <View
        style={{
          backgroundColor: "black",
          height: "8%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 30,
            height: 30,
            backgroundColor: "white",
            borderRadius: 30,
          }}
        ></View>
        <Text style={{}}></Text>
      </View>
    </View>
  );
}
