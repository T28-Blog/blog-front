import React from "react";
import { MainSlider } from "../styles/IndexElements";
import Slider from "components/Slider";
import "styles/slider.css";
import store from "store/store";
import { useState, useEffect } from "react";
import OauthSignin from "api/OauthSignInAPI";
import { firebaseInstance } from "fbase/Fbase";
import LatestPosts from "components/LatestPosts";
import PopularPosts from "components/PopularPosts";
import {
  LoaderContainer,
  LoadingPlane,
  LoadingTitle,
} from "styles/PreLoaderElements";
import airplane from "../assets/airplane.png";

const Home = () => {
  const { name, uid, isLogin } = store.getState().userInfo;
  const [isLatest, setLatestPosts] = useState([]);
  const [isPopular, setPopularPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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
    if (isLogin) {
      //로그인일 때 jwt 발급
      const res = OauthSignin.getJWT(uid, name);
    }
  }, []);

  return error ? (
    <LoadingTitle>복구 중입니다. 잠시만 기다려주세요 ... 🙇‍♂️</LoadingTitle>
  ) : (
    <>
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
    </>
  );
};

export default Home;
