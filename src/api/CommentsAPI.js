import { firebaseInstance } from "fbase/Fbase";
import { v4 } from "uuid";
import timeChanger from "tools/TimeChange";
import store from "store/store";

const CommentsAPI = {
  getComments: async (postID) => {
    try {
      const arr = [];
      const commentRef = await firebaseInstance
        .database()
        .ref("comments")
        .get();
      await commentRef.forEach((s) => {
        if (s.val().post_id === postID) {
          arr.push(s.val());
        }
      });
      return arr.sort((a, b) => +a.date - +b.date);
    } catch (err) {
      return null;
    }
  },
  getCommentUserID: async (id) => {
    try {
      const usersRef = await firebaseInstance
        .database()
        .ref(`users/user_${id}`)
        .get();
      const user = usersRef.val();
      return user;
    } catch (e) {
      return null;
    }
  },
  createComment: (str, postID) => {
    //이 댓글을 작성한 user 정보(store.getState())
    //str : 작성 댓글 text
    const date = timeChanger.nowTOutc();
    const {
      userInfo: { uid },
    } = store.getState();
    const uuid = v4();
    firebaseInstance
      .database()
      .ref(`comments/comment_${uuid}`)
      .set(
        {
          content: str,
          comment_id: `comment_${uuid}`,
          date: date,
          post_id: postID,
          user_id: uid,
        },
        (error) => {
          if (error) {
            alert("댓글 작성에 실패하였습니다.. 잠시 후 다시 시도해주세요.🙇‍♂️");
          }
        }
      );
  },
  deleteComment: (commentID) => {
    const commentRef = firebaseInstance
      .database()
      .ref(`comments/${commentID}`)
      .remove();
  },
  editComment: async (content, commentID) => {
    const current = await firebaseInstance
      .database()
      .ref(`comments/${commentID}`)
      .get();
    let field = await current.val();
    field = { ...field, content };
    firebaseInstance.database().ref(`comments/${commentID}`).update(field);
  },
};

export default CommentsAPI;
