import React, { useState, useEffect } from "react";
import store from "store/store";
import {
  SuccessContainer,
  SuccessLogo,
  SuccessTitle,
  SuccessDesc,
  SuccessButton,
} from "styles/SuccessElements";
import logo from "../assets/Team28-logo.png";
import ScrollToTop from "components/ScrollToTop";

const SuccessSignUp = (props) => {
  const { name, oauth } = store.getState().userInfo;
  const [email, setEmail] = useState(null);
  const [ownName, setOwnName] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      if (!oauth) {
        const {
          location: { state },
        } = props;
        const { email: em, name: nm } = state;
        setEmail(em);
        setOwnName(nm);
      }
    } catch (e) {
      setError(true);
    }
  }, []);

  return error ? (
    <SuccessContainer>
      <SuccessLogo img src={logo} alt="Logo"></SuccessLogo>
      <SuccessDesc>
        회원님의 이메일을 찾지 못하여 인증 메일 발송에 실패하였습니다. 잠시 후
        다시 시도해주세요.
      </SuccessDesc>
    </SuccessContainer>
  ) : (
    <SuccessContainer>
      <SuccessLogo img src={logo} alt="Logo"></SuccessLogo>
      <SuccessTitle>환영합니다!</SuccessTitle>
      <SuccessDesc>
        {ownName || name}님, 회원가입을 축하합니다.<br></br>
        {!oauth &&
          `${email} 으로 회원가입 인증메일이 발송되었습니다. 메일함을 확인해주세요.`}
        <br></br>
      </SuccessDesc>
      {oauth ? (
        <SuccessButton to="/">홈으로</SuccessButton>
      ) : (
        <SuccessButton to="/sign-in">시작하기</SuccessButton>
      )}
      <ScrollToTop />
    </SuccessContainer>
  );
};

export default SuccessSignUp;
