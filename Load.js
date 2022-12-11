import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Screens
import { FeedScreen } from "./screens/FeedScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { ChatScreen } from "./screens/ChatScreen";
import { LoginScreen } from "./screens/LoginScreen";
// import { FeedScreen } from "./MainScreen";

// Icons
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./styles/Feed";

export default function App({ navigation }) {
  const load = async () => {
    const token = await AsyncStorage.getItem("token");
    const username = await AsyncStorage.getItem("username");

    if (token) {
      console.log(token);
      console.log(username);
      const resp = await fetch("http://192.168.251.64:3000/tokenLogin", {
        method: "POST",
        header: { authorization: token },
        body: JSON.stringify({
          username: username,
        }),
      });
      const _resp = await resp.json();
      console.log(_resp);
      navigation.navigate("FeedScreen");
    } else {
      navigator.navigate("Register");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={{ width: "100%", height: "100%" }}
        source={require("@expo/snack-static/react-native-logo.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
