import React from "react";
import {
  Post,
  SubThumbnail,
  SubTitle,
  SubDesc,
  SubWriter,
  SubFooter,
  WriterImg,
} from "../styles/IndexElements";

const IndexPost = ({ text, image, name, title, thumbnail, postID }) => {
  console.log('there', image);
  return (
    <Post to={`detailPost/${postID}`}>
      <SubThumbnail>
        <img
          src={image}
          alt="main"
          width="100%"
          height="100%"
          style={{ borderRadius: "10px" }}
        />
      </SubThumbnail>
      <SubTitle>{title}</SubTitle>
      <SubDesc>{text}</SubDesc>
      <SubFooter>
        <WriterImg src={thumbnail} alt="thumbnail"></WriterImg>
        <SubWriter>{name}</SubWriter>
      </SubFooter>
    </Post>
  );
};

export default IndexPost;
