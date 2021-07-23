import React, { useState, useEffect } from "react";
import {
  DetailContainer,
  DetailHeader,
  DetailTitle,
  DetailInfo,
  DetailImg,
  DetailWriter,
  DetailDate,
  DetailHits,
  DetailBody,
} from "styles/DetailPostElements";
import { FaEye } from "react-icons/fa";
import nature from "../assets/nature4.jpeg";
import profile from "../assets/woman.jpg";
import Comments from "../components/Comments";
import TokenAPI from "api/TokenAPI";
import store from "store/store";
import Modal from "components/Modal";
import { firebaseInstance } from "fbase/Fbase";
import { useHistory } from "react-router-dom";
import timeChanger from "tools/TimeChange";
import CommentsAPI from "api/CommentsAPI";

const DetailPost = () => {
  const { name, uid, isLogin, jwt } = store.getState().userInfo;
  const [isModal, setShowModal] = useState(false);
  const [postID, setPostID] = useState(null);
  const [postInfo, setPostInfo] = useState(null);
  const [writer, setWriter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const {
    location: { pathname },
  } = useHistory();

  useEffect(() => {
    setPostID(pathname.slice(12));
    if (isLogin && !jwt) {
      //로그인일 때 jwt 발급
      TokenAPI.getJWT(uid, name);
    } else {
      TokenAPI.checkValidation(uid)
        .then((obj) => {
          if (obj) {
            const { modal } = obj;
            if (modal) {
              setShowModal(true);
              TokenAPI.clearJWT();
            }
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    try {
      const result = await firebaseInstance
        .database()
        .ref(`posts/post_${postID}`)
        .get();
      setPostInfo(result.val());
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [postID]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    if (postInfo) {
      const user = await CommentsAPI.getCommentUserID(postInfo.user_id);
      setWriter(user?.thumbnail);
    }
  }, [postInfo]);

  return error ? (
    <DetailContainer>복구 중입니다.. 🙇‍♂️</DetailContainer>
  ) : loading || !postInfo ? (
    <DetailContainer>⏱</DetailContainer>
  ) : (
    <>
      <DetailContainer>
        <DetailHeader>
          <DetailTitle>{postInfo.title}</DetailTitle>
          <DetailInfo>
            <DetailImg
              img="img"
              src={
                writer ||
                "https://firebasestorage.googleapis.com/v0/b/team28blog-1e912.appspot.com/o/images%2F127975f0-d0bc-4582-beef-bc723ce21e59?alt=media&token=a8bd1fe8-e48c-4ddc-bd87-40a96b28b2e3"
              }
              alt="profile_image"
            ></DetailImg>
            <DetailWriter>{postInfo.name}</DetailWriter>
            <DetailDate>{timeChanger.utcTOnow(postInfo.date)}</DetailDate>
            {/* <DetailHits>
              <FaEye />
              {postInfo.hits}
            </DetailHits> */}
          </DetailInfo>
          <hr />
        </DetailHeader>
        <DetailBody>
          <img
            src={postInfo.img}
            alt="text"
            width="100%"
            height="500px"
            object-fit="cover"
          />
          <p dangerouslySetInnerHTML={{ __html: postInfo.content }}></p>
          <hr />
        </DetailBody>
        <Comments postID={postInfo.post_id} />
      </DetailContainer>
      {isModal && (
        <Modal
          title="로그인 유효시간 종료"
          desc="로그인 유지 시간이 종료되었습니다.<br>다시 로그인해주세요."
        />
      )}
    </>
  );
};

export default DetailPost;
