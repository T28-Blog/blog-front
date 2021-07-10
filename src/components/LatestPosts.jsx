import React, { useState, useEffect } from "react";
import {
  Section,
  SectionTitle,
  PostContainer,
  MainPost,
  MainThumbnail,
  MainTitle,
  MainDesc,
  Writer,
  PostList,
  MainFooter,
  WriterImg
} from "../styles/IndexElements";
import Hashtag from "components/Hashtag";
import IndexPost from "./IndexPost";
import winter from "../assets/winter.jpeg";

const LatestPosts = ({ posts }) => {
  const [left, setLeft] = useState(null);

  useEffect(() => {
    if (posts) {
      setLeft(posts.slice(1));
    }
  }, [posts]);

  return (
    posts &&
    posts.length && (
      <>
        <SectionTitle>
          최신글
          <hr />
        </SectionTitle>
        <Section>
          <PostContainer>
            <MainPost as="a" href="https://www.naver.com">
              <MainThumbnail img
                  src={posts[0].img}
                  alt="unplash"
                  width="100%"
                  height="100%"
              >
              </MainThumbnail>
              <MainTitle>{posts[0].title}</MainTitle>
              <MainDesc>{posts[0].text}</MainDesc>
              <MainFooter>
                <WriterImg img src={posts[0].thumbnail}></WriterImg>
                {console.log(posts[0].thumbnail)}
                <Writer>{posts[0].name}</Writer>
              </MainFooter>
            </MainPost>
            <Hashtag posts={posts} />
          </PostContainer>
          <PostList>
            {left &&
              left.length &&
              left.map((post) => (
                <IndexPost
                  key={post.post_id}
                  title={post.title}
                  name={post.name}
                  image={post.img}
                  text={post.text}
                ></IndexPost>
              ))}
          </PostList>
        </Section>
      </>
    )
  );
};

export default LatestPosts;
