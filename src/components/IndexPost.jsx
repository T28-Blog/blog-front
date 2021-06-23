import React from "react";
import {
  Post,
  SubThumbnail,
  SubTitle,
  SubDesc,
  SubWriter,
} from "../styles/IndexElements";

const IndexPost = ({ text, image, name, title }) => {
  return (
    <Post>
      <SubThumbnail>
        <img
          src={image}
          alt="thumbnail"
          width="100%"
          height="100%"
          object-fit="cover"
        />
      </SubThumbnail>
      <SubTitle>{title}</SubTitle>
      <SubDesc>{text}</SubDesc>
      <SubWriter>{name}</SubWriter>
    </Post>
  );
};

export default IndexPost;
