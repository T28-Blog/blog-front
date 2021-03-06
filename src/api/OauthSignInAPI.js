import axios from "axios";
import store from "store/store";
import config from "../config";

const OauthSignin = {
  createUserDB: async (name) => {
    //서버에 유저 생성 요청 call
    const { uid } = store.getState().userInfo;
    const res = await axios({
      method: "post",
      url: `${config.IP_ADDRESS}:4000/users`,
      params: {
        id: uid,
        name,
      },
    });
    return res.data;
  },
  getUserInfo: async (uid) => {
    const res = await axios({
      method: "post",
      url: `${config.IP_ADDRESS}:4000/login`,
      data: { oauthUID: uid },
    });
    return res.data;
  },
};

export default OauthSignin;
