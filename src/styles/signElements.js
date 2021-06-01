import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const colors = {
  primary: '#fff',
  theme: '#256ce1',
  light1: '#f3f4f6',
  light2: '#e5e7eb',
  dark1: '#1f2937',
  dark2: '#4b5563',
  dark3: '#9ca3af',
  red: '#dc2626',
  black: '#000',
};

export const StyledContainer = styled.div`
  margin: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledTitle = styled.h2`
  font-size: ${(props) => props.size}px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : colors.primary)};
  padding: 5px;
  margin-bottom: 30px;
`;

export const StyledSubTitle = styled.p`
  font-size: ${(props) => props.size}px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : colors.primary)};
  padding: 5px;
  margin-bottom: 25px;
`;

export const Avatar = styled.div`
  width: 200px;
  height: 80px;
  border-radius: 50px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  margin: 0 auto;
`;

export const StyledButton = styled(Link)`
  padding: 10px;
  width: 150px;
  background-color: transparent;
  font-size: 16px;
  border: 3px solid ${colors.primary};
  border-radius: 25px;
  color: ${colors.primary};
  text-decoration: none;
  text-align: center;
  transition: ease-in-out 0.3s;

  &:hover {
    background-color: ${colors.primary};
    color: ${colors.theme};
    cursor: pointer;
  }
`;

export const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 25px;
`;

export const StyledTextInput = styled.input`
  width: 280px;
  height: 50px;
  padding: 15px;
  padding-left: 30px;
  font-size: 17px;
  letter-spacing: 1px;
  color: ${colors.dark3};
  border: 1px solid ${colors.black};
  outline: 0;
  display: block;
  margin: 5px auto 10px auto;
  transition: ease-in-out 0.3s;

  ${(props) =>
    props.invalid &&
    `background-color: ${colors.red}; color: ${colors.primary};`}

  &:focus {
    background-color: ${colors.dark2};
    color: ${colors.primary};
  }
`;

export const StyledLabel = styled.p`
  text-align: left;
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const StyledFormArea = styled.div`
  max-width: 375px;
  background-color: ${(props) => props.bg || colors.primary};
  text-align: center;
  padding: 45px 50px;
  margin: 50px auto 0 auto;
  box-shadow: 8px 8px 20px 8px ${colors.light2};

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100vh;
    margin-top: 0;
  }
`;

export const StyledFormButton = styled.button`
  padding: 10px;
  width: 150px;
  background-color: transparent;
  font-size: 16px;
  border: 2px solid ${colors.theme};
  border-radius: 25px;
  color: ${colors.theme};
  transition: ease-in-out 0.3s;
  outline: 0;

  &:hover {
    background-color: ${colors.theme};
    color: ${colors.primary};
    cursor: pointer;
  }
`;

export const ErrorMsg = styled.div`
  font-size: 11px;
  color: ${colors.red};
  margin-top: -5px;
  margin-bottom: 10px;
  text-align: left;
`;

export const ExtraText = styled.p`
  font-size: ${(props) => props.size}px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : colors.dark2)};
  padding: 2px;
  margin-top: 10px;
  margin-bottom: 50px;
  font-size: 12px;
`;

export const TextLink = styled(Link)`
  text-decoration: none;
  color: ${colors.theme};
  transition: ease-in-out 0.3s;

  &:hover {
    text-decoration: underline;
    /* letter-spacing: 2px; */
    font-weight: bold;
  }
`;

export const DividerLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.black};
`;

export const OtherAccount = styled.p`
  font-size: 14px;
  text-align: center;
  color: ${colors.black};
  margin-top: 30px;
`;

export const Facebook = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  margin: 0 10px 0 auto;
  display: inline;
  cursor: pointer;
`;

export const Google = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  margin: 0 10px 0 auto;
  display: inline;
  cursor: pointer;
`;

export const Kakao = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  margin: 0 auto;
  display: inline;
  cursor: pointer;
`;
