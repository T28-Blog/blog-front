import React from 'react'
import { StyledTextInput, StyledFormArea, StyledFormButton, StyledLabel, Avatar, colors, StyledTitle, ButtonGroup } from '../styles/signElements'
import logo from '../assets/Team28-logo.png'

// Formik
import { Formik, Form } from 'formik'
import { TextInput } from '../components/formLib'

const SignIn = () => {
    return (
        <div>
            <StyledFormArea>
                <Avatar>
                    <img src={logo} alt="logo" width="200px"/>
                </Avatar>
                {/* <StyledTitle color={colors.black} size={30}>Login</StyledTitle> */}
                <Formik>
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
                                <StyledFormButton type="submit">
                                    Login
                                </StyledFormButton>
                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>
            </StyledFormArea>
        </div>
    )
}

export default SignIn
