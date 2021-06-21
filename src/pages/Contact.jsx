import React, { useEffect } from "react";
import ProfileCard from "components/ProfileCard";
import { PageTitle, ContactContainer } from "../styles/ContactElements";
import ScrollToTop from "components/ScrollToTop";
import TokenAPI from "api/TokenAPI";

const ContactUs = () => {
  useEffect(() => {
    TokenAPI.checkValidation(); //페이지 새로고침 시, 토큰 확인 필요
  }, []);
  return (
    <>
      <PageTitle>Contact Us</PageTitle>
      <ContactContainer>
        <ProfileCard />
      </ContactContainer>
      <ScrollToTop />
    </>
  );
};

export default ContactUs;
