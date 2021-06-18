import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { SearchIcon } from "styles/SearchInputElements";
import { firebaseInstance } from "fbase/Fbase";
import OauthSignin from "api/OauthSignInAPI";
import { ADD_NAME } from "action";
import store from "store/store";

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

const NicknameInput = styled.input`
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
  const [userName, setUserName] = useState(null);
  const [isNickname, enrollNickname] = useState("none");

  const history = useHistory();

  const checkUserName = async () => {
    let overlap = false;

    const checkOverlap = await firebaseInstance.database().ref("/users").get();
    const result = await checkOverlap.forEach((data) => {
      if (data.val().name === userName) {
        overlap = true;
      }
    });
    console.log(result);
    if (overlap) {
      enrollNickname("fail");
    } else {
      enrollNickname("success");
      const { isSaved } = await OauthSignin.createUserDB(userName); //닉네임 서버 전송
      if (isSaved) {
        await store.dispatch({ type: ADD_NAME, name: userName });
        history.push("/success");
      } else {
        alert("사용자 정보를 저장하는 데 실패했습니다. 다시 로그인 해주세요.");
        history.push("/sign-in");
      }
    }
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    setUserName(name);
  };

  useEffect(() => {
    if (userName) {
      checkUserName();
    }
  }, [userName]);

  return (
    <Container>
      <Title>🎉 Team28의 첫 방문을 환영합니다! 🎉 </Title>
      <Form onSubmit={onHandleSubmit}>
        <NicknameInput
          placeholder="Team28에서 사용할 닉네임을 적어주세요."
          defaultValue={userName}
        ></NicknameInput>
        {isNickname !== "none" && (
          <CheckEmail color={isNickname}>
            {isNickname === "success"
              ? "등록 가능! 닉네임을 저장 중입니다. 잠시만 기다려주세요."
              : "이미 사용하고 있는 닉네임입니다. 다른 닉네임을 사용해 주세요."}
          </CheckEmail>
        )}
        <Button type="submit">등록</Button>
      </Form>
    </Container>
  );
};

export default UserInfo;
