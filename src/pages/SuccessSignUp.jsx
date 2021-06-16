import React, { useState } from 'react'
import {
    SuccessContainer,
    SuccessLogo,
    SuccessTitle,
    SuccessDesc,
    SuccessButton
} from 'styles/SuccessElements'
import logo from "../assets/Team28-logo.png";
import userInfo from "assets/user.json"
import ScrollToTop from 'components/ScrollToTop';

const SuccessSignUp = () => {
    
    return (
        <>
            <SuccessContainer>
                <SuccessLogo img src={logo} alt='Logo'></SuccessLogo>
                <SuccessTitle>환영합니다!</SuccessTitle>
                {
                    userInfo.map((val, key) => (
                        <SuccessDesc key={val.id}>
                            {val.name}님, 회원가입을 축하합니다.<br></br>
                            {val.email} 으로 회원가입 인증메일이 발송되었습니다.<br></br>
                        </SuccessDesc>
                    ))
                }
                <SuccessButton to="/sign-in">시작하기</SuccessButton>
                <ScrollToTop />
            </SuccessContainer>
        </>
    )
}

export default SuccessSignUp
