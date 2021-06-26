import React, { useState, useEffect } from "react";
import {
  Section,
  SectionTitle,
  MainTitle,
  MainDesc,
  Writer,
  PostList,
  PopularPost,
  PopularThumbnail,
  PopularContainer,
} from "../styles/IndexElements";
import ScrollToTop from "components/ScrollToTop";
import IndexPost from "./IndexPost";

const PopularPosts = ({ posts }) => {
  const [bigs, setBigs] = useState(null);
  const [left, setLeft] = useState(null);

  useEffect(() => {
    if (posts) {
      setBigs(posts.slice(0, 2));
      setLeft(posts.slice(2));
    }
  }, [posts]);

  return (
    <>
      <SectionTitle>
        인기글
        <hr />
      </SectionTitle>
      <Section>
        <PopularContainer>
          {bigs &&
            bigs.length &&
            bigs.map((post) => (
              <PopularPost key={post.post_id}>
                <PopularThumbnail>
                  <img
                    src={post.img}
                    alt="Google"
                    width="100%"
                    height="100%"
                    object-fit="cover"
                  />
                </PopularThumbnail>
                <MainTitle>{post.title}</MainTitle>
                <MainDesc>{post.text}</MainDesc>
                <Writer>{post.name}</Writer>
              </PopularPost>
            ))}
        </PopularContainer>
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
        <ScrollToTop />
      </Section>
    </>
  );
};

export default PopularPosts;
