import React, { useState, useRef, useEffect, useCallback } from "react";
import store from "store/store";
import {
  Background,
  ModalContent,
  ModalImg,
  ModalWrapper,
  CloseModalButton,
} from "styles/MyprofileModalElements";
import ProfileAPI from "api/ProfileAPI";
import { storage } from "fbase/Fbase";
import { v4 } from "uuid";

export const MyProfileModal = ({
  greeting,
  userThumbnail,
  showModal,
  setShowModal,
  userInfo,
}) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  //페이지 새로고침 시, username 소실되는 경우, 전체 state 변경 후 다시 한 번 username 업데이트
  const unsubscribe = useCallback(() => {
    store.subscribe(() => {
      const { name } = store.getState().userInfo;
      setInputs((prev) => ({ ...prev, username: name }));
    });
  });

  // input value값 데이터에 저장
  const [inputs, setInputs] = useState({
    username: "",
    say: "",
  });

  useEffect(() => {
    setInputs((prev) => ({
      ...prev,
      username: userInfo?.name || store.getState().userInfo.name,
      say: greeting ?? "",
    }));
    setFileUrl(userThumbnail);
    return () => {
      unsubscribe();
      setInputs(null);
      setFileUrl(null);
    };
  }, [greeting, userThumbnail, userInfo]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  // image 미리보기
  const [fileUrl, setFileUrl] = useState(userThumbnail);
  const [isThumb, setThumbnail] = useState(null);

  //텍스트 데이터 변경 여부(닉네임 또는 say문구)
  const [isText, setText] = useState(false);
  //form 전송
  const [isSubmit, setSubmit] = useState(false);

  const processImage = (e) => {
    const imageFile = e.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setFileUrl(imageUrl);
    setInputs((prev) => ({ ...prev, thumbnail: imageFile }));
  };

  //수정한 사용자 정보 DB에 저장하는 코드 구현
  const onHandleSubmit = (e) => {
    const uploadData = async () => {
      if (inputs.thumbnail) {
        const storageRef = storage.ref();
        const imgName = v4();
        const mountainImagesRef = storageRef.child(`images/${imgName}`);
        const uploadTask = mountainImagesRef.put(inputs.thumbnail);
        await uploadTask.on(
          "state_changed",
          (snapshot) => {
            console.log("loading...");
          },
          (err) =>
            alert("사진 업로드에 실패했습니다. 기본 이미지로 저장됩니다."),
          (complete) => {
            uploadTask.snapshot.ref
              .getDownloadURL()
              .then(function (downloadURL) {
                setThumbnail(downloadURL);
              });
          }
        );
      } else {
        setText((prev) => !prev);
      }
    };
    uploadData();
    setSubmit(true);
    setShowModal(false);
  };

  //이미지를 안 바꾸더라도 데이터 업데이트 할 수 있도록 코드 수정 필요
  useEffect(() => {
    if (isSubmit) {
      ProfileAPI.createProfileDB(inputs, isThumb, userInfo);
    }
  }, [isThumb]);

  useEffect(() => {
    if (isSubmit) {
      ProfileAPI.createProfileDB(inputs, isThumb, userInfo);
    }
  }, [isText]);

  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <ModalWrapper showModal={showModal}>
            <ModalImg src={fileUrl} alt="profile_image" id="photoInput" />
            <ModalContent>
              <h1>프로필 변경</h1>
              <label>
                이름
                <input
                  type="text"
                  name="username"
                  placeholder="이름"
                  value={inputs.username}
                  onChange={onChange}
                />
              </label>
              <label>
                하고 싶은 말
                <input
                  type="text"
                  name="say"
                  placeholder="하고싶은 말"
                  value={inputs.say}
                  onChange={onChange}
                />
              </label>
              <label>
                프로필 이미지
                <input
                  type="file"
                  name="userphoto"
                  className="photo"
                  id="photoInput"
                  onChange={processImage}
                  accept="image/*"
                />
              </label>
              <button type="submit" value="저장하기" onClick={onHandleSubmit}>
                저장하기
              </button>
            </ModalContent>
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
            />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};
