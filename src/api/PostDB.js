import { firebaseInstance } from "fbase/Fbase";
import axios from "axios";
import { v4 } from "uuid";
import timeChanger from "tools/TimeChange";
import store from "store/store";
import config from "../config";

const PostDB = {
  createPostDB: async (name, title, content, hashtag, text, img) => {
    const { uid } = store.getState().userInfo;
    const post_id = v4();
    const res = await axios({
      method: "post",
      url: `${config.IP_ADDRESS}:4000/posts`,
      params: {
        content,
        date: timeChanger.nowTOutc(),
        hashtag,
        hits: 0,
        img,
        name,
        post_id,
        title,
        user_id: uid,
        text,
      },
    }).catch((error) => {
      console.log(error);
    });
    return res.data;
  },
  savePostDB: async (name, title, content, hashtag, img, imgName) => {
    const { uid } = store.getState().userInfo;
    const res = await axios({
      method: "post",
      url: `${config.IP_ADDRESS}:4000/temp_post`,
      params: {
        content,
        hashtag,
        img,
        imgName,
        name,
        title,
        user_id: uid,
      },
    }).catch((error) => {
      console.log(error);
    });
    return res.data;
  },
  fetchTempPost: async () => {
    try {
      const { uid } = store.getState().userInfo;
      let post = null;
      const ref = await firebaseInstance.database().ref("temp_post").get();
      await ref.forEach((data) => {
        if (data.val().user_id === uid) post = data.val();
      });
      return post;
    } catch (e) {
      return null;
    }
  },
  deleteTempPost: async () => {
    try {
      const { uid } = store.getState().userInfo;
      await firebaseInstance.database().ref(`temp_post/post_${uid}`).remove();
    } catch (e) {
      return null;
    }
  },
  fetchMyPosts: async () => {
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
