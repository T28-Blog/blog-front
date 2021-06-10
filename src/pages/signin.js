import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
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
} from "../styles/signElements";
import logo from "../assets/Team28-logo.png";
import facebook from "../assets/facebook.png";
import kakao from "../assets/kakao.png";
import google from "../assets/google.png";
import KakaoLogin from "../api/kakaoapi";

// Formik
import { Formik, Form } from "formik";
import { TextInput } from "../components/formLib";
import * as Yup from "yup";
import styled from "styled-components";

//handler함수 호출
import handleSignin from "../hooks/useSignin";

//소셜 로그인 버튼
const BtnContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignIn = () => {
  const history = useHistory();
  useEffect(() => {
    const requestToken = new URL(window.location.href).searchParams.get("code"); //카카오 인증 코드 받아오기
    if (requestToken) {
      //요청 토큰을 받아온 경우 access token => jwt까지 받아오도록 handler 함수 호출
      handleSignin(requestToken);
      history.push("/");
    }
  });

  return (
    <div>
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
            console.log(values);
          }}
        >
          {() => (
            <Form>
              <TextInput
                name="email"
                type="text"
                label="Email Address"
                placeholder="abc123@gmail.com"
              />

              <TextInput
                name="password"
                type="password"
                label="Password"
                placeholder="********"
              />
              <ButtonGroup>
                <StyledFormButton type="submit">Login</StyledFormButton>
              </ButtonGroup>
            </Form>
          )}
        </Formik>
        <ExtraText>
          New here? <TextLink to="/signup">SignUp</TextLink>
        </ExtraText>

        {/* 소셜 로그인 구분선 */}
        <DividerLine />
        <OtherAccount>다른 계정으로 로그인</OtherAccount>
        <BtnContainer>
          <Facebook image={facebook}></Facebook>
          <Google image={google}></Google>
          <Kakao image={kakao} onClick={KakaoLogin.getRequestToken}></Kakao>
        </BtnContainer>
      </StyledFormArea>
    </div>
  );
};

export default SignIn;
