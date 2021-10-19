import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PostContainer = styled.div`
  width: 1200px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  border-bottom: 1px solid #939393;
`;

const PostLink = styled(Link)`
  text-decoration: none;
  outline: none;
  color: inherit;
`;

const PostContent = styled.div`
  padding: 50px;
`;

const PostTitle = styled.h1`
  font-size: 28px;
  font-weight: 500;
  line-height: 1.5;
  color: #cea525;
  margin-bottom: 20px;
`;

const PostInfo = styled.div`
  display: flex;
  color: #939393;
  font-size: 14px;
  letter-spacing: 1px;
  margin-bottom: 20px;
`;

const Writter = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;
  font-size: 16px;
  color: #333;

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const CreatedAt = styled.span`
  display: flex;
  align-items: center;
  margin-right: 15px;
`;

const Views = styled.span`
  display: flex;
  align-items: center;
  margin-right: 15px;
`;

const Comments = styled.span`
  display: flex;
  align-items: center;
`;

const PostImg = styled.div`
  height: 500px;
  margin-bottom: 30px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.2s linear;
  }

  img:hover {
    transform: scale(1.1);
    overflow: hidden;
  }
`;

const PostDesc = styled.p`
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: 300;
  color: #191919;
  line-height: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;

const PostButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  background: #256ce1;
  color: #fff;
  font-size: 16px;

  &:hover {
    background: transparent;
    border: 1px solid #256ce1;
    color: #256ce1;
    transition: all 1s ease;
  }
`;

// --------------- PostList.js ---------------
const PostListContainer = styled.div``;

export const style = {
  PostContainer,
  PostLink,
  PostContent,
  PostTitle,
  PostInfo,
  Writter,
  CreatedAt,
  Views,
  Comments,
  PostImg,
  PostDesc,
  PostButton,
  PostListContainer,
};
