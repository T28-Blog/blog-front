import React, { useState } from "react";
import TinyEditor from 'components/TinyEditor';
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
  PageTitle
} from 'styles/EditorElements';

export default function WritePost() {
  const [title, setTitle] = useState("");
  const [contentEditor, setContentEditor] = useState();
  const [hashtagArr, setHashtagArr] = useState([]);
  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = () => {
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

  return (
    <>
      <EditorWrapper>
        <PageTitle>블로그 글쓰기<hr /></PageTitle>
        <TitleArea onChange={onTitleChange}></TitleArea>
        <TinyEditor contentEditor={contentEditor} setContentEditor={setContentEditor} ></TinyEditor>
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
    </>
  );
}
