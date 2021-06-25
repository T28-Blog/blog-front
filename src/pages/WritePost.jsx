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
  ThumbInput
} from "styles/EditorElements";
import ScrollToTop from "components/ScrollToTop";
import store from "store/store";
import PostDB from "api/PostDB";
import GoogleMapComponent from "../components/GoogleMap"

import TokenAPI from "api/TokenAPI";
import Modal from "components/Modal";

import { useHistory } from "react-router-dom";

export default function WritePost() {
  const [title, setTitle] = useState("");
  const [contentEditor, setContentEditor] = useState();
  const [onlyText, setOnlyText] = useState(""); //editor 내 text만 추출하기
  const [hashtagArr, setHashtagArr] = useState([]);
  const [isModal, setShowModal] = useState(false);

  const history = useHistory();

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSaveSubmit = () => {
    const { name } = store.getState().userInfo;
    if (!title && !contentEditor) {
      alert("제목 및 내용을 입력하세요");
    } else if (!title) {
      alert("제목을 입력하세요");
    } else if (!contentEditor) {
      alert("내용을 입력하세요");
    } else {
      PostDB.createPostDB(name, title, contentEditor, hashtagArr, onlyText);
      history.push('/my-blog');
    }
  };

  const handleTempSaveSubmit = () => {
    const { name } = store.getState().userInfo;
    if (!title && !contentEditor) {
      alert("제목 및 내용을 입력하세요");
    } else if (!title) {
      alert("제목을 입력하세요");
    } else if (!contentEditor) {
      alert("내용을 입력하세요");
    } else {
      PostDB.savePostDB(name, title, contentEditor, hashtagArr, onlyText);
    }
  }

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
            nlyText={onlyText}
            setOnlyText={setOnlyText}></TinyEditor>
        <ThumbInput
            type="file"
            name="thumbimg"
            className="thumbimg"
            accept="image/*"
        />
        <BottomWrapper>
          <HashtagWrapper>
            {hashtagArr.map((hashtag, idx) => {
              return (
                <>
                  <span>#{hashtag} </span>
                  <FaTimes
                    key={idx}
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
            <Button type="button" onClick={handleTempSaveSubmit}>
              임시저장
            </Button>
            <Button type="button" onClick={handleSaveSubmit}>
              저장
            </Button>
          </ButtonWrapper>
        </BottomWrapper>
        <GoogleMapComponent />
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
