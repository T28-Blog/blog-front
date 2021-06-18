import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
`

export const MyblogContainer = styled.div`
    display: flex;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    padding-top: 30px;
`

export const MyblogTitle = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
    font-size: 40px;
    margin: 0;
`

export const MyblogSubTitle = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    margin-bottom: 50px;
    text-align: center;
    color: #6c757d;
`

export const SideContainer = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    padding: 0 0 0 20px;
`



// ----------- MyblogContents.jsx 부분 -----------

export const MyPostContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 700px;
`
export const MyPostContents = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 10px;
`
export const MyPostContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 520px;
    margin-right: 20px;
`
export const MyPostTitle = styled.h3`
    font-size: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
`
export const MyPostDesc = styled.p`
    font-size: 14px;
    margin-bottom: 5px;
    color: #6c757d;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`
export const MyPostDate = styled.p`
    font-size: 12px;
    color: #868e96;
`
export const MyPostThumbnail = styled.img`
    width: 150px;
`



// ----------- MyblogContents.jsx 부분 -----------

export const MyProfileContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 20px;
    border: 1px solid #6c757d;
    margin-bottom: 30px;
    border-radius: 10px;
`

export const MyProfileImg = styled.img`
    width: 100%;
    border-radius: 10px;
    margin-bottom: 20px;
`

export const MyName = styled.p`
    font-size: 18px;
`

export const MyDesc = styled.p`
    font-size: 14px;
    color: #6c757d;
    margin-bottom: 30px;
`

export const MySetting = styled.button`
    width: 100%;
    height: 40px;
    border: none;
    color: #6c757d;
    outline: none;
`