//해시태그 컨테이너 내 이벤트 처리

import React, { useEffect, useState } from 'react';
import hashtagAPI from 'api/hashtagapi';
import {
  Container,
  HashContainer,
  HashtagBtn,
  Title,
  MoreBtn,
  Span,
} from 'styles/hashtagElements';

const Hashtag = () => {
  const [hashtag, setHashtag] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openBtn, setOpen] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const res = await hashtagAPI.getHashtag(); //렌더링 후 최초 데이터 호출
    setHashtag(res);
    setLoading(false);
  }, [hashtag]);

  return (
    <Container>
      <Title>Tags</Title>
      <HashContainer more={openBtn}>
        {!loading
          ? hashtag.map((child, idx) => (
              <HashtagBtn key={idx}>
                <Span>{child}</Span>
              </HashtagBtn>
            ))
          : 'loading...'}
      </HashContainer>
      <MoreBtn onClick={() => setOpen(!openBtn)}>
        {openBtn ? 'close' : 'more'}
      </MoreBtn>
    </Container>
  );
};

export default Hashtag;
