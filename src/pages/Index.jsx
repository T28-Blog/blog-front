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
import CommentsAPI from "api/CommentsAPI";

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
      const new_posts = [];
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
      for (const post of posts) {
        const user_id = post.user_id;
        new_posts.push({ ...post, thumbnail: (await CommentsAPI.getCommentUserID(user_id))?.thumbnail });
      }
      return new_posts.reverse();
    } catch (e) {
      console.log(e);
      setError(true);
    }
  };

  const getPopularPosts = async () => {
    try {
      const posts = [];
      const new_posts = [];
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
      for (const post of posts) {
        const user_id = post.user_id;
        new_posts.push({ ...post, thumbnail: (await CommentsAPI.getCommentUserID(user_id))?.thumbnail });
      }
      return new_posts.reverse();
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
      //???????????? ??? jwt ??????
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
    <LoadingTitle style={{ color: "#333", marginTop: "10px" }}>
      ?????? ????????????. ????????? ?????????????????? ... ?????????????
    </LoadingTitle>
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
          title="????????? ???????????? ??????"
          desc="????????? ?????? ????????? ?????????????????????.<br>?????? ?????????????????????."
        />
      )}
    </MainContainer>
  );
};

export default Home;
