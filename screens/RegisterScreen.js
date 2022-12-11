import React from "react";
import { View, Text, TextInput, Button, Image } from "react-native";
import { StyleSheet } from "react-native";

import { logo } from "../assets/logo.png";
// import styles from "../styles/Registration";

export function RegisterScreen({ navigation }) {
  const [username, setUsername] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [confPass, setConfPass] = React.useState("");

  const register = async () => {
    const resp = await fetch("http://192.168.251.64:3000/register", {
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
    // console.log(_resp);
  };

  return (
    <View style={styles.container}>
      <Image
        style={{ width: "50%", position: "relative", bottom: -120 }}
        resizeMode="contain"
        source={require("../assets/logo.png")}
      ></Image>
      <View style={styles.form}>
        <View style={styles.inputWrapper}>
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
          <TextInput
            value={confPass}
            onChangeText={(confPassword) => setConfPass(confPassword)}
            placeholder={"Repeat Password"}
            secureTextEntry={true}
            style={styles.input}
          />
        </View>
        <View style={styles.btnWrapper}>
          <Button
            title={"Register"}
            style={styles.input}
            onPress={() => register()}
          />
          <Button
            title="Go to Register"
            onPress={() => navigation.navigate("MainScreen")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: "100%",
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  form: {
    backgroundColor: "#ebb2b2",
    padding: 15,
    borderRadius: 10,
  },
  inputWrapper: {
    height: 110,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingBottom: 15,
  },
  input: {
    backgroundColor: "white",
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 3,
  },
  btnWrapper: {
    display: "flex",
    flexDirection: "column",
    height: 90,
    justifyContent: "space-between",
  },
});
