import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  HashContainer,
  HashtagBtn,
  Title,
  MoreBtn,
  Span,
} from "../styles/HashtagElements";
import useDebounce from "hooks/useDebounce";
import PostDB from "api/PostDB";
import store from "store/store";

const Hashtag = ({ posts, myBlog = false }) => {
  const [hashtag, setHashtag] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [openBtn, setOpen] = useState(false);
  const [nowClick, setClick] = useState(0);
  const [selectedHash, selectHash] = useState(null);

  const [isUser, setUser] = useState(store.getState().userInfo.uid);
  const unsubscribe = store.subscribe(() => {
    if (!isUser) {
      setUser(store.getState().userInfo.uid); //페이지 새로고침 시, 유저 정보 setState
    }
  });
  const history = useHistory();

  const filterFn = (hash) => {
    if (hash) {
      history.push(`/topic/${hash}`);
    }
  };
  useDebounce(nowClick, selectedHash, filterFn); //현재 클릭에 따라 useDebouce return 값 갱신

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const looping = (arr) => {
      let res = [];
      for (let item of arr) {
        const { hashtag } = item;
        if (hashtag && hashtag.length) {
          res = [...res, ...hashtag];
        }
      }
      return res;
    };
    try {
      let res = [];
      if (posts && posts.length) {
        //홈 화면 최신글 hastag
        res = looping(posts);
      } else if (!posts) {
        //my blog에서 새로고침 한 경우
        const response = await PostDB.fetchMyPosts();
        if (response && response.length) {
          res = looping(response);
        }
      }
      res = [...new Set(res)];
      setHashtag(res);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [isUser]);

  useEffect(() => {
    return () => {
      setHashtag(null);
      unsubscribe();
    };
  }, []);

  const onHandleClick = (e) => {
    const target = e.target;
    if (target.className.includes("hashtag")) {
      const hash = target.innerText;
      setClick(nowClick + 1);
      selectHash(hash);
    }
  };

  return (
    <Container>
      <Title>Tags</Title>
      {error ? (
        <HashContainer>
          {" "}
          해시태그를 불러오는 데 실패했습니다. 잠시 후 다시 시도해주세요. 🙇‍♂️{" "}
        </HashContainer>
      ) : (
        <>
          <HashContainer myBlog={myBlog} more={openBtn} onClick={onHandleClick}>
            {!loading ? (
              hashtag.length ? (
                hashtag.map((child, idx) => (
                  <HashtagBtn key={idx} className="hashtag">
                    <Span className="hashtag">{child}</Span>
                  </HashtagBtn>
                ))
              ) : (
                <div style={{ marginTop: "10px" }}>
                  생성된 해시태그가 없습니다. 👀
                </div>
              )
            ) : (
              <div style={{ marginTop: "10px" }}>⏱</div>
            )}
          </HashContainer>
          {!loading && hashtag.length > 0 && !myBlog && (
            <MoreBtn onClick={() => setOpen(!openBtn)}>
              {openBtn ? "close" : "more"}
            </MoreBtn>
          )}
        </>
      )}
    </Container>
  );
};

export default Hashtag;
