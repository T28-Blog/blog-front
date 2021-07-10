import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import hashtagAPI from "api/HashtagAPI";
import {
  MyPostContainer,
  MyPostContents,
  MyPostContent,
  MyPostTitle,
  MyPostDesc,
  MyPostDate,
  MyPostThumbnail,
} from "styles/MyBlogElements";
import styled from "styled-components";
import timeChanger from "tools/TimeChange";

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  row-gap: 28px;
`;

const Title = styled.div`
  font-weight: 400;
  font-size: 24px;
  margin-top: 20px;
  width: 100%;
  height: fit-content;
  text-align: center;
`;

const TopicPage = () => {
  const {
    location: { pathname },
  } = useHistory();

  const [topic, setTopic] = useState(pathname.slice(7));
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      const fetchData = async () => {
        try {
          const res = await hashtagAPI.filterPostByHashtag(topic);
          if (!res) {
            //반환값이 Null
            throw new Error();
          }
          setLists(res);
        } catch (e) {
          setError(true);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
    return () => (isMounted = false);
  }, []);

  return (
    <Container>
      <Title>{topic}</Title>
      {error ? (
        <div>해당 Topic 포스팅을 불러오는 데 실패했습니다. 🙇‍♂️ </div>
      ) : loading ? (
        <div>Loading...</div>
      ) : (
        <MyPostContainer>
          {lists.map((post, idx) => (
            // ref를 div요소에 걸어주면 요소가 보이면 inView가 true, 안보이면 false
            <MyPostContents key={post.post_id}>
              <MyPostContent>
                <MyPostTitle>{post.title}</MyPostTitle>
                <MyPostDesc>{post.text}</MyPostDesc>
                <MyPostDate>{timeChanger.utcTOnow(post.date)}</MyPostDate>
              </MyPostContent>
              <MyPostThumbnail
                img
                src={post.img}
                alt="thumbnail"
              ></MyPostThumbnail>
            </MyPostContents>
          ))}
        </MyPostContainer>
      )}
    </Container>
  );
};

export default TopicPage;
