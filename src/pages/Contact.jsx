import React, { useState, useEffect } from "react";
import ProfileCard from "components/ProfileCard";
import { PageTitle, ContactContainer } from "../styles/ContactElements";
import ScrollToTop from "components/ScrollToTop";
import TokenAPI from "api/TokenAPI";
import store from "store/store";
import Modal from "components/Modal";

const ContactUs = () => {
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
      <PageTitle>Contact Us</PageTitle>
      <ContactContainer>
        <ProfileCard />
      </ContactContainer>
      <ScrollToTop />
      {isModal && (
        <Modal
          title="로그인 유효시간 종료"
          desc="로그인 유지 시간이 종료되었습니다.<br>다시 로그인해주세요."
        />
      )}
    </>
  );
};

export default ContactUs;
