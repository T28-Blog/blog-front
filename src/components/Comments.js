import CommentsAPI from "api/CommentsAPI";
import React, { useEffect, useRef, useState } from "react";
import {
  Section,
  InputContainer,
  TextArea,
  SubmitBtn,
  CommentContainer,
  CommentTitle,
  hr,
  CommentBox,
  commentTexts,
  Thumbnail,
  highlight,
} from "styles/CommentElements";
import CommentTexts from "./CommentTexts";
import CommentUser from "./CommentUser";

const Comments = () => {
  const [comments, setComments] = useState(null); //기존에 달린 댓글
  const [refs, setRefs] = useState([]);
  const textArea = useRef(null); //새 댓글 생성 창

  useEffect(() => {
    const res = CommentsAPI.getComments();
    setComments(res);
    if (comments && comments.length > 0) {
      for (let a of comments) {
        setRefs((prev) => [...prev, React.createRef()]);
      }
    }
  }, [comments]);

  const onSubmitComment = async (e) => {
    const texts = textArea.current.value;
    await CommentsAPI.createComment(texts);
  };

  return (
    <Section>
      <InputContainer>
        <TextArea
          ref={textArea}
          placeholder="지금 로그인하고 댓글을 작성해보세요!"
        />
        <SubmitBtn onClick={onSubmitComment}>확인</SubmitBtn>
      </InputContainer>
      <CommentContainer>
        <CommentTitle>
          댓글 <span style={highlight}>{comments ? comments.length : 0}</span>개
        </CommentTitle>
        {comments &&
          comments.map((comment, idx) => (
            <div key={comment.id} style={{ width: "100%" }}>
              <hr style={hr} />
              <CommentBox>
                <Thumbnail img={comment.thumbnail}></Thumbnail>
                <div style={commentTexts}>
                  <div>
                    <CommentUser
                      id={comment.nickname}
                      date={comment.date}
                    ></CommentUser>
                    <CommentTexts
                      ref={refs[idx]}
                      texts={comment.text}
                    ></CommentTexts>
                  </div>
                </div>
              </CommentBox>
              {idx === comments.length - 1 && <hr style={hr} />}
            </div>
          ))}
      </CommentContainer>
    </Section>
  );
};

export default Comments;
