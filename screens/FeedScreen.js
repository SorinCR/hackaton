import { View, Text, Button } from "react-native";

import styles from "../styles/Feed";

export function FeedScreen() {
  // const req = async () => {
  //   console.log(0);
  //   const resp = await fetch("http://192.168.251.64:3000/test");
  //   const _resp = await resp.json();
  //   console.log(_resp);
  // };
  return (
    <View style={styles.container}>
      <View style={styles.userBar}>
        <View style={styles.banner}>
          <View style={styles.bannerFlag}></View>
        </View>
        <View style={styles.userAvatarWrapper}>
          <View style={styles.userAvatar}></View>
          <ScrollView>
            <Text style={styles.userTags}>
              #item #item #item #item#item #item #item #item#item #item #item
            </Text>
          </ScrollView>
        </View>
      </View>
      <Text style={styles.text}>Home!</Text>
    </View>
  );
}
