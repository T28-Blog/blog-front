import KakaoLogin from "api/KakaoAPI";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { SearchIcon } from "styles/SearchInputElements";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  width: fit-content;
  font-weight: 400;
  @media screen and (max-width: 375px) {
    font-size: medium;
  }
`;

const Form = styled.form`
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

const EmailInput = styled.input`
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

const CheckEmail = styled.span`
  width: fit-content;
  height: fit-content;
  font-size: 0.8rem;
  color: ${(props) => (props.color === "success" ? "green" : "red")};
`;

const Button = styled(SearchIcon)`
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

const UserInfo = () => {
  const [userEmail, setUserEmail] = useState(null);
  const [isEmail, enrollEmail] = useState("none");

  const history = useHistory();

  const checkEmail = () => {
    const emailRegExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (emailRegExp.test(userEmail)) {
      enrollEmail("success");
      const res = KakaoLogin.createUserDB(userEmail); //유저 정보 저장 성공 한 경우
      res
        .then((saved) => {
          if (saved.isSaved) {
            history.push("/");
          } else {
            alert(
              "사용자 정보를 DB에 넣는데 실패했습니다. 잠시 후 다시 시도해주세요."
            );
          }
        })
        .catch((err) => alert(`sorry, ${err}`));
    } else {
      enrollEmail("fail");
    }
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    setUserEmail(email);
  };

  useEffect(() => {
    if (userEmail) {
      checkEmail();
    }
  }, [userEmail]);

  return (
    <Container>
      <Title>🎉 Team28의 첫 방문을 환영합니다! 🎉 </Title>
      <Form onSubmit={onHandleSubmit}>
        <EmailInput
          placeholder="Team28에서 사용할 이메일을 적어주세요."
          defaultValue={userEmail}
        ></EmailInput>
        {isEmail !== "none" && (
          <CheckEmail color={isEmail}>
            {isEmail === "success"
              ? "등록 성공!"
              : "유효하지 않은 이메일입니다. 다시 작성해주세요."}
          </CheckEmail>
        )}
        <Button type="submit">등록</Button>
      </Form>
    </Container>
  );
};

export default UserInfo;
