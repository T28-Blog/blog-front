import { firestore } from "fbase/Fbase";
import store from "store/store";

const CommentsAPI = {
  getComments: async () => {
    try {
      const arr = [];
      const commentsRef = await firestore.collection("comments").get();
      const comments = await commentsRef.forEach((c) => arr.push(c.data()));
      return arr;
    } catch (err) {
      return err;
    }
  },
  getCommentUserID: async (id) => {
    try {
      //user collection
      const usersRef = await firestore.collection("users").get();
      const user = await usersRef.where("user_id", "==", id);
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  },
  createComment: (str) => {
    //이 댓글을 작성한 user 정보(store.getState())
    //str : 작성 댓글 text
    const user_id = store.getState().userInfo.id ?? "2"; //user_id값을 store 내 state로 관리해야 함
    const rndNum = Math.floor(Math.random() * 1000);
    const newComment = firestore
      .collection("comments")
      .doc(`comment_${rndNum}`)
      .set({
        comment_id: rndNum,
        content: str,
        post_id: "2", //해당 포스팅 id
        user_id, //
      })
      .then(() => console.log("success!!!"))
      .catch((err) => console.log(`we fail to create new comment ${err}`));
  },
  deleteComment: (postID) => {
    firestore
      .collection("comments")
      .doc(`post_${postID}`)
      .delete()
      .then(
        () => {
          console.log("delete!!");
        },
        (err) => console.log("fail to delete document")
      );
  },
};

export default CommentsAPI;
