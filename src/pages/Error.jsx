import React from 'react'
import {
    ErrorContainer,
    ErrorImg,
    ErrorTitle,
    ErrorDesc,
    ErrorButton
} from '../styles/ErrorElements.js'
import error from '../assets/error404.png'

const Error = () => {
    return (
        <ErrorContainer>
            <ErrorImg img src={error} alt='404'></ErrorImg>
            <ErrorTitle>
                페이지를 찾을 수 없습니다.
            </ErrorTitle>
            <ErrorDesc>
                원하시는 결과를 찾을 수 없습니다.<br></br>
                올바른 URL을 입력하였는지 확인하세요. 자세한 내용은 사이트 소유자에게 문의하시기 바랍니다.
            </ErrorDesc>
            <ErrorButton to="/">메인으로 돌아가기</ErrorButton>
        </ErrorContainer>
    )
}

export default Error
