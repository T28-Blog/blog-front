import React from "react";
import store from "store/store";
import { ID, Date, EditBtn, DeleteBtn, btns } from "styles/CommentElements";

const CommentTexts = ({ id, date }) => {
  const {
    userInfo: { name },
  } = store.getState();

  return (
    <div>
      <ID>{id}</ID>
      <Date>
        {date
          .trim()
          .split("-")
          .map((d) => `${d}.`)}
      </Date>
      {id === name && (
        <div style={btns}>
          <EditBtn>수정</EditBtn>
          <DeleteBtn>삭제</DeleteBtn>
        </div>
      )}
    </div>
  );
};

export default CommentTexts;
