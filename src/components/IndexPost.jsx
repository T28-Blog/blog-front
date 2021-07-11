import React from "react";
import {
  Post,
  SubThumbnail,
  SubTitle,
  SubDesc,
  SubWriter,
  SubProfileImg,
  SubFooter,
} from "../styles/IndexElements";

const IndexPost = ({ text, image, name, title, thumbnail, postID }) => {
  return (
    <Post to={`detailPost/${postID}`}>
      <SubThumbnail>
        <img
          src={image}
          alt="thumbnail"
          width="100%"
          height="100%"
          style={{ borderRadius: "10px" }}
        />
      </SubThumbnail>
      <SubTitle>{title}</SubTitle>
      <SubDesc>{text}</SubDesc>
      <SubFooter>
        <SubProfileImg img src={thumbnail}></SubProfileImg>
        <SubWriter>{name}</SubWriter>
      </SubFooter>
    </Post>
  );
};

export default IndexPost;
