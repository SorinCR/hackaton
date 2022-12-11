import { View, Text, Button, Image } from "react-native";

import styles from "../styles/Feed";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";

export function Post({ user, tags, title, plus, description, attachment, id }) {
  // console.log(user);
  // console.log(title);
  // useEffect(() => {
  //   tagsString = "";
  //   tags.forEach((tag) => {
  //     tagsString += tag;
  //   });
  //   setTags(tagsString);
  // });

  const [pluses, setPluses] = useState(plus);
  const [plused, setPlused] = useState(true);

  const [fTags, setTags] = useState("");

  const plusPost = () => {
    console.log(0);
    setPluses(pluses + (plused ? 1 : -1));
    setPlused(!plused);
    // action = plused ? 1 : -1;
    // const resp = await fetch("http://192.168.251.64:3000/plusPost", {
    //   method: "POST",
    //   headers: {
    //     authorization:
    //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlNvcmluIiwiaWF0IjoxNjcwNzU2NzMwfQ.cvriyfagQWHR19sJMj-XQBIqWSxbxgx7NiyZgacKZX4",
    //   },
    //   body: JSON.stringify({
    //     id: id,
    //     action: action,
    //   }),
    // });
  };

  useEffect(() => {
    let tString = "";
    tags.map((t) => {
      tString += `#${t}`;
      console.log(t);
    });
    setTags(tString);
    // console.log(tags);
  });

  return (
    <View style={styles.container}>
      <View style={styles.userBar}>
        <View style={styles.banner}>
          <View style={styles.bannerFlag}></View>
        </View>
        <View style={styles.userInfo}>
          <View style={styles.userAvatar}></View>
          <Text style={styles.userName}>{user.username}</Text>
          <Text style={styles.userTags}>{fTags}</Text>
        </View>
      </View>
      <View style={styles.postWrapper}>
        <View style={styles.postImage}>
          <Image
            style={{ height: "100%" }}
            resizeMode="contain"
            source={{
              uri: attachment,
            }}
          />
        </View>
        <Text style={styles.postTitle}>{title}</Text>
        <View style={styles.postButtons}>
          <View
            style={{
              flex: 1,
              height: "100%",
              width: "30%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button title="+" onPress={() => plusPost()} />

            <Text
              style={{
                fontSize: 20,
                height: "100%",
                color: "#f0f0f0",
              }}
            >
              {pluses}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              height: "100%",
              width: "30%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AntDesign name="caretdown" size={15} color="white" />
          </View>
          <View
            style={{
              flex: 1,
              height: "100%",
              width: "30%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Feather name="send" size={15} color="white" />
          </View>
        </View>
      </View>
    </View>
  );
}
