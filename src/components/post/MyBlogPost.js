import React from 'react';
import { style } from './MyBlogPostStyle';
import testThumb from 'assets/test_thumb.jpeg';

const MyBlogPost = () => {
  return (
    <BlogContainer>
      <PostContents>
        <PostTitle>
          How I Used App in the Air To Naviagte Covid-19 Travel
        </PostTitle>
        <PostDesc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </PostDesc>
        <PostInfo>
          <PostComments>4 Comments</PostComments>
          <PostCreatedAt>2021-10-03</PostCreatedAt>
        </PostInfo>
      </PostContents>
      <PostThumbnail>
        <img src={testThumb} alt="PostImage" />
      </PostThumbnail>
    </BlogContainer>
  );
};

export default MyBlogPost;

const {
  BlogContainer,
  PostContents,
  PostThumbnail,
  PostTitle,
  PostDesc,
  PostInfo,
  PostComments,
  PostCreatedAt,
} = style;
