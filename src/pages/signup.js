import React from 'react'
import { StyledTextInput, StyledFormArea, StyledFormButton, StyledLabel, Avatar, colors, StyledTitle, TextLink, ExtraText, ButtonGroup } from '../styles/signElements'
import logo from '../assets/Team28-logo.png'
import facebook from '../assets/facebook.png'
import kakao from '../assets/kakao.png'
import google from '../assets/google.png'

// Formik
import { Formik, Form } from 'formik'
import { TextInput } from '../components/formLib'
import * as Yup from 'yup'

const SignUp = () => {
    return (
        <div>
            <StyledFormArea>
                <Avatar>
                    <img src={logo} alt="logo" width="200px"/>
                </Avatar>
                <StyledTitle color={colors.black} size={30}>Sign Up</StyledTitle>
                <Formik 
                    initialValues = {{ // 객체형태 초기값
                        email: '',
                        password: '',
                        repeatPassword: '',
                        name: ''
                    }}
                    // 유효성 검사를 위한 스키마 속성 추가
                    validationSchema = {
                        Yup.object({
                            email: Yup.string().email("Invalid email address").required("Required"),
                            password: Yup.string().min(8, "Password is too short").max(30, "Password is too long").required("Required"),
                            name: Yup.string().required("Required"),
                            repeatPassword: Yup.string().required("Required").oneOf([Yup.ref("password")], "Passwords must match") // 비밀번호 일치 확인을 위해 oneOf속성에 배열을 전달
                        })
                    }
                    onSubmit = {(values, {setSubmitting}) => {
                        console.log(values)
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
                                <StyledFormButton type="submit">
                                    Sign Up
                                </StyledFormButton>
                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>
                <ExtraText>
                    Already hava an account? <TextLink to="/sign-in">SignIn</TextLink>
                </ExtraText>
            </StyledFormArea>
        </div>
    )
}

export default SignUp
