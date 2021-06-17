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

// Formik
import { Formik, Form } from "formik";
import { TextInput } from "../components/FormLib";
import * as Yup from "yup";

import { firebaseInstance } from "fbase/Fbase";

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
          Sign Up
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
            firebaseInstance
              .auth()
              .createUserWithEmailAndPassword(
                values.email,
                values.password
              )
              .then((userCredential) => {
                setIsExistingEmail(false);
                const actionCodeSettings = {
                  url: 'http://localhost:3000/sign-in',
                  handleCodeInApp: true,
                };
                firebaseInstance.auth().sendSignInLinkToEmail(values.email, actionCodeSettings)
                .then(() => {
                  window.localStorage.setItem('emailForSignIn', values.email);
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.log('error', errorCode, errorMessage)
                  // ...
                });
                history.push("/sign-in");
              })
              .catch((error) => {
                const errorCode = error.code;
                if (errorCode === "auth/email-already-in-use") setIsExistingEmail(true);
                const errorMessage = error.message;
                console.log(error, errorCode, errorMessage);
              });
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
                <StyledFormButton type="submit">Sign Up</StyledFormButton>
              </ButtonGroup>
            </Form>
          )}
        </Formik>
        <ExtraText>
          Already hava an account? <TextLink to="/sign-in">SignIn</TextLink>
        </ExtraText>
      </StyledFormArea>
      <ScrollToTop />
    </FormContainer>
  );
};

export default SignUp;
