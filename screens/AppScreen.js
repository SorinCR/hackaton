import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export function AppScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>This is the APP SCREEN</Text>
      <Button
        title="Go to Register"
        onPress={() => navigation.navigate("RegisterScreen")}
      />
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate("LoginScreen")}
      />
    </View>
  );
}
