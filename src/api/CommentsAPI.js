import { firestore } from "fbase/Fbase";
import store from "store/store";
import timeChanger from "tools/TimeChange";

const CommentsAPI = {
  getComments: async () => {
    try {
      const arr = [];
      const commentsRef = await firestore
        .collection("comments")
        .orderBy("date")
        .get();
      const comments = await commentsRef.forEach((c) => arr.push(c.data()));
      return arr;
    } catch (err) {
      return null;
    }
  },
  getCommentUserID: async (id) => {
    try {
      //user collection
      let findUser = null; //해당 id값을 갖고 있는 user 정보 db에서 찾아오기
      const usersRef = await firestore
        .collection("users")
        .where("user_id", "==", id)
        .get();
      const user = await usersRef.forEach((data) => {
        findUser = data.data();
      });
      return findUser;
    } catch (err) {
      console.log(err);
      return null;
    }
  },
  createComment: (str) => {
    //이 댓글을 작성한 user 정보(store.getState())
    //str : 작성 댓글 text
    const date = timeChanger.nowTOutc();

    const user_id = store.getState().userInfo.id ?? "3"; //user_id값을 store 내 state로 관리해야 함
    const rndNum = Math.floor(Math.random() * 1000) + 3;
    const newComment = firestore
      .collection("comments")
      .doc(`comment_${rndNum}`)
      .set({
        date,
        comment_id: rndNum,
        content: str,
        post_id: "1", //해당 포스팅 id
        user_id, //
      })
      .then(() => console.log("success!!!"))
      .catch((err) => console.log(`we fail to create new comment ${err}`));
  },
  deleteComment: (commentID) => {
    firestore
      .collection("comments")
      .doc(`comment_${commentID}`)
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
