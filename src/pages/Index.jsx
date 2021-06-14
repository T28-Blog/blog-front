import React from "react";
import {
  MainSlider,
  Section,
  SectionTitle,
  PostContainer,
  MainPost,
  MainThumbnail,
  MainTitle,
  MainDesc,
  Writer,
  PostList,
  Post,
  SubThumbnail,
  SubTitle,
  SubDesc,
  SubWriter,
  PopularPost,
  PopularThumbnail,
  PopularContainer,
} from "../styles/IndexElements";
import testGoogle from "../assets/test_google.jpeg";
import testMac from "../assets/test_mac.jpeg";
import Slider from "components/Slider";
import Hashtag from "components/Hashtag";
import "styles/slider.css";
import store from "store/store";

const Home = () => {
  console.log(store.getState());
  return (
    <>
      <MainSlider>
        <Slider></Slider>
      </MainSlider>
      <SectionTitle>
        Latest articles
        <hr />
      </SectionTitle>
      <Section>
        <PostContainer>
          <MainPost>
            <MainThumbnail>
              <img
                src={testGoogle}
                alt="Google"
                width="100%"
                height="100%"
                object-fit="cover"
              />
            </MainThumbnail>
            <MainTitle>
              Designin Google Calculator with React Redux Hooks
            </MainTitle>
            <MainDesc>
              In 2020, Redux made complete sense after I watched the video
              tutorial by Dan Abramov...
            </MainDesc>
            <Writer>ThankGod Ukachukwu</Writer>
          </MainPost>
          <Hashtag />
        </PostContainer>
        <PostList>
          <Post>
            <SubThumbnail>
              <img
                src={testMac}
                alt="Mac"
                width="100%"
                height="100%"
                object-fit="cover"
              />
            </SubThumbnail>
            <SubTitle>Stop Writinig JavaScript Like This</SubTitle>
            <SubDesc>10 ways to write better javascript code</SubDesc>
            <SubWriter>Harsha Vardhan</SubWriter>
          </Post>
          <Post>
            <SubThumbnail>
              <img
                src={testMac}
                alt="Mac"
                width="100%"
                height="100%"
                object-fit="cover"
              />
            </SubThumbnail>
            <SubTitle>
              Healthy Tips that Every Programmer Can Do Everday
            </SubTitle>
            <SubDesc>For a healthy lifestyle.</SubDesc>
            <SubWriter>Josef Cruz</SubWriter>
          </Post>
          <Post>
            <SubThumbnail>
              <img
                src={testMac}
                alt="Mac"
                width="100%"
                height="100%"
                object-fit="cover"
              />
            </SubThumbnail>
            <SubTitle>
              How to Use JavaScript Libraries in Angular Project
            </SubTitle>
            <SubDesc>
              Using a JavaScript library inside an Angular project
            </SubDesc>
            <SubWriter>Rucha Deshpande</SubWriter>
          </Post>
          <Post>
            <SubThumbnail>
              <img
                src={testMac}
                alt="Mac"
                width="100%"
                height="100%"
                object-fit="cover"
              />
            </SubThumbnail>
            <SubTitle>Stop Writinig JavaScript Like This</SubTitle>
            <SubDesc>10 ways to write better javascript code</SubDesc>
            <SubWriter>Harsha Vardhan</SubWriter>
          </Post>
          <Post>
            <SubThumbnail>
              <img
                src={testMac}
                alt="Mac"
                width="100%"
                height="100%"
                object-fit="cover"
              />
            </SubThumbnail>
            <SubTitle>Stop Writinig JavaScript Like This</SubTitle>
            <SubDesc>10 ways to write better javascript code</SubDesc>
            <SubWriter>Harsha Vardhan</SubWriter>
          </Post>
          <Post>
            <SubThumbnail>
              <img
                src={testMac}
                alt="Mac"
                width="100%"
                height="100%"
                object-fit="cover"
              />
            </SubThumbnail>
            <SubTitle>Stop Writinig JavaScript Like This</SubTitle>
            <SubDesc>10 ways to write better javascript code</SubDesc>
            <SubWriter>Harsha Vardhan</SubWriter>
          </Post>
        </PostList>
      </Section>
      <SectionTitle>
        Popular articles
        <hr />
      </SectionTitle>
      <Section>
        <PopularContainer>
          <PopularPost>
            <PopularThumbnail>
              <img
                src={testGoogle}
                alt="Google"
                width="100%"
                height="100%"
                object-fit="cover"
              />
            </PopularThumbnail>
            <MainTitle>
              Designin Google Calculator with React Redux Hooks
            </MainTitle>
            <MainDesc>
              In 2020, Redux made complete sense after I watched the video
              tutorial by Dan Abramov...
            </MainDesc>
            <Writer>ThankGod Ukachukwu</Writer>
          </PopularPost>
          <PopularPost>
            <PopularThumbnail>
              <img
                src={testGoogle}
                alt="Google"
                width="100%"
                height="100%"
                object-fit="cover"
              />
            </PopularThumbnail>
            <MainTitle>
              Designin Google Calculator with React Redux Hooks
            </MainTitle>
            <MainDesc>
              In 2020, Redux made complete sense after I watched the video
              tutorial by Dan Abramov...
            </MainDesc>
            <Writer>ThankGod Ukachukwu</Writer>
          </PopularPost>
        </PopularContainer>
        <PostList>
          <Post>
            <SubThumbnail>
              <img
                src={testMac}
                alt="Mac"
                width="100%"
                height="100%"
                object-fit="cover"
              />
            </SubThumbnail>
            <SubTitle>Stop Writinig JavaScript Like This</SubTitle>
            <SubDesc>10 ways to write better javascript code</SubDesc>
            <SubWriter>Harsha Vardhan</SubWriter>
          </Post>
          <Post>
            <SubThumbnail>
              <img
                src={testMac}
                alt="Mac"
                width="100%"
                height="100%"
                object-fit="cover"
              />
            </SubThumbnail>
            <SubTitle>
              Healthy Tips that Every Programmer Can Do Everday
            </SubTitle>
            <SubDesc>For a healthy lifestyle.</SubDesc>
            <SubWriter>Josef Cruz</SubWriter>
          </Post>
          <Post>
            <SubThumbnail>
              <img
                src={testMac}
                alt="Mac"
                width="100%"
                height="100%"
                object-fit="cover"
              />
            </SubThumbnail>
            <SubTitle>
              How to Use JavaScript Libraries in Angular Project
            </SubTitle>
            <SubDesc>
              Using a JavaScript library inside an Angular project
            </SubDesc>
            <SubWriter>Rucha Deshpande</SubWriter>
          </Post>
          <Post>
            <SubThumbnail>
              <img
                src={testMac}
                alt="Mac"
                width="100%"
                height="100%"
                object-fit="cover"
              />
            </SubThumbnail>
            <SubTitle>Stop Writinig JavaScript Like This</SubTitle>
            <SubDesc>10 ways to write better javascript code</SubDesc>
            <SubWriter>Harsha Vardhan</SubWriter>
          </Post>
          <Post>
            <SubThumbnail>
              <img
                src={testMac}
                alt="Mac"
                width="100%"
                height="100%"
                object-fit="cover"
              />
            </SubThumbnail>
            <SubTitle>Stop Writinig JavaScript Like This</SubTitle>
            <SubDesc>10 ways to write better javascript code</SubDesc>
            <SubWriter>Harsha Vardhan</SubWriter>
          </Post>
          <Post>
            <SubThumbnail>
              <img
                src={testMac}
                alt="Mac"
                width="100%"
                height="100%"
                object-fit="cover"
              />
            </SubThumbnail>
            <SubTitle>Stop Writinig JavaScript Like This</SubTitle>
            <SubDesc>10 ways to write better javascript code</SubDesc>
            <SubWriter>Harsha Vardhan</SubWriter>
          </Post>
        </PostList>
      </Section>
    </>
  );
};

export default Home;
