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
  EditContainer,
} from "styles/CommentElements";
import timeChanger from "tools/TimeChange";
import CommentTexts from "./CommentTexts";

const CommentUser = ({
  commentID,
  userID,
  date,
  refs,
  texts,
  onHandleComments,
}) => {
  const { name, thumbnail } = store.getState().userInfo;
  const [userName, setUserName] = useState(name);
  const [userThumbnail, setUserThumbnail] = useState(thumbnail);
  const [isEditing, setEdit] = useState(false);
  const [contents, setContents] = useState(texts);

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
    onHandleComments();
  };

  const onHandleEdit = (e) => {
    setEdit((state) => !state);
    if (isEditing) {
      CommentsAPI.editComment(contents, commentID);
    }
  };

  const onHandleChange = (e) => {
    setContents(e.target.value);
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
              <EditBtn onClick={onHandleEdit}>
                {isEditing ? "완료" : "수정"}
              </EditBtn>
              <DeleteBtn onClick={onHandleDelete}>삭제</DeleteBtn>
            </div>
          )}
        </div>
        {isEditing ? (
          <EditContainer
            defaultValue={JSON.stringify(contents).slice(
              1,
              JSON.stringify(contents).length - 1
            )}
            onChange={onHandleChange}
          />
        ) : (
          <CommentTexts ref={refs} texts={contents}></CommentTexts>
        )}
      </div>
    </>
  );
};

export default CommentUser;
