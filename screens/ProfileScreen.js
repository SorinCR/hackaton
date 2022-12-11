import { View, Text, Button } from "react-native";
import { LoginScreen } from "./LoginScreen";
import { RegisterScreen } from "./RegisterScreen";

const Stack = createNativeStackNavigator();

export function ProfileScreen({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="loginScreen" component="loginScreen" />
        <Stack.Screen name="registerScreen" component="loginScreen" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
