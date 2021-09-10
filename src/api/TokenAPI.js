import { ADD_JWT, LOG_OUT, REFRESH_PAGE } from "action";
import axios from "axios";
import store from "store/store";
import config from "../config";

const TokenAPI = {
  getJWT: async (id, name) => {
    const res = await axios({
      method: "post",
      url: `${config.IP_ADDRESS}:4000/token/create`,
      data: {
        id,
        name,
      },
      withCredentials: true,
    });
    const {
      data: { token },
    } = res;

    if (token) {
      store.dispatch({ type: ADD_JWT, jwt: token });
    }
  },
  checkValidation: async (id) => {
    try {
      const res = await axios({
        method: "get",
        url: `${config.IP_ADDRESS}:4000/token/verify`,
        params: { id },
        withCredentials: true,
      });

      if (res.data) {
        const { uid, nick: name, token: jwt } = res.data;
        store.dispatch({ type: REFRESH_PAGE, uid, name, jwt });
      }
    } catch (err) {
      const {
        response: {
          data: { code },
        },
      } = err;
      if (code === 419 || code === 401) {
        //토큰 만료 또는 유효하지 않은 토큰
        return { modal: true };
      }
      if (code === 403) {
        //로그인 전
        console.warn("로그인 전");
      }
    }
  },
  clearJWT: async () => {
    try {
      await axios({
        method: "delete",
        url: `${config.IP_ADDRESS}:4000/token/delete`,
        withCredentials: true,
      });
      store.dispatch({ type: LOG_OUT });
    } catch (err) {
      console.error(err);
    }
  },
};

export default TokenAPI;
