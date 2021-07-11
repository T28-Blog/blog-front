import { useInView } from "react-intersection-observer";
import React, { useState, useCallback } from "react";
import { useEffect } from "react";
import {
  MyPostContainer,
  MyPostContents,
  MyPostContent,
  MyPostTitle,
  MyPostDesc,
  MyPostDetail,
  MyPostDate,
  MyPostEdit,
  MyPostDelete,
  MyPostThumbnail,
} from "styles/MyBlogElements";
import PostDB from "api/PostDB";
import store from "store/store";
import timeChanger from "tools/TimeChange";
// import Modal from "components/Modal";

const MyblogContents = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const [ref, inView] = useInView();

  const [gotPosts, setPosts] = useState([]); //맨 처음에 데이터 페치해오면 가져온 데이터를 10개씩 뿌려주도록 서버 fetch 최소화
  const [itemCount, setItemCount] = useState(0);
  const [maxCount, setMaxCount] = useState(0);
  const [error, setError] = useState(false);

  const [isUser, setUser] = useState(store.getState().userInfo.uid);
  const unsubscribe = store.subscribe(() => {
    if (!isUser) {
      setUser(store.getState().userInfo.uid); //페이지 새로고침 시, 유저 정보 setState
    }
  });

  useEffect(() => {
    return () => {
      unsubscribe();
      setItems(null);
    };
  }, []);

  // 서버에서 post data를 가져옴
  const getItems = useCallback(async () => {
    try {
      setLoading(true);
      let posts = gotPosts;
      if (!gotPosts.length) {
        posts = await PostDB.fetchMyPosts();
        setPosts(posts);
      }
      if (!maxCount) {
        setMaxCount(posts.length);
      }
      if (posts.length > itemCount) {
        const countedPost = posts.slice(itemCount, itemCount + 10);
        setItems((prevState) => [...prevState, ...countedPost]);
        setItemCount((prev) => prev + 10);
      }
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [page, isUser]);

  // 'getItems'가 바뀔 때마다 함수 실행
  useEffect(() => {
    getItems();
  }, [getItems]);

  // 사용자가 마지막 포스트를 보고 있고 로딩중이 아닐때 실행
  useEffect(() => {
    if (inView && !loading && maxCount > itemCount) {
      setPage((prevState) => prevState + 1);
    }
  }, [inView, loading]);

  return (
    <MyPostContainer>
      {items &&
        items.map((post, idx) => (
          // ref를 div요소에 걸어주면 요소가 보이면 inView가 true, 안보이면 false
          <MyPostContents
            to={`detailPost/${post.post_id}`}
            key={post.post_id}
            ref={ref}
          >
            <MyPostContent>
              <MyPostTitle>{post.title}</MyPostTitle>
              <MyPostDesc>{post.text}</MyPostDesc>
              <MyPostDetail>
                <MyPostDate>{timeChanger.utcTOnow(post.date)}</MyPostDate>
                <MyPostEdit>수정</MyPostEdit>
                <MyPostDelete>삭제</MyPostDelete>
              </MyPostDetail>
            </MyPostContent>
            <MyPostThumbnail
              img
              src={post.img}
              alt="thumbnail"
            ></MyPostThumbnail>
          </MyPostContents>
        ))}
    </MyPostContainer>
  );
};

export default MyblogContents;
