import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Screens
import { FeedScreen } from "./screens/FeedScreen";
import { AppScreen } from "./screens/AppScreen";
import { MainScreen } from "./screens/MainScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { ChatScreen } from "./screens/ChatScreen";
import { LoginScreen } from "./screens/LoginScreen";
import { RegisterScreen, Register } from "./screens/RegisterScreen";

// Icons
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./styles/Feed";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AppScreen">
        <Stack.Screen name="AppScreen" component={AppScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const chatStyle = {
  title: "Chat Screen",
  tabBarIcon: ({ size, focused, color }) => {
    return <AntDesign name="message1" size={24} color="black" />;
  },
};
