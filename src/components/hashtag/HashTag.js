import React, { useState } from 'react';
import { style } from './HashTagStyle';
import { FaSortDown } from 'react-icons/fa';
import tags from 'assets/HashMock';

const HashTag = () => {
  const [isOpen, setIsOpen] = useState(false);

  const renderHashTag = tags.map((data) => (
    <HashTagBox key={data.id}>#{data.hashtag}</HashTagBox>
  ));

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <Container>
      <HashTagContent isOpen={isOpen}>{renderHashTag}</HashTagContent>
      <MoreBtn onClick={toggleMenu}>
        더보기
        <FaSortDown />
      </MoreBtn>
    </Container>
  );
};

export default HashTag;

const { Container, HashTagContent, HashTagBox, MoreBtn } = style;
