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
        desc: "blog",
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
