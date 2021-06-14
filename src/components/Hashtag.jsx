import React, { useEffect, useState } from "react";
import hashtagAPI from "api/hashtagapi";
import {
  Container,
  HashContainer,
  HashtagBtn,
  Title,
  MoreBtn,
  Span,
} from "../styles/HashtagElements";
import useDebounce from "hooks/useDebounce";

const Hashtag = () => {
  const [hashtag, setHashtag] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openBtn, setOpen] = useState(false);
  const [nowClick, setClick] = useState(0);
  const [selectedHash, selectHash] = useState(null);

  const filterFn = (hash) => hashtagAPI.filterPostByHashtag(hash);
  const timer = useDebounce(nowClick, selectedHash, filterFn); //현재 클릭에 따라 useDebouce return 값 갱신

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const res = await hashtagAPI.getHashtag(); //렌더링 후 최초 데이터 호출
    setHashtag(res);
    setLoading(false);
  }, [hashtag]);

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
      <HashContainer more={openBtn} onClick={onHandleClick}>
        {!loading
          ? hashtag.length
            ? hashtag.map((child, idx) => (
                <HashtagBtn key={idx} className="hashtag">
                  <Span className="hashtag">{child}</Span>
                </HashtagBtn>
              ))
            : "생성된 해시태그가 없습니다. 👀"
          : "loading..."}
      </HashContainer>
      {!loading && hashtag.length > 0 && (
        <MoreBtn onClick={() => setOpen(!openBtn)}>
          {openBtn ? "close" : "more"}
        </MoreBtn>
      )}
    </Container>
  );
};

export default Hashtag;
