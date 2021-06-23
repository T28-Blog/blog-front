import styled from "styled-components";
import { SearchIcon } from "styles/SearchInputElements";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  width: fit-content;
  font-weight: 400;
  @media screen and (max-width: 375px) {
    font-size: medium;
  }
`;

export const Form = styled.form`
  width: 50%;
  height: 38%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const NicknameInput = styled.input`
  all: unset;
  width: 65%;
  height: 40px;
  outline: none;
  text-align: center;
  border-bottom: 1px solid #333;

  @media screen and (max-width: 768px) {
    width: 90%;
    font-size: 0.9rem;
  }
  @media screen and (max-width: 375px) {
    width: 100%;
    font-size: 0.8rem;
  }
`;

export const CheckNickname = styled.span`
  width: fit-content;
  height: fit-content;
  font-size: 0.8rem;
  color: ${(props) => (props.color === "success" ? "green" : "red")};
`;

export const Button = styled(SearchIcon)`
  width: 180px;
  color: #fff;
  border-radius: 40px;

  &:hover {
    transform: scale(0.98);
  }
  @media screen and (max-width: 375px) {
    width: 120px;
    font-size: 0.9rem;
  }
`;
