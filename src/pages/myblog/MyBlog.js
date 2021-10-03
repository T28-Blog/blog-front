import Header from 'components/header/Header';
import React from 'react';
import { style } from './MyBlogStyle';
import testProfile from 'assets/test_user.jpeg';

const MyBlog = () => {
  return (
    <>
      <Header />
      <ProfileContainer>
        <UserImage>
          <img src={testProfile} alt="user" />
        </UserImage>
        <UserName>스티브 잡스</UserName>
        <UserEmail>apple@apple.com</UserEmail>
        <UserIntro>
          <strong>소개</strong>
          <p>
            많은 사람들에게 사랑받는 웹을 만드는 것이 꿈인 프론트엔드 개발자,
            전세계를 여행하고 싶은 집돌이.
          </p>
        </UserIntro>
      </ProfileContainer>
      <TabContents>
        <TabList>
          <Tab>
            글 <span>145</span>
          </Tab>
        </TabList>
      </TabContents>
    </>
  );
};

export default MyBlog;

const {
  ProfileContainer,
  UserImage,
  UserName,
  UserEmail,
  UserIntro,
  TabContents,
  TabList,
  Tab,
} = style;
