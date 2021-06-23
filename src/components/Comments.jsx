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
  highlight,
} from "styles/CommentElements";
import CommentUser from "./CommentUser";
import store from "store/store";
import Modal from "components/Modal";

const Comments = () => {
  const [comments, setComments] = useState(null); //기존에 달린 댓글
  const [error, setError] = useState(false); //댓글 불러오기 실패 시 에러 처리
  const [loading, setLoading] = useState(true); //댓글 로딩 상태
  const [refs, setRefs] = useState([]);
  const [first, setNext] = useState(true);
  const [isModal, setShowModal] = useState(false);
  const textArea = useRef(null); //새 댓글 생성 창

  useEffect(() => {
    if (first) {
      //무한 데이터 call 막기
      getComments();
      setNext(false);
    }
    if (comments && comments.length > 0) {
      for (let a of comments) {
        setRefs((prev) => [...prev, React.createRef()]);
      }
    }
  }, [comments]);

  //기존 댓글 DB에서 불러오는 함수
  const getComments = () => {
    const res = CommentsAPI.getComments();
    if (res) {
      res
        .then((data) => {
          setComments(data);
        })
        .catch((e) => {
          console.log(e);
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  //포스트 생성 확인 버튼 핸들링 함수
  const onSubmitComment = async (e) => {
    const { isLogin } = store.getState().userInfo;
    if (isLogin) {
      const texts = textArea.current.value;
      await CommentsAPI.createComment(texts);
      textArea.current.value = "";
      getComments();
    }
  };
  //로그인 한 유저만 댓글 작성 가능
  const checkLogin = (e) => {
    const { isLogin } = store.getState().userInfo;
    if (!isLogin) {
      setShowModal(true);
    }
  };

  return (
    <Section>
      <InputContainer>
        <TextArea
          ref={textArea}
          placeholder="새 댓글을 작성해보세요!"
          onFocus={checkLogin}
        />
        <SubmitBtn onClick={onSubmitComment}>확인</SubmitBtn>
      </InputContainer>
      <CommentContainer>
        {error ? (
          <>
            <CommentTitle></CommentTitle>
            <div style={{ width: "100%" }}>
              <hr style={hr} />
              <CommentBox>댓글을 불러오는 데 실패했습니다.</CommentBox>
            </div>
          </>
        ) : loading ? (
          <CommentTitle>...loading...</CommentTitle>
        ) : (
          <>
            <CommentTitle>
              댓글{" "}
              <span style={highlight}>{comments ? comments.length : 0}</span>개
            </CommentTitle>
            {comments &&
              comments.map((comment, idx) => (
                <div key={comment.comment_id} style={{ width: "100%" }}>
                  <hr style={hr} />
                  <CommentBox>
                    <CommentUser
                      commentID={comment.comment_id}
                      userID={comment.user_id}
                      date={comment.date}
                      refs={refs[idx]}
                      texts={comment.content}
                      onHandleComments={getComments}
                    ></CommentUser>
                  </CommentBox>
                  {idx === comments.length - 1 && <hr style={hr} />}
                </div>
              ))}
          </>
        )}
      </CommentContainer>
      {isModal && (
        <Modal
          title="로그인 필요"
          desc={"로그인 후 이용 가능합니다.<br> 로그인을 해주세요."}
          reopenFn={setShowModal}
        ></Modal>
      )}
    </Section>
  );
};

export default Comments;
