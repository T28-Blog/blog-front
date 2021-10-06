import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BlogContainer = styled(Link)`
  display: flex;
  justify-content: space-between;
  width: 1200px;
  margin: 0 auto;
  border-bottom: 1px solid #939393;
  padding: 30px 0;
  text-decoration: none;
`;

const PostContents = styled.div`
  width: 80%;
`;

const PostThumbnail = styled.div`
  width: 200px;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PostTitle = styled.h1`
  font-size: 24px;
  font-weight: 400;
  line-height: 1.5;
  color: #cea525;
  margin-bottom: 15px;

  &:hover {
    text-decoration: underline;
  }
`;

const PostDesc = styled.p`
  font-size: 18px;
  font-weight: 300;
  color: #191919;
  line-height: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  margin-bottom: 20px;
`;

const PostInfo = styled.div`
  color: #939393;
  font-size: 14px;
  letter-spacing: 1px;
`;

const PostComments = styled.span`
  margin-right: 20px;
`;

const PostCreatedAt = styled.span``;

export const style = {
  BlogContainer,
  PostContents,
  PostThumbnail,
  PostTitle,
  PostDesc,
  PostInfo,
  PostComments,
  PostCreatedAt,
};
