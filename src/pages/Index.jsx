import React, { useState, useEffect } from "react";
import { MainSlider, MainContainer } from "../styles/IndexElements";
import Slider from "components/Slider";
import "styles/slider.css";
import store from "store/store";
import TokenAPI from "api/TokenAPI";
import Modal from "components/Modal";
import { firebaseInstance } from "fbase/Fbase";
import LatestPosts from "components/LatestPosts";
import PopularPosts from "components/PopularPosts";
import {
  LoaderContainer,
  LoadingPlane,
  LoadingTitle,
} from "styles/PreLoaderElements";
import airplane from "../assets/airplane.png";

const Home = (props) => {
  const { name, uid, isLogin, jwt } = store.getState().userInfo;
  const [isLatest, setLatestPosts] = useState([]);
  const [isPopular, setPopularPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isModal, setShowModal] = useState(false);

  const getLatestPosts = async () => {
    try {
      const posts = [];
      await (
        await firebaseInstance
          .database()
          .ref(`posts`)
          .orderByChild("date")
          .limitToLast(7)
          .get()
      ).forEach((data) => {
        posts.push(data.val());
      });
      return posts.reverse();
    } catch (e) {
      setError(true);
    }
  };

  const getPopularPosts = async () => {
    try {
      const posts = [];
      await (
        await firebaseInstance
          .database()
          .ref(`posts`)
          .orderByChild("hits")
          .limitToLast(8)
          .get()
      ).forEach((data) => {
        posts.push(data.val());
      });
      return posts.reverse();
    } catch (e) {
      setError(true);
    }
  };

  useEffect(() => {
    Promise.all([getLatestPosts(), getPopularPosts()]).then((response) => {
      setLatestPosts(response[0]);
      setPopularPosts(response[1]);
      setLoading(false);
    });
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
    return () => {
      setLatestPosts(null);
      setPopularPosts(null);
    };
  }, []);

  return error ? (
    <LoadingTitle>복구 중입니다. 잠시만 기다려주세요 ... 🙇‍♂️</LoadingTitle>
  ) : (
    <MainContainer>
      <MainSlider>
        <Slider></Slider>
      </MainSlider>
      {loading ? (
        <LoaderContainer color="#fff">
          <LoadingPlane img src={airplane} alt="airpalne"></LoadingPlane>
        </LoaderContainer>
      ) : (
        <>
          <LatestPosts posts={isLatest}></LatestPosts>
          <PopularPosts posts={isPopular}></PopularPosts>
        </>
      )}
      {isModal && (
        <Modal
          title="로그인 유효시간 종료"
          desc="로그인 유지 시간이 종료되었습니다.<br>다시 로그인해주세요."
        />
      )}
    </MainContainer>
  );
};

export default Home;
