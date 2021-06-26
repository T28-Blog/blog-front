import styled from "styled-components";

export const EditorWrapper = styled.div`
  display: flex;
  max-width: 1000px;
  height: 100vh;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 50px;
  }

  @media screen and (max-width: 375px) {
    width: 100%;
    padding: 0 20px 50px 20px;
  }
`;

export const PageTitle = styled.h2`
  width: 100%;
  margin: 0;
  margin-top: 50px;
  padding: 0;
  font-size: 40px;
  text-align: left;
  margin-bottom: 30px;

  @media screen and (max-width: 375px) {
    margin: 30px 0 10px 0;
    font-size: 28px;
  }
`;

export const TitleArea = styled.input.attrs({
  type: "text",
  placeholder: "제목을 입력해주세요",
})`
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  padding-left: 20px;
  margin: 10px 0;
  border: 1px rgb(219, 218, 227) solid;

  &:focus {
    outline: none;
    border: 1px black solid;
  }
`;

export const HashtagWrapper = styled.div`
  width: 80%;
  margin-top: 0.5em;
`;

export const HashtagTempText = styled.span`
  font-size: 14px;
  color: #c6c6c6;
  font-weight: 300;
`;

export const HashtagInput = styled.input.attrs({
  type: "text",
  placeholder: "태그입력",
})`
  font-size: 12px;
  font-weight: 300;
  border: none;
  color: #c6c6c6;
  outline: none;
  border-bottom: 1px solid #999;
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
  padding: 2px 15px;
  font-size: 14px;
  line-height: 20px;
  color: #256ce1;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 10px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #256ce1;
    color: #fff;
  }
`;

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ThumbInput = styled.input`
  /*width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  margin: 10px auto;
  color: #6c757d;
  font-size: 14px;*/
  display: none;
`;

export const ThumbContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  column-gap: 10px;
  align-items: center;
  align-self: flex-start;
  margin: 20px 0;
`;

export const ThumbInputLabel = styled.label`
  width: 120px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 4px;
  background-color: #256ce1;
  color: #fff;
  cursor: pointer;
  font-size: 0.9rem;
`;

export const Progress = styled.span`
  font-size: 0.9rem;
  color: #4a69bd;
`;
