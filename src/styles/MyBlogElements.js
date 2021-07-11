import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
`;

export const MyblogContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 30px;

  @media screen and (max-width: 375px){
    flex-direction: column-reverse;
  }
`;

export const MyblogTitle = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  font-size: 40px;
  margin: 0;
`;

export const MyblogSubTitle = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  margin-bottom: 50px;
  text-align: center;
  color: #6c757d;

  @media screen and (max-width: 375px){
    margin-bottom: 0;
  }
`;

export const SideContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 0 0 0 20px;
`;

// ----------- MyblogContents.jsx 부분 -----------

export const MyPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;

  @media screen and (max-width: 375px){
    justify-content: center;
    align-items: center;
    padding-left: 30px;
  }
`;
export const MyPostContents = styled(Link)`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 10px;
`;
export const MyPostContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 520px;
  height: 120px;
  margin-right: 20px;

  @media screen and (max-width: 375px){
    width: 215px;
    margin-right: 0;
  }
`;
export const MyPostTitle = styled.h3`
  font-size: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
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
`;
export const MyPostDetail = styled.div`
  display: flex;
  flex-direction: row;
`;
export const MyPostDate = styled.p`
  display: flex;
  font-size: 12px;
  color: #868e96;
  margin-right: 20px;
`;
export const MyPostEdit = styled.p`
  display: flex;
  font-size: 12px;
  color: #868e96;
  margin-right: 10px;

  &:hover {
    color: #256ce1;
    cursor: pointer;
  }
`;
export const MyPostDelete = styled.p`
  display: flex;
  font-size: 12px;
  color: #868e96;

  &:hover {
    color: #256ce1;
    cursor: pointer;
  }
`;
export const MyPostThumbnail = styled.img`
  width: 150px;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;

  @media screen and (max-width: 375px){
    width: 100px;
    height: 100px;
  }
`;

// ----------- MyProfile.jsx 부분 -----------

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

  @media screen and (max-width: 375px){
    width: 335px;
    height: 100%;
    padding: 5px 20px;
  }
`;

export const MyProfileImg = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 20px;
  object-fit: cover;

  @media screen and (max-width: 375px){
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
  }
`;

export const MyName = styled.p`
  font-size: 18px;

  @media screen and (max-width: 375px){
    margin-bottom: 10px;
  }
`;

export const MyDesc = styled.p`
  font-size: 14px;
  color: #6c757d;
  margin-bottom: 30px;

  @media screen and (max-width: 375px){
    margin-bottom: 15px;
  }
`;

export const MySetting = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  color: #6c757d;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-bottom: 10px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #52595f;
    color: #fff;
  }

  @media screen and (max-width: 375px){
    width: 50%;
  }
`;

export const WriteButton = styled.div`
  width: 100%;

  @media screen and (max-width: 375px){
    display: flex;
    flex-direction: row;
  }
`;

export const WriteLink = styled(Link)`
  display: flex;
  height: 40px;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: 1px solid #256ce1;
  padding: 5px 22px;
  color: #256ce1;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  text-align: center;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #256ce1;
    color: #fff;
  }

  @media screen and (max-width: 375px){
    width: 50%;
  }
`;
