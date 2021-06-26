import styled from "styled-components";
import { Link } from "react-router-dom";

export const colors = {
  primary: "#fff",
  theme: "#256ce1",
  light1: "#f3f4f6",
  light2: "#e5e7eb",
  dark1: "#1f2937",
  dark2: "#4b5563",
  dark3: "#9ca3af",
  red: "#dc2626",
  black: "#000",
};

// FormLib 부분
export const StyledLabel = styled.p`
  text-align: left;
  font-size: 13px;
  margin-bottom: 5px;
  color: #7a7a7a;
`
export const StyledTextInput = styled.input`
  width: 350px;
  height: 30px;
  padding: 15px;
  padding-left: 0;
  font-size: 17px;
  letter-spacing: 1px;
  color: ${colors.dark3};
  border: none;
  border-bottom: 1px solid ${colors.black};
  outline: none;
  display: block;
  margin: 5px auto 20px auto;
  transition: ease-in-out 0.3s;

  ${(props) =>
    props.invalid &&
    `border-bottom: 1px solid ${colors.red}; color: ${colors.primary};`}

  &:focus {
    border-bottom: 1px solid ${colors.dark2};
    color: ${colors.black};
  }
`
export const ErrorMsg = styled.div`
  font-size: 11px;
  color: ${colors.red};
  margin-top: -15px;
  margin-bottom: 10px;
  text-align: left;
`

//회원가입 & 로그인 공통 부분
export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 100px auto;
  width: 900px;
  height: 100%;
  box-shadow: 8px 8px 20px 8px ${colors.light2};
  border-radius: 20px;
`
export const StyleSideArea = styled.img`
  width: 400px;
  height: 700px;
  object-fit: cover;
  border-radius: 20px;
`
export const Avatar = styled.div`
  width: 200px;
  height: 80px;
  border-radius: 50px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  margin: 0 auto;
  margin-bottom: 20px;
`
export const StyledTitle = styled.h2`
  font-size: 30px;
  font-weight: 300;
  text-align: center;
  color: #fff;
  padding: 5px;
  margin-bottom: 30px;
`
export const StyledFormArea = styled.div`
  width: 500px;
  padding: 50px 75px;
`
export const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 20px;
`
export const StyledFormButton = styled.button`
  padding: 10px;
  width: 150px;
  background-color: ${colors.theme};
  font-size: 16px;
  outline: none;
  border: 2px solid ${colors.theme};
  border-radius: 25px;
  color: ${colors.primary};
  transition: ease-in-out 0.3s;
  outline: 0;
  margin-top: 20px;

  &:hover {
    background-color: transparent;
    color: ${colors.theme};
    border: 2px solid ${colors.theme};
    cursor: pointer;
  }
`
export const ExtraText = styled.p`
  font-size: ${(props) => props.size}px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : colors.dark2)};
  padding: 2px;
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 12px;
`
export const TextLink = styled(Link)`
  text-decoration: none;
  color: ${colors.theme};
  transition: ease-in-out 0.3s;

  &:hover {
    text-decoration: underline;
    /* letter-spacing: 2px; */
    font-weight: bold;
  }
`

// 로그인 부분 
export const DividerLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.black};
`
export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const OtherAccount = styled.p`
  font-size: 14px;
  text-align: center;
  color: ${colors.black};
  margin-top: 30px;
`;
export const Google = styled.div`
  width: 200px;
  height: 40px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: inline;
  cursor: pointer;
  margin-bottom: 5px;
`;
export const Kakao = styled.div`
  width: 200px;
  height: 40px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: inline;
  cursor: pointer;
`;

