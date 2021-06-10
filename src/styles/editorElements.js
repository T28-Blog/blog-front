import styled from "styled-components";

export const EditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleArea = styled.input.attrs({
  type: "text",
  placeholder: "제목",
})`
  width: 80%;
  font-size: 1.3rem;
  padding: 0.2em 0.5em;
  margin: 1em 0 0.5em 0;
  border: 1px rgb(219, 218, 227) solid;
  &:focus {
    outline: none;
    border: 1px black solid;
  }
`;

export const HashtagWrapper = styled.div`
  margin-top: 0.5em;
`;

export const HashtagTempText = styled.span`
  font-size: 1.1rem;
  color: gray;
`;

export const HashtagInput = styled.input.attrs({
  type: "text",
  placeholder: "태그입력",
})`
  font-size: 1.1rem;
  border: none;
  color: gray;
  &:focus {
    outline: none;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 0.5em;
  display: flex;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  border-radius: 40px;
  background: transparent;
  border: 1px solid #256ce1;
  padding: 5px 22px;
  color: #256ce1;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 0.2em;
`;

export const BottomWrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
`;