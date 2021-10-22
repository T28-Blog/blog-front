import React, { useRef, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { style } from './WritePostStyle';
import thumbnail from 'assets/thumbnail.jpg';
import Dropdown from 'components/dropdown/Dropdown';

const WritePost = () => {
  const [postContent, setPostContent] = useState({
    title: '',
    content: '',
    category: '',
  });
  const inputOpenImageRef = useRef(null);
  const [viewContent, setViewContent] = useState([]);
  const [selected, setSelected] = useState('Choose One');

  const getValue = (e) => {
    const { name, value } = e.target;
    setPostContent({
      ...postContent,
      [name]: value,
    });
    console.log(postContent);
  };

  const handleOpenImageRef = () => {
    inputOpenImageRef.current.click();
  };

  const handleUploadImage = (e) => {
    const file = e.target.files[0];
  };

  const getCategory = () => {
    setPostContent({
      ...postContent,
      category: selected,
    });
  };

  return (
    <WriteContainer>
      <ButtonContainer>
        <Button>뒤로</Button>
        <Button
          onClick={() => {
            setViewContent(viewContent.concat({ ...postContent }));
          }}
        >
          저장
        </Button>
      </ButtonContainer>
      <Dropdown
        name="category"
        selected={selected}
        setSelected={setSelected}
        getCategory={getCategory}
      />
      <Title
        type="text"
        name="title"
        placeholder="제목을 입력하세요."
        onChange={getValue}
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
      <CKEditor
        editor={ClassicEditor}
        data=""
        onReady={(editor) => {}}
        onChange={(event, editor) => {
          const data = editor.getData();
          setPostContent({
            ...postContent,
            content: data,
          });
          console.log(postContent);
        }}
        onBlur={(event, editor) => {}}
        onFocus={(event, editor) => {}}
      />
    </WriteContainer>
  );
};

export default WritePost;

const { WriteContainer, Title, Thumbnail, ButtonContainer, Button } = style;
