import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  FormContainer,
  StyledFormArea,
  StyledFormButton,
  DividerLine,
  OtherAccount,
  Google,
  Kakao,
  Avatar,
  colors,
  StyledTitle,
  TextLink,
  ExtraText,
  ButtonGroup,
  BtnContainer,
  StyleSideArea
} from "../styles/SignElements";
import logo from "../assets/Team28-logo.png";
import kakao from "../assets/kakao.png";
import google from "../assets/google.png";
import KakaoLogin from "../api/KakaoAPI";
// import GoogleLogin from "react-google-login";
import ScrollToTop from "components/ScrollToTop";
import Modal from "components/Modal";
import login from "../assets/login.jpeg";

// Formik
import { Formik, Form } from "formik";
import { TextInput } from "../components/FormLib";
import * as Yup from "yup";
import styled from "styled-components";

import { auth, provider } from "fbase/Fbase";

import SigninAPI from "api/SigninAPI";
import { width } from "dom-helpers";


const SignIn = () => {
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [isInvalidPassword, setIsInvalidPassword] = useState(false);
  // 'hidden(not verified)', 'shown(not verified but shown', 'verified'
  const [emailVerified, setEmailVerified] = useState("hidden");

  const history = useHistory();

  const signInWithGoogle = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        const { uid } = res.user;
        history.push("/loading", { oauth: "google", uid });
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/popup-closed-by-user") {
          alert("로그인 하기 전에 창을 닫았습니다.");
        }
      });
  };

  return (
    <FormContainer>
      <StyleSideArea img src={login}>
      </StyleSideArea>
      <StyledFormArea>
        <Avatar>
          <img src={logo} alt="logo" width="200px" />
        </Avatar>
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
            SigninAPI.signin(
              values.email,
              values.password,
              history,
              emailVerified,
              setEmailVerified,
              setIsInvalidEmail,
              setIsInvalidPassword
            );
          }}
        >
          {() => (
            <Form>
              <TextInput
                name="email"
                type="text"
                label="Email Address"
                placeholder="abc123@gmail.com"
                onInput={() => {
                  setIsInvalidEmail(false);
                  setEmailVerified("hidden");
                }}
                isInvalidEmail={isInvalidEmail}
                emailVerified={emailVerified}
              />

              <TextInput
                name="password"
                type="password"
                label="Password"
                placeholder="********"
                onInput={() => setIsInvalidPassword(false)}
                isInvalidPassword={isInvalidPassword}
              />
              <ButtonGroup>
                <StyledFormButton type="submit">로그인</StyledFormButton>
              </ButtonGroup>
            </Form>
          )}
        </Formik>
        <ExtraText>
          처음이신가요? <TextLink to="/sign-up">회원가입</TextLink>
        </ExtraText>

        {/* 소셜 로그인 구분선 */}
        <DividerLine />
        <OtherAccount>다른 계정으로 로그인</OtherAccount>
        <BtnContainer>
          <Google image={google} onClick={signInWithGoogle} />
          <Kakao image={kakao} onClick={KakaoLogin.getRequestToken}></Kakao>
        </BtnContainer>
      </StyledFormArea>
      <ScrollToTop />
    </FormContainer>
  );
};

export default SignIn;
