import mock_comments from "../assets/mock.json";

const CommentsAPI = {
  getComments: () => {
    //추후 비동기 api call로 수정
    const { comments } = mock_comments;
    return comments;
  },
  createComment: (str) => {
    //이 댓글을 작성한 user 정보(store.getState())
    //str : 작성 댓글 text
  },
};

export default CommentsAPI;
