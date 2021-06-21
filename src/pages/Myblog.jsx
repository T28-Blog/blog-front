import React, { useEffect } from "react";
import ScrollToTop from "components/ScrollToTop";
import {
  Container,
  MyblogContainer,
  SideContainer,
  MyblogTitle,
  MyblogSubTitle,
} from "../styles/MyBlogElements";
import Hashtag from "components/Hashtag";
import MyblogContents from "components/MyblogContents";
import MyProfile from "../components/MyProfile";
import TokenAPI from "api/TokenAPI";

const MyBlog = () => {
  useEffect(() => {
    TokenAPI.checkValidation();
  }, []);

  return (
    <Container>
      <MyblogTitle>Travel Story</MyblogTitle>
      <MyblogSubTitle>
        인생과 여행의 닮은 점<br></br>먼 길을 가는 중에 때로는 쉬어야 한다는 것
      </MyblogSubTitle>
      <MyblogContainer>
        <MyblogContents />
        <SideContainer>
          <MyProfile />
          <Hashtag />
        </SideContainer>
        <ScrollToTop />
      </MyblogContainer>
    </Container>
  );
};

export default MyBlog;
