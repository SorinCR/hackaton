import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { StyleSheet } from "react-native";

export function LoginScreen({ navigation }) {
  const [username, setUsername] = React.useState("");
  const [pass, setPass] = React.useState("");

  const login = async () => {
    const resp = await fetch("http://192.168.251.64:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: pass,
      }),
    });

    const _resp = await resp.json();

    if (_resp.success) navigation.navigate("MainScreen");
    // console.log(resp);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={username}
        onChangeText={(username) => setUsername(username)}
        placeholder={"Username"}
        style={styles.input}
      />
      <TextInput
        value={pass}
        onChangeText={(password) => setPass(password)}
        placeholder={"Password"}
        secureTextEntry={true}
        style={styles.input}
      />
      <Button title={"Login"} style={styles.input} onPress={() => login()} />
      <Button
        title="Go to Register"
        onPress={() => navigation.navigate("MainScreen")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
