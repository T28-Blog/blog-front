import React, { useEffect } from 'react'

const NaverLogin = () => {
    const initializeNaverLogin = () => {
        const { naver } = window
        const naverLogin = new naver.LoginWithNaverId({
            clientId: process.env.REACT_APP_NAVER_CLIENT_ID,
            callbackUrl: 'http://localhost:3000',
            isPopup: false,
            loginButton: {
                color: 'white',
                type: 1,
                height: 55,
            },
            callbackHandle: true
        })
        naverLogin.init() // 설정한 정보를 초기화하고 연동
    }

    useEffect(() => {
        initializeNaverLogin()
    }, [])

    return (
        <div>
            <h1>네이버 아이디로 로그인</h1>
            <div className="naverIdLoginButtonContainer">
                <div id="naverIdLogin" />
            </div>
        </div>
    )
}

export default NaverLogin
