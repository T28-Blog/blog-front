import React, { useState, useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import { FaBolt } from "react-icons/fa";
import store from "store/store";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;

  label {
    display: inline-inline-block;
    font-size: 12px;
    color: #6c757d;
  }

  input {
    display: flex;
    width: 250px;
    margin-bottom: 1rem;
    padding-left: 10px;
    font-size: 16px;
  }

  .photo {
    padding-left: 0;
    margin-bottom: 50px;
  }

  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(FaBolt)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const MyProfileModal = ({ showModal, setShowModal }) => {
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
  const unsubscribe = store.subscribe(() => {
    const { name } = store.getState().userInfo;
    setInputs((prev) => ({ ...prev, username: name }));
  });

  // input value값 데이터에 저장
  const [inputs, setInputs] = useState({
    username: store.getState().userInfo.name,
    say: "",
    thumnail: "",
  });

  useEffect(() => {
    return () => {
      unsubscribe();
      setInputs(null);
    };
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  // image 미리보기
  const [fileUrl, setFileUrl] = useState(null);

  const processImage = (e) => {
    const imageFile = e.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setFileUrl(imageUrl);
    setInputs((prev) => ({ ...prev, thumnail: imageFile }));
  };

  //수정한 사용자 정보 DB에 저장하는 코드 구현
  const onHandleSubmit = (e) => {
    console.log(inputs);
  };

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
