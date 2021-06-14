import CommentsAPI from "api/CommentsAPI";
import React, { useEffect, useState } from "react";
import store from "store/store";
import {
  commentTexts,
  Thumbnail,
  ID,
  Date,
  EditBtn,
  DeleteBtn,
  btns,
} from "styles/CommentElements";
import timeChanger from "tools/TimeChange";
import CommentTexts from "./CommentTexts";

const CommentUser = ({ commentID, userID, date, refs, texts }) => {
  const [userName, setUserName] = useState(null);
  const [userThumbnail, setUserThumbnail] = useState(null);

  const {
    userInfo: { name },
  } = store.getState();

  useEffect(() => {
    const res = CommentsAPI.getCommentUserID(userID);
    if (!res) {
      setUserName("익명");
    } else {
      res
        .then((response) => {
          setUserName(response.name);
          setUserThumbnail(response.thumbnail);
        })
        .catch((err) => {
          console.log(err);
          setUserName("익명");
        });
    }
  }, []);

  const onHandleDelete = () => {
    CommentsAPI.deleteComment(commentID);
  };

  return (
    <>
      <Thumbnail img={userThumbnail}></Thumbnail>
      <div style={commentTexts}>
        <div>
          <ID>{userName}</ID>
          <Date>{timeChanger.utcTOnow(date)}</Date>
          {userName === name && (
            <div style={btns}>
              <EditBtn>수정</EditBtn>
              <DeleteBtn onClick={onHandleDelete}>삭제</DeleteBtn>
            </div>
          )}
        </div>
        <CommentTexts ref={refs} texts={texts}></CommentTexts>
      </div>
    </>
  );
};

export default CommentUser;
