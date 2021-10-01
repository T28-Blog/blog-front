import React from 'react';
import { FaClock, FaEye, FaComments } from 'react-icons/fa';
import { style } from './PostStyle';
import testThumb from 'assets/test_thumb.jpeg';
import testProfile from 'assets/test_user.jpeg';

const Post = () => {
  return (
    <PostContainer>
      <PostLink>
        <PostContent>
          <PostTitle>
            How I Used App in the Air To Naviagte Covid-19 Travel
          </PostTitle>
          <PostInfo>
            <Writter>
              <img src={testProfile} />
              &nbsp;&nbsp;Maroon5
            </Writter>
            <CreatedAt>
              <FaClock />
              &nbsp;&nbsp;2021-10-01
            </CreatedAt>
            <Views>
              <FaEye />
              &nbsp;&nbsp;14584
            </Views>
            <Comments>
              <FaComments />
              &nbsp;&nbsp;4 Comments
            </Comments>
          </PostInfo>
          <PostImg>
            <img src={testThumb} alt="PostImage" />
          </PostImg>
          <PostDesc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </PostDesc>
          <PostButton>Read More</PostButton>
        </PostContent>
      </PostLink>
    </PostContainer>
  );
};

export default Post;

const {
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
} = style;
