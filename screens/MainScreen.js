import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Screens
import { FeedScreen } from "./FeedScreen";
import { ProfileScreen } from "./ProfileScreen";
import { ChatScreen } from "./ChatScreen";
import { LoginScreen } from "./LoginScreen";

// Icons
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "../styles/Feed";

const Tab = createBottomTabNavigator();

export function MainScreen() {
  return (
    <NavigationContainer independent={true} initialRouteName="FeedScreen">
      <Tab.Navigator
        screenOptions={{
          tabBarLabel: () => {
            return null;
          },
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
        }}
      >
        <Tab.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={chatStyle}
        />
        <Tab.Screen
          name="FeedScreen"
          component={FeedScreen}
          options={feedStyle}
        />
        <Tab.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={profileStyle}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const feedStyle = {
  title: "Feed Screen",
  tabBarIcon: ({ size, focused, color }) => {
    return <AntDesign name="switcher" size={24} color="black" />;
  },
};

const profileStyle = {
  title: "Profile Screen",
  tabBarIcon: ({ size, focused, color }) => {
    return <FontAwesome name="user-o" size={24} color="black" />;
  },
};

const chatStyle = {
  title: "Chat Screen",
  tabBarIcon: ({ size, focused, color }) => {
    return <AntDesign name="message1" size={24} color="black" />;
  },
};

const loginStyle = {
  tabBarStyle: { display: "none" },
};
