import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { StyleSheet } from "react-native";

export function LoginScreen() {
  const [username, setUsername] = React.useState("");
  const [pass, setPass] = React.useState("");

  const login = async () => {
    console.log(0);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={username}
        onChangeText={(username) => this.setUsername({ username })}
        placeholder={"Username"}
        style={styles.input}
      />
      <TextInput
        value={pass}
        onChangeText={(password) => this.setPass({ password })}
        placeholder={"Password"}
        secureTextEntry={true}
        style={styles.input}
      />
      <Button title={"Login"} style={styles.input} onPress={() => login()} />
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
