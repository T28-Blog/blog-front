import React from "react";
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
  MainFooter,
  WriterImg
} from "../styles/IndexElements";
import ScrollToTop from "components/ScrollToTop";
import IndexPost from "./IndexPost";
import winter from "../assets/winter.jpeg";

const PopularPosts = ({ posts }) => {
  const bigs = posts.slice(0, 2);
  const left = posts.slice(2);
  return (
    <>
      <SectionTitle>
        인기글
        <hr />
      </SectionTitle>
      <Section>
        <PopularContainer>
          {bigs.length &&
            bigs.map((post) => (
              <PopularPost key={post.post_id}>
                <PopularThumbnail img
                    src={post.img}
                    alt="Google"
                    width="100%"
                    height="100%"
                >
                </PopularThumbnail>
                <MainTitle>{post.title}</MainTitle>
                <MainDesc>{post.text}</MainDesc>
                <MainFooter>
                  <WriterImg img src={winter}></WriterImg>
                  <Writer>{posts.name}</Writer>
                </MainFooter>
              </PopularPost>
            ))}
        </PopularContainer>
        <PostList>
          {left.length &&
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
