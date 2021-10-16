import Editor from 'components/editor/Editor';
import React, { useRef, useState } from 'react';
import { style } from './WritePostStyle';
import thumbnail from 'assets/1.jpeg';

const WritePost = () => {
  const [content, setContent] = useState({
    title: '',
    content: '',
  });
  const inputOpenImageRef = useRef(null);

  const getTitle = (e) => {
    const { name, value } = e.target;
    setContent({
      ...content,
      [name]: value,
    });
    console.log(content);
  };

  const handleOpenImageRef = () => {
    inputOpenImageRef.current.click();
  };

  const handleUploadImage = (e) => {
    const file = e.target.files[0];
  };

  return (
    <WriteContainer>
      <ButtonContainer>
        <Button>뒤로</Button>
        <Button>저장</Button>
      </ButtonContainer>
      <Title
        type="text"
        name="title"
        placeholder="제목을 입력하세요."
        onChange={getTitle}
      />
      <Thumbnail>
        <img src={thumbnail} alt="thumbnail" onClick={handleOpenImageRef} />
        <input
          type="file"
          accept="image.jpeg, image/png"
          onChange={handleUploadImage}
          ref={inputOpenImageRef}
        />
      </Thumbnail>
      <Editor />
    </WriteContainer>
  );
};

export default WritePost;

const { WriteContainer, Title, Thumbnail, ButtonContainer, Button } = style;
