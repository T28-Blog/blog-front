import React, { useState, useEffect } from "react";
import TinyEditor from "components/TinyEditor";
import { FaTimes } from "react-icons/fa";
import {
  EditorWrapper,
  TitleArea,
  HashtagWrapper,
  HashtagTempText,
  HashtagInput,
  ButtonWrapper,
  Button,
  BottomWrapper,
  PageTitle,
} from "styles/EditorElements";
import ScrollToTop from "components/ScrollToTop";
import store from "store/store";
import TokenAPI from "api/TokenAPI";
import Modal from "components/Modal";
// import PostDB from 'api/PostDB';

export default function WritePost() {
  const [title, setTitle] = useState("");
  const [contentEditor, setContentEditor] = useState();
  const [hashtagArr, setHashtagArr] = useState([]);
  const [isModal, setShowModal] = useState(false);

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = () => {
    // PostDB.createPostDB(title, contentEditor, hashtagArr);
    console.log("handle submit", title, contentEditor, hashtagArr);
  };

  const onHashtagEnter = (e) => {
    if (e.code === "Enter") {
      setHashtagArr([...hashtagArr, e.target.value]);
      e.target.value = "";
    }
  };

  const onHashtagRemove = (hashtag) => {
    setHashtagArr(hashtagArr.filter((elem) => hashtag !== elem));
  };

  useEffect(() => {
    const { uid } = store.getState().userInfo;
    TokenAPI.checkValidation(uid)
      .then((obj) => {
        const { modal } = obj;
        if (modal) {
          setShowModal(true);
          TokenAPI.clearJWT();
        }
      })
      .catch((err) => {
        //console.log(err);
      });
  }, []);

  return (
    <>
      <EditorWrapper>
        <PageTitle>
          블로그 글쓰기
          <hr />
        </PageTitle>
        <TitleArea onChange={onTitleChange}></TitleArea>
        <TinyEditor
          contentEditor={contentEditor}
          setContentEditor={setContentEditor}
        ></TinyEditor>
        <BottomWrapper>
          <HashtagWrapper>
            {hashtagArr.map((hashtag) => {
              return (
                <>
                  <span>#{hashtag} </span>
                  <FaTimes
                    style={{ fill: "gray", marginRight: "0.2em" }}
                    onClick={() => onHashtagRemove(hashtag)}
                  />
                </>
              );
            })}
            <HashtagTempText>#</HashtagTempText>
            <HashtagInput onKeyPress={onHashtagEnter}></HashtagInput>
          </HashtagWrapper>
          <ButtonWrapper>
            <Button type="button">임시저장</Button>
            <Button type="button" onClick={handleSubmit}>
              저장
            </Button>
          </ButtonWrapper>
        </BottomWrapper>
      </EditorWrapper>
      <ScrollToTop />
      {isModal && (
        <Modal
          title="로그인 유효시간 종료"
          desc="로그인 유지 시간이 종료되었습니다.<br>다시 로그인해주세요."
        />
      )}
    </>
  );
}
