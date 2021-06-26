import React from "react";
import {
  Post,
  SubThumbnail,
  SubTitle,
  SubDesc,
  SubWriter,
  SubProfileImg,
  SubFooter
} from "../styles/IndexElements";
import winter from "../assets/winter.jpeg"

const IndexPost = ({ text, image, name, title }) => {
  return (
    <Post>
      <SubThumbnail>
        <img
          src={image}
          alt="thumbnail"
          width="100%"
          height="100%"
          style={{borderRadius: "10px"}}
        />
      </SubThumbnail>
      <SubTitle>{title}</SubTitle>
      <SubDesc>{text}</SubDesc>
      <SubFooter>
        <SubProfileImg img src={winter}></SubProfileImg>
        <SubWriter>{name}</SubWriter>
      </SubFooter>
    </Post>
  );
};

export default IndexPost;
