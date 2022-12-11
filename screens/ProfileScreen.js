import { View, Text, Button } from "react-native";
import { LoginScreen } from "./LoginScreen";
import { RegisterScreen } from "./RegisterScreen";
// import { MainScreen } from "./MainScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export function ProfileScreen() {
  return (
    <View>
      <Text> CRI CRI</Text>
    </View>
  );
}
