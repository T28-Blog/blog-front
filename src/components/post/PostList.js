import React from 'react';
import Post from './Post';
import { style } from './PostStyle';

const PostList = ({ posts }) => {
  return (
    <PostListContainer>
      {posts &&
        posts.length &&
        posts.map((post) => (
          <Post
            key={post.postId}
            title={post.title}
            writter={post.writter}
            date={post.date}
            views={post.views}
            comments={post.comments}
            thumbnail={post.thumbnail}
            desc={post.thumbnail}
          />
        ))}
    </PostListContainer>
  );
};

export default PostList;

const { PostListContainer } = style;
