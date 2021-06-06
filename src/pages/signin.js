import React from "react";
import {
  StyledTextInput,
  StyledFormArea,
  StyledFormButton,
  StyledLabel,
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

// Formik
import { Formik, Form } from "formik";
import { TextInput } from "../components/formLib";
import * as Yup from "yup";

import GoogleLogin from "react-google-login";

const SignIn = () => {
  const responseGoogle = (response) => {
    console.log(response.tokenId);
  };
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
        <Facebook>
          <img src={facebook} alt="" width="50px" height="50px" />
        </Facebook>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_API_ID}
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              style={{ border: "none", marginRight: "10px" }}
            >
              <img src={google} width="50px" height="50px" alt="google"></img>
            </button>
          )}
          buttonText=""
          onSuccess={responseGoogle}
          onFailure={() => console.log("failure")}
          isSignedIn={true}
          cookiePolicy={"single_host_origin"}
          uxMode="redirect"
          redirectUri="http://localhost:3000"
        />
        <Kakao>
          <img src={kakao} alt="" width="50px" height="50px" />
        </Kakao>
      </StyledFormArea>
    </div>
  );
};

export default SignIn;
