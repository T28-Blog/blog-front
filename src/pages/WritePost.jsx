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
  ThumbInput,
  ThumbInputLabel,
  Progress,
  ThumbContainer,
} from "styles/EditorElements";
import ScrollToTop from "components/ScrollToTop";
import store from "store/store";
import PostDB from "api/PostDB";
import GoogleMapComponent from "../components/GoogleMap";

import TokenAPI from "api/TokenAPI";
import Modal from "components/Modal";
import { useRef } from "react";

import { useHistory } from "react-router-dom";
import { storage } from "fbase/Fbase";
import { v4 } from "uuid";

export default function WritePost() {
  const [title, setTitle] = useState("");
  const [contentEditor, setContentEditor] = useState();
  const [onlyText, setOnlyText] = useState(""); //editor 내 text만 추출하기
  const [hashtagArr, setHashtagArr] = useState([]);
  const [isModal, setShowModal] = useState(false);

  //포스팅 썸네일 관련 state 변수들
  const [imgName, setImgName] = useState("");
  const [imgURL, setImgURL] = useState(null);
  const [persentage, setPersentage] = useState(0);
  const imgRef = useRef(null);

  const history = useHistory();

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async () => {
    let img =
      imgURL ||
      "https://images.unsplash.com/photo-1624380779294-5376549277ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80";

    const { name } = store.getState().userInfo;
    if (!title && !contentEditor) {
      alert("제목 및 내용을 입력하세요");
    } else if (!title) {
      alert("제목을 입력하세요");
    } else if (!contentEditor) {
      alert("내용을 입력하세요");
    } else {
      PostDB.createPostDB(
        name,
        title,
        contentEditor,
        hashtagArr,
        onlyText,
        img
      );
      history.push("/");
    }
  };

  const handleTempSaveSubmit = () => {
    let url = ""; //이미지 썸네일 임시저장 시, default 이미지값 빈 string
    if (imgURL) {
      url = imgURL;
    }

    const { name } = store.getState().userInfo;
    if (!title && !contentEditor) {
      alert("제목 및 내용을 입력하세요");
    } else if (!title) {
      alert("제목을 입력하세요");
    } else if (!contentEditor) {
      alert("내용을 입력하세요");
    } else {
      PostDB.savePostDB(name, title, contentEditor, hashtagArr, onlyText, url);
    }
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

  //이미지가 등록되면 firebase storage에 File 객체를 업로드하고 사용 가능한 resource url을 받아서 DB에 저장
  const onHandleImgChange = async (e) => {
    const selectedFile = imgRef.current.files;
    if (selectedFile.length) {
      const storageRef = storage.ref();

      // Create a reference to 'images/mountains.jpg'
      const imgName = v4();
      const mountainImagesRef = storageRef.child(`images/${imgName}`);
      const uploadTask = mountainImagesRef.put(selectedFile[0]);
      await uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setPersentage(progress);
        },
        (err) => alert("사진 업로드에 실패했습니다. 기본 이미지로 저장됩니다."),
        (complete) => {
          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            setImgURL(downloadURL);
            setImgName(selectedFile[0].name);
          });
        }
      );
    }
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
          setOnlyText={setOnlyText}
        ></TinyEditor>
        <ThumbContainer>
          <ThumbInputLabel for="inputImg">커버 이미지 업로드</ThumbInputLabel>
          <ThumbInput
            type="file"
            name="thumbimg"
            className="thumbimg"
            accept="image/*"
            id="inputImg"
            ref={imgRef}
            onChange={onHandleImgChange}
          />
          {persentage > 0 && (
            <Progress>
              {persentage === 100
                ? `업로드 완료! 선택하신 이미지는 ${imgName}입니다.`
                : "이미지 업로딩...⏱"}
            </Progress>
          )}
        </ThumbContainer>
        <BottomWrapper>
          <HashtagWrapper>
            {hashtagArr.map((hashtag, idx) => {
              return (
                <span key={idx}>
                  <span>#{hashtag} </span>
                  <FaTimes
                    style={{ fill: "gray", marginRight: "0.2em" }}
                    onClick={() => onHashtagRemove(hashtag)}
                  />
                </span>
              );
            })}
            <HashtagTempText>#</HashtagTempText>
            <HashtagInput onKeyPress={onHashtagEnter}></HashtagInput>
          </HashtagWrapper>
          <ButtonWrapper>
            <Button type="button" onClick={handleTempSaveSubmit}>
              임시저장
            </Button>
            <Button type="button" onClick={handleSubmit}>
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
