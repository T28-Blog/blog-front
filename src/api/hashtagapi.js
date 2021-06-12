import mock_hashtag from "../assets/mock.json";
import fetchData from "fbase/FbaseDB";

const hashtagAPI = {
  getHashtag: () => {
    //get method로 hashtag 데이터 호출
    fetchData();
    const { hashtag: hashtags } = mock_hashtag;
    return hashtags;
  },
  createHashtag: () => {
    //post method로 사용자가 만든 hashtag 생성
  },
  filterPostByHashtag: (hash) => {
    //get method로 해당 hashtag 포함 포스팅 필터링(포스팅 fetch)
    //const fn = () => {};
    if (hash) {
      alert(hash);
    }
  },
};

export default hashtagAPI;
