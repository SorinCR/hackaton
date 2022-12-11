import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Screens
import { FeedScreen } from "./screens/FeedScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { ChatScreen } from "./screens/ChatScreen";
import { LoginScreen } from "./screens/LoginScreen";

// Icons
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./styles/Feed";

export default function App() {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="FeedScreen"
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
        <Tab.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={loginStyle}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

const feedStyle = {
  title: "Feed Screen",
  headerRight: () => (
    <Button
      onPress={() => alert("This is a button!")}
      title="Info"
      color="#fff"
    />
  ),
  tabBarIcon: ({ size, focused, color }) => {
    return <AntDesign name="switcher" size={24} color="black" />;
  },
};

const profileStyle = {
  title: "Profile Screen",
  headerRight: () => (
    <Button
      onPress={() => alert("This is a button!")}
      title="Info"
      color="#fff"
    />
  ),
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
