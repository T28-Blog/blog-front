import { firebaseInstance } from "fbase/Fbase";
import axios from "axios";

const LoginDB = {
  createUserDB: async (email) => {
    //서버에 유저 생성 요청 call
    const uuid = firebaseInstance.auth().currentUser.uid;
    console.log(firebaseInstance.auth().currentUser.getIdToken())
    let overlap = false;
    //해당 이메일을 사용하는 유저가 있는지 먼저 확인 -> 이메일이 중복되면, 다른 메일 사용 요청(추후 닉네임으로 바뀔 가능성)
    const checkOverlap = await firebaseInstance.database().ref("/users").get();
    await checkOverlap.forEach((data) => {
      if (data.email === email) {
        overlap = true;
      }
    });
    //유저 중복 확인 코드 필요
    /*
    if (overlap) {
      return { isSaved: false, overlap: true };
    }*/

    const res = await axios({
      method: "post",
      url: `http://localhost:4000/users`,
      params: {
        id: uuid,
        email,
      },
    });
    return res.data;
  },
}

export default LoginDB;