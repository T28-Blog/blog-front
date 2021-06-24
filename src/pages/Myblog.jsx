import React, { useState, useEffect } from "react";
import ScrollToTop from "components/ScrollToTop";

import {
  Container,
  MyblogContainer,
  SideContainer,
  MyblogTitle,
  MyblogSubTitle,
} from "../styles/MyBlogElements";
import Hashtag from "components/Hashtag";
import MyblogContents from "components/MyblogContents";
import MyProfile from "../components/MyProfile";
import TokenAPI from "api/TokenAPI";
import store from "store/store";
import Modal from "components/Modal";

const MyBlog = () => {
  const [isModal, setShowModal] = useState(false);

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
      <Container>
        <MyblogTitle>Travel Story</MyblogTitle>
        <MyblogSubTitle>
          인생과 여행의 닮은 점<br></br>먼 길을 가는 중에 때로는 쉬어야 한다는
          것
        </MyblogSubTitle>
        <MyblogContainer>
          <MyblogContents />
          <SideContainer>
            <MyProfile />
            <Hashtag myBlog={true} />
          </SideContainer>
          <ScrollToTop />
        </MyblogContainer>
      </Container>
      {isModal && (
        <Modal
          title="로그인 유효시간 종료"
          desc="로그인 유지 시간이 종료되었습니다.<br>다시 로그인해주세요."
        />
      )}
    </>
  );
};

export default MyBlog;
