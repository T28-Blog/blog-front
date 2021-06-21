import React, { useState } from 'react'
import {
    MyProfileContainer,
    MyProfileImg,
    MyName,
    MyDesc,
    MySetting
} from 'styles/MyBlogElements'
import Woman from '../assets/woman.jpg'
import { MyProfileModal } from './MyProfileModal'
const MyProfile = () => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev)
    }

    return (
        <MyProfileContainer>
            <MyProfileImg img src={Woman} alt="profile_img"></MyProfileImg>
            <MyName>김아무개</MyName>
            <MyDesc>프로필 내용을 설정해주세요.</MyDesc>
            <MySetting onClick={openModal}>프로필 수정</MySetting>
            <MyProfileModal showModal={showModal} setShowModal={setShowModal} />
        </MyProfileContainer>
    )
}

export default MyProfile
