import styled from "styled-components";
import { StyledFormButton } from "styles/SignElements";
import { colors } from "styles/SignElements";

export const Section = styled.section`
  width: 1000px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 650px;
    margin-left: 4px;
    margin-bottom: 8px;
  }

  @media screen and (max-width: 375px) {
    display: block;
    width: 375px;
    margin: 0 auto;
  }
`;

export const InputContainer = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 30px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    row-gap: 20px;
    align-items: flex-start;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  font-size: 14px;
  font-weight: 300;
  resize: none;
  border: none;
  outline: none;
  padding: 10px;
  margin-bottom: 8px;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media screen and (max-width: 375px) {
    font-size: 0.9rem;
  }
`;

export const SubmitBtn = styled(StyledFormButton)`
  display: flex;
  justify-content: center;
  margin: 0 0 0 auto;
  width: 50px;
  height: 20px;
  line-height: 3px;
  border-width: 1px;
  font-size: 14px;

  @media screen and (max-width: 768px) {
    height: 20px;
    line-height: 2px;
    font-size: 0.8rem;
    white-space: nowrap;
    text-align: center;
  }
`;

export const hr = {
  width: "100%",
  margin: "0px",
};

export const highlight = {
  color: "#256ce1",
  fontWeight: "400",
};

export const CommentContainer = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px;
  row-gap: 10px;
  
  @media screen and (max-width: 375px) {
    padding: 10px;
  }
`;

export const CommentTitle = styled.div`
  width: 200px;
  font-weight: 300;
  font-size: 14px;
  padding-left: 20px;

  @media screen and (max-width: 768px) {
    transform: translate(-90%);
  }
  @media screen and (max-width: 375px) {
    transform: translate(-30%);
  }
`;

export const CommentBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  padding: 10px;
  column-gap: 20px;
  &:nth-child(2) {
    margin-top: 10px;
  }
`;

export const commentTexts = {
  width: "90%",
  display: "flex",
  flexDirection: "column",
};

export const Thumbnail = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-top: 10px;
  background-image: url(${(props) => props.img ?? "img/defaultThumbnail.png"});
  background-position: center;
  background-size: cover;
  @media screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const ID = styled.span`
  width: fit-content;
  height: 40px;
  line-height: 40px;
  vertical-align: middle;
  font-size: 14px;
  color: #8395a7;
  text-align: center;
`;

export const Date = styled.span`
  width: fit-content;
  height: 40px;
  line-height: 40px;
  vertical-align: middle;
  font-size: 12px;
  padding-left: 10px;
  color: #b0bec5;
  text-align: center;
`;

export const Text = styled.div`
  width: 90%;
  height: fit-content;
  color: #222f3e;
  font-size: 14px;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2rem;
  max-height: 3.6rem;
  margin-bottom: 10px;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  
  &.show {
    max-height: fit-content;
    overflow: visible;
    text-overflow: none;
    display: block;
  }
`;

export const MoreBtn = styled.button`
  all: unset;
  border-bottom: 1px solid #8395a7;
  width: fit-content;
  color: #8395a7;
  font-size: 0.8rem;
`;

export const btns = {
  width: "60px",
  display: "inline-flex",
  justifyContent: "space-around",
  marginLeft: "10px",
};

export const EditBtn = styled.button`
  all: unset;
  width: 50%;
  height: 40px;
  line-height: 20px;
  font-size: 0.8rem;
  color: #8395a7;
  text-align: center;
  &:hover {
    color: ${colors.theme};
    font-weight: 400;
  }
`;

export const DeleteBtn = styled.button`
  all: unset;
  width: 50%;
  height: 40px;
  line-height: 20px;
  text-align: center;
  font-size: 0.8rem;
  color: #8395a7;
  &:hover {
    color: ${colors.red};
    font-weight: 400;
  }
`;

export const EditContainer = styled.input`
  width: 90%;
  outline: none;
  border: 1px solid #8395a7;
  font-size: 0.9rem;
  height: 28px;
  line-height: 28px;
`;
