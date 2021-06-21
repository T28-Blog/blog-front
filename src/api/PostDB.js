import { firebaseInstance } from "fbase/Fbase";
import axios from "axios";
import { v4 } from "uuid";
import timeChanger from "tools/TimeChange";

const PostDB = {
  createPostDB: async (name, title, content, hashtag) => {
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
        hits: 1,
        img: "temp",
        name,
        post_id,
        title,
        user_id: uuid,
      },
    })
    .catch((error) => {
      console.log(error);
    });
    return res.data;
  },
};

export default PostDB;
