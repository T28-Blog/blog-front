import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { firebaseInstance } from "fbase/Fbase";
import OauthSignin from "api/OauthSignInAPI";
import { ADD_NAME } from "action";
import store from "store/store";
import {
  Container,
  Title,
  Form,
  NicknameInput,
  CheckNickname,
  Button,
} from "styles/UserInfoElements";

const UserInfo = () => {
  const [userName, setUserName] = useState(null);
  const [isNickname, enrollNickname] = useState("none");

  const history = useHistory();

  const checkUserName = async () => {
    let overlap = false;

    const checkOverlap = await firebaseInstance.database().ref("/users").get();
    await checkOverlap.forEach((data) => {
      if (data.val().name === userName) {
        overlap = true;
      }
    });

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
    const { uid, jwt } = store.getState().userInfo;
    if (!uid && !jwt) {
      history.push("/");
    }
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
          <CheckNickname color={isNickname}>
            {isNickname === "success"
              ? "등록 가능! 닉네임을 저장 중입니다. 잠시만 기다려주세요."
              : "이미 사용하고 있는 닉네임입니다. 다른 닉네임을 사용해 주세요."}
          </CheckNickname>
        )}
        <Button type="submit">등록</Button>
      </Form>
    </Container>
  );
};

export default UserInfo;
