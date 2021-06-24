import { firebaseInstance } from "fbase/Fbase";
import axios from "axios";
import { v4 } from "uuid";
import timeChanger from "tools/TimeChange";
import store from "store/store";

const PostDB = {
  createPostDB: async (name, title, content, hashtag, text, img) => {
    const uuid = firebaseInstance.auth().currentUser.uid;
    const post_id = v4();
    const res = await axios({
      method: "post",
      url: `http://localhost:4000/posts`,
      params: {
        content,
        date: timeChanger.nowTOutc(),
        hashtag,
        hits: 0,
        img: "https://images.unsplash.com/photo-1621570273800-1b50b0173a97?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
        name,
        post_id,
        title,
        user_id: uuid,
        text,
      },
    }).catch((error) => {
      console.log(error);
    });
    return res.data;
  },
  savePostDB: async (name, title, content, hashtag, text) => {
    const uuid = firebaseInstance.auth().currentUser.uid;
    const post_id = v4();
    const res = await axios({
      method: "post",
      url: `http://localhost:4000/temp_post`,
      params: {
        content,
        date: timeChanger.nowTOutc(),
        hashtag,
        hits: 0,
        img,
        name,
        post_id,
        title,
        user_id: uuid,
        text,
      },
    }).catch((error) => {
      console.log(error);
    });
    return res.data;
  },
  fetchMyPosts: async (count) => {
    try {
      const { uid } = store.getState().userInfo;
      const posts = [];
      const ref = await firebaseInstance
        .database()
        .ref("posts")
        .orderByChild("user_id")
        .equalTo(uid)
        .get();
      await ref.forEach((data) => {
        posts.push(data.val());
      });
      return posts.sort((a, b) => b.date - a.date);
    } catch (e) {
      return null;
    }
  },
};

export default PostDB;
