import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import store from "store/store";
import ConfirmUser from "tools/ConfirmUser";
import { ADD_NAME, ADD_UID } from "action";

import {
  LoaderContainer,
  Loader,
  LoadingPlane,
  LoadingTitle,
} from "styles/PreLoaderElements";
import airplane from "../assets/airplane.png";

const PreLoader = (props) => {
  const [noKakao, setNoKakao] = useState(false);
  const [isUserID, setUserID] = useState(null);
  const [oauthService, setOauth] = useState(null);
  const history = useHistory();

  const {
    location: { state },
  } = props;

  if (state && !noKakao) {
    const { oauth, uid } = state; //구글, 깃허브 등 다른 소셜 로그인
    setNoKakao(noKakao === false && oauth);
    setUserID(() => {
      if (!isUserID) {
        return uid;
      }
    });
    setOauth(() => {
      if (!oauthService) {
        return oauth;
      }
    });
  }

  const checkUser = (res) => {
    res
      .then((data) => {
        if (data.needUserData) {
          store.dispatch({ type: ADD_UID, uid: data.userID });
          history.push("/userinfo");
        } else {
          const { name, user_id } = data.userData;
          store.dispatch({ type: ADD_UID, uid: user_id });
          store.dispatch({ type: ADD_NAME, name });
          history.push("/");
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const requestToken = new URL(window.location.href).searchParams.get("code"); //카카오 인증 코드 받아오기
    if (requestToken) {
      const res = ConfirmUser.kakao(requestToken);
      checkUser(res);
    } else if (noKakao) {
      const result = ConfirmUser.diff(isUserID, oauthService);
      checkUser(result);
    }
  }, []);

  return (
    <LoaderContainer>
      <Loader>
        <LoadingPlane img src={airplane} alt="airpalne"></LoadingPlane>
        <LoadingTitle>Loading ...</LoadingTitle>
      </Loader>
    </LoaderContainer>
  );
};

export default PreLoader;
