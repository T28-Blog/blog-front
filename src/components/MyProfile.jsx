import React from 'react'
import {
    MyProfileContainer,
    MyProfileImg,
    MyName,
    MyDesc,
    MySetting
} from 'styles/MyBlogElements'
import Woman from '../assets/woman.jpg'

const MyProfile = () => {
    return (
        <MyProfileContainer>
            <MyProfileImg img src={Woman} alt="profile_img"></MyProfileImg>
            <MyName>홍길동</MyName>
            <MyDesc>여행을 가고 수기를 씁니다. 종종 길을 잃기도 하지만 그래도 한걸음씩 나아갑니다.</MyDesc>
            <MySetting>프로필 수정</MySetting>
        </MyProfileContainer>
    )
}

export default MyProfile
