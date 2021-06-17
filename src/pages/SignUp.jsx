import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  StyledFormArea,
  StyledFormButton,
  Avatar,
  colors,
  StyledTitle,
  TextLink,
  ExtraText,
  ButtonGroup,
  FormContainer,
} from "../styles/SignElements";
import logo from "../assets/Team28-logo.png";
import ScrollToTop from "components/ScrollToTop";
import SignupAPI from 'api/SignupAPI';

// Formik
import { Formik, Form } from "formik";
import { TextInput } from "../components/FormLib";
import * as Yup from "yup";

const SignUp = () => {
  const history = useHistory();
  const [isExistingEmail, setIsExistingEmail] = useState(false);
  return (
    <FormContainer>
      <StyledFormArea>
        <Avatar>
          <img src={logo} alt="logo" width="200px" />
        </Avatar>
        <StyledTitle color={colors.black} size={30}>
          회원가입
        </StyledTitle>
        <Formik
          initialValues={{
            // 객체형태 초기값
            email: "",
            password: "",
            repeatPassword: "",
            name: "",
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
            name: Yup.string().required("Required"),
            repeatPassword: Yup.string()
              .required("Required")
              .oneOf([Yup.ref("password")], "Passwords must match"), // 비밀번호 일치 확인을 위해 oneOf속성에 배열을 전달
          })}
          onSubmit={(values, { setSubmitting }) => {
            SignupAPI.signup(values.email, values.password, history, setIsExistingEmail)
          }}
        >
          {() => (
            <Form>
              <TextInput
                name="name"
                type="text"
                label="Full Name"
                placeholder="Your name"
              />

              <TextInput
                name="email"
                type="text"
                label="Email Address"
                placeholder="abc123@gmail.com"
                onInput={() => setIsExistingEmail(false)}
                isExistingEmail={isExistingEmail}
              />

              <TextInput
                name="password"
                type="password"
                label="Password"
                placeholder="********"
              />

              <TextInput
                name="repeatPassword"
                type="password"
                label="Repeat Password"
                placeholder="********"
              />
              <ButtonGroup>
                <StyledFormButton type="submit">회원가입</StyledFormButton>
              </ButtonGroup>
            </Form>
          )}
        </Formik>
        <ExtraText>
          이미 계정이 있으신가요? <TextLink to="/sign-in">로그인</TextLink>
        </ExtraText>
      </StyledFormArea>
      <ScrollToTop />
    </FormContainer>
  );
};

export default SignUp;
