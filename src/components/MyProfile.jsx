import React, { useEffect, useState } from "react";
import {
  MyProfileContainer,
  MyProfileImg,
  MyName,
  MyDesc,
  MySetting,
  WriteButton,
  WriteLink,
} from "styles/MyBlogElements";
import store from "store/store";
import ProfileAPI from "api/ProfileAPI";
import { MyProfileModal } from "./MyProfileModal";
import { useCallback } from "react";
import TokenAPI from "api/TokenAPI";

const MyProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState("");
  const [userThumbnail, setThumbnail] = useState("img/defaultThumbnail.jpg");
  const [greeting, setGreeting] = useState("");
  const [error, setError] = useState(false);

  const [userInfo, setUserInfo] = useState(null);

  const unsubscribe = useCallback(() => {
    store.subscribe(() => {
      const { name } = store.getState().userInfo;
      const { profile, thumbnail: img } = store.getState().profile;

      setUsername(() => name);
      if (profile) {
        setGreeting(() => profile);
      }
      if (img) {
        setThumbnail(() => img);
      }
    });
  });

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await ProfileAPI.getUserProfile();
      const { error: er, user } = res;
      const { name, thumbnail, say } = user;

      setUserInfo(user);
      if (er) {
        setError(true);
      } else {
        setUsername(name);
        if (thumbnail) {
          setThumbnail(thumbnail);
        }
        if (say) {
          setGreeting(say);
        }
      }
    };
    const { uid } = store.getState().userInfo;
    if (!uid) {
      TokenAPI.checkValidation();
    }
    fetchProfile();
    return () => {
      setThumbnail(null);
      setGreeting(null);
      unsubscribe();
    };
  }, [username]);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <MyProfileContainer>
      <MyProfileImg img src={userThumbnail} alt="profile_img"></MyProfileImg>
      <MyName>{username}</MyName>
      <MyDesc>{greeting || "프로필 내용을 설정해주세요."}</MyDesc>
      <WriteButton>
        <MySetting onClick={openModal}>프로필 수정</MySetting>
        <WriteLink to="/writepost">글쓰기</WriteLink>
      </WriteButton>
      <MyProfileModal
        greeting={greeting}
        userThumbnail={userThumbnail}
        showModal={showModal}
        setShowModal={setShowModal}
        userInfo={userInfo}
      />
    </MyProfileContainer>
  );
};

export default MyProfile;
