import React, { useEffect } from "react";
import {
  SuccessContainer,
  SuccessLogo,
  SuccessTitle,
  SuccessDesc,
  SuccessButton,
} from "styles/SuccessElements";
import logo from "../assets/Team28-logo.png";
import ScrollToTop from "components/ScrollToTop";
import TokenAPI from "api/TokenAPI";

const SuccessLogout = () => {
  useEffect(() => {
    //로그아웃 시, jwt 삭제 api 호출
    TokenAPI.clearJWT();
  }, []);

  return (
    <>
      <SuccessContainer>
        <SuccessLogo img src={logo} alt="Logo"></SuccessLogo>
        <SuccessTitle>로그아웃 되었습니다.</SuccessTitle>
        <SuccessDesc>
          방문해주셔서 감사합니다.<br></br>
          또 놀러오세요!
        </SuccessDesc>
        <SuccessButton to="/">홈으로</SuccessButton>
        <ScrollToTop />
      </SuccessContainer>
    </>
  );
};

export default SuccessLogout;
