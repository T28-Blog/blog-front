import HashTag from 'components/hashtag/HashTag';
import Header from 'components/header/Header';
import Post from 'components/post/Post';
import PostList from 'components/post/PostList';
import Slider from 'components/slide/Slider';
import React from 'react';

const Main = () => {
  return (
    <>
      <Header />
      <Slider />
      <HashTag />
      <Post />
    </>
  );
};

export default Main;
