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
import CommentTexts from "./CommentTexts";

const CommentUser = ({ id, date, thumbnail, refs, texts }) => {
  const [userName, setUserName] = useState(null);

  const {
    userInfo: { name },
  } = store.getState();

  useEffect(() => {
    const res = CommentsAPI.getCommentUserID(id);
  }, []);

  return (
    <>
      <Thumbnail img={thumbnail}></Thumbnail>
      <div style={commentTexts}>
        <div>
          <ID>{id}</ID>
          <Date>{date}</Date>
          {id === name && (
            <div style={btns}>
              <EditBtn>수정</EditBtn>
              <DeleteBtn>삭제</DeleteBtn>
            </div>
          )}
        </div>
        <CommentTexts ref={refs} texts={texts}></CommentTexts>
      </div>
    </>
  );
};

export default CommentUser;
