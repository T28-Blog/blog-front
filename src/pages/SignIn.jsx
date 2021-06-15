import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  FormContainer,
  StyledFormArea,
  StyledFormButton,
  DividerLine,
  OtherAccount,
  Facebook,
  Google,
  Kakao,
  Avatar,
  colors,
  StyledTitle,
  TextLink,
  ExtraText,
  ButtonGroup,
} from "../styles/SignElements";
import logo from "../assets/Team28-logo.png";
import facebook from "../assets/facebook.png";
import kakao from "../assets/kakao.png";
import google from "../assets/google.png";
import KakaoLogin from "../api/Kakaoapi";
// import GoogleLogin from "react-google-login";
import ScrollToTop from "components/ScrollToTop";
import Modal from "components/Modal";

// Formik
import { Formik, Form } from "formik";
import { TextInput } from "../components/FormLib";
import * as Yup from "yup";
import styled from "styled-components";

//handler함수 호출
import handleSignin from "../hooks/useSignin";

import { auth, provider, firebaseInstance } from "fbase/Fbase";

import { ADD_JWT_OWN, ADD_JWT_WITH_GOOGLE } from "action";
import store from "store/store";

//소셜 로그인 버튼
const BtnContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignIn = () => {
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [isInvalidPassword, setIsInvalidPassword] = useState(false);

  const history = useHistory();
  useEffect(() => {
    const requestToken = new URL(window.location.href).searchParams.get("code"); //카카오 인증 코드 받아오기
    if (requestToken) {
      //요청 토큰을 받아온 경우 access token => jwt까지 받아오도록 handler 함수 호출
      handleSignin(requestToken);
      history.push("/");
    }
  }, []);

  const signInWithGoogle = () => {
    auth.signInWithPopup(provider).then((res) => {
      console.log(res.user);
      const jwt = null;
      const at = null;
      store.dispatch({ type: ADD_JWT_WITH_GOOGLE, jwt, at });
      history.push("/");
    });
  };

  const [ modalState, setModalState ] = useState(false);

  const openModal = () => {
    setModalState(true);
  }

  const closeModal = () => {
    setModalState(false);
  }

  return (
    <FormContainer>
      <StyledFormArea>
        <Avatar>
          <img src={logo} alt="logo" width="200px" />
        </Avatar>
        <StyledTitle color={colors.black} size={30}>
          Login
        </StyledTitle>
        <Formik
          initialValues={{
            // 객체형태 초기값
            email: "",
            password: "",
          }}
          // 유효성 검사를 위한 스키마 속성 추가
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string()
              .min(8, "Password is too short")
              .max(30, "Password is too long")
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            firebaseInstance
            .auth()
            .signInWithEmailAndPassword(values.email, values.password)
            .then((userCredential) => {
              // Signed in
                var user = userCredential.user;
                console.log("Logged in", user);
                const jwt = null;
                const at = null;
                store.dispatch({ type: ADD_JWT_OWN, jwt, at });
                history.push("/");
            })
            .catch((error) => {
              setIsInvalidEmail(false);
              setIsInvalidPassword(false);
              const errorCode = error.code;
              if (errorCode === "auth/user-not-found")
                setIsInvalidEmail(true);
              if (errorCode === "auth/wrong-password")
                setIsInvalidPassword(true);
              const errorMessage = error.message;
              console.log("Error", errorCode, errorMessage);
            });
          }}
        >
          {() => (
            <Form>
              <TextInput
                name="email"
                type="text"
                label="Email Address"
                placeholder="abc123@gmail.com"
                isInvalidEmail={isInvalidEmail}
              />

              <TextInput
                name="password"
                type="password"
                label="Password"
                placeholder="********"
                isInvalidPassword={isInvalidPassword}
              />
              <ButtonGroup>
                <StyledFormButton type="submit"  onClick={openModal}>Login</StyledFormButton>
              </ButtonGroup>
            </Form>
          )}
        </Formik>
        <ExtraText>
          New here? <TextLink to="/sign-up">SignUp</TextLink>
        </ExtraText>

        {/* 소셜 로그인 구분선 */}
        <DividerLine />
        <OtherAccount>다른 계정으로 로그인</OtherAccount>
        <BtnContainer>
          <Google image={google} onClick={signInWithGoogle} />
          <Kakao image={kakao} onClick={KakaoLogin.getRequestToken}></Kakao>
          <Facebook image={facebook}></Facebook>
        </BtnContainer>
      </StyledFormArea>
      <ScrollToTop />
      <Modal state={modalState} closeModal={closeModal} title="로그인 실패" desc="이메일 또는 비밀번호를 확인해주세요<br>신규가입자는 가입 후 발송된 인증메일을 확인해주세요"/>
    </FormContainer>
  );
};

export default SignIn;
