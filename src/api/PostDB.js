import { firebaseInstance } from 'fbase/Fbase';
import axios from "axios";
import { v4 } from "uuid";
import timeChanger from "tools/TimeChange";

const PostDB = {
  // getName: async () => {
  //   const uuid = firebaseInstance.auth().currentUser.uid;
  //   const res = await axios({
  //     method: "get",
  //     url: `http://localhost:4000/users`,
  //     params: {
  //       user_id: uuid
  //     },
  //   });
  //   console.log("Data:", res.data);
  //   return res.data;
  // },
  createPostDB: async (name, title, content, hashtag) => {
    //서버에 유저 생성 요청 call
    const uuid = firebaseInstance.auth().currentUser.uid;
    // const name = await firebaseInstance.database().ref(`/users/user_${uuid}`).get();
    // const name = PostDB.getName()
    // console.log("here", uuid, name);
    console.log('hashtag', hashtag);
    const post_id = v4();
    const res = await axios({
      method: "post",
      url: `http://localhost:4000/posts`,
      params: {
        content,
        date: timeChanger.nowTOutc(),
        desc: 'blog',
        hashtag,
        hits: 1,
        img: 'temp',
        name,
        post_id,
        title,
        user_id: uuid,
      },
    });
    return res.data;
  },
}

export default PostDB;