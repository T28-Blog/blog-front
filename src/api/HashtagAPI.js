import { firebaseInstance } from "fbase/Fbase";
import store from "store/store";

const hashtagAPI = {
  filterPostByHashtag: (hash) => {
    //get method로 해당 hashtag 포함 포스팅 필터링(포스팅 fetch)
    //const fn = () => {};
    if (hash) {
      alert(hash);
    }
  },
};

export default hashtagAPI;
