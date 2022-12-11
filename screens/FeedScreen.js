import { View, Text, Button } from "react-native";

import styles from "../styles/Feed";
import { Post } from "../components/Post";
import { ScrollView } from "react-native-gesture-handler";
import { useEffect, useState } from "react";

export function FeedScreen() {
  const [posts, setPosts] = useState([]);
  const [fetched, setFetched] = useState([]);

  // const user = { username: "Sorin" };

  useEffect(() => {
    mapAllPosts();
  }, []);

  useEffect(() => {});

  const mapAllPosts = async () => {
    const resp = await fetch("http://192.168.251.64:3000/getPosts", {
      method: "POST",
      headers: {
        authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlNvcmluIiwiaWF0IjoxNjcwNzU2NzMwfQ.cvriyfagQWHR19sJMj-XQBIqWSxbxgx7NiyZgacKZX4",
      },
    });

    const _resp = await resp.json();
    setFetched(_resp.post);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{ padding: "3%" }}>
        {fetched.map((post) => (
          <Post
            user={post.user}
            title={post.title}
            tags={post.tags}
            plus={post.plus}
            description={post.description}
            key={post._id}
            attachment={post.attachment}
            id={post._id}
          />
        ))}
      </ScrollView>
    </View>
  );
}
