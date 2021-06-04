import mock_hashtag from '../assets/mock.json';

const hashtagAPI = {
  getHashtag: () => {
    //get method로 hashtag 데이터 호출
    const { hashtag: hashtags } = mock_hashtag;
    return hashtags;
  },
  createHashtag: () => {
    //post method로 사용자가 만든 hashtag 생성
  },
  filterPostByHashtag: (hashtag) => {
    //사용자가 선택한 해시태그를 포함한 포스팅 fetch
  },
};

export default hashtagAPI;
