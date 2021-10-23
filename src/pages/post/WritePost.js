import React, { useRef, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { style } from './WritePostStyle';
import thumbnail from 'assets/thumbnail.jpg';
import Dropdown from 'components/dropdown/Dropdown';
import { addDoc, collection, doc } from '@firebase/firestore';
import { db, auth, storage } from 'api/Firebase';
import moment from 'moment';
import 'moment/locale/ko';
import { ref, uploadString } from '@firebase/storage';
import { base64 } from '@firebase/util';

const WritePost = () => {
  const [postContent, setPostContent] = useState({
    title: '',
    content: '',
    category: '',
  });
  const inputOpenImageRef = useRef(null);
  const [selected, setSelected] = useState('Choose One');
  const [imgFile, setImgFile] = useState(null);
  const [imgBase64, setImgBase64] = useState('');
  const nowDate = moment().format('YYYY-MM-DD HH:mm:ss');

  const getValue = (e) => {
    const { name, value } = e.target;
    setPostContent({
      ...postContent,
      [name]: value,
    });
  };

  const getCategory = () => {
    setPostContent({
      ...postContent,
      category: selected,
    });
  };

  const handleOpenImageRef = () => {
    inputOpenImageRef.current.click();
  };

  const handleChangeFile = (e) => {
    let reader = new FileReader();
    const file = e.target.files[0];
    const imageRef = ref(storage, 'images/' + file.name);
    const metadata = {
      contentType: 'image/png',
    };

    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString());
      }
    };
    if (file) {
      reader.readAsDataURL(file);
      setImgFile(file);
    }
    uploadString(imageRef, base64).then((snapshot) => {
      console.log('Uploaded ad base64 string');
    });
  };

  const registerPost = () => {
    addDoc(collection(db, 'Posts'), {
      title: postContent.title,
      content: postContent.content,
      category: postContent.category,
      createdAt: nowDate,
      writter: auth.currentUser.displayName,
      thumbnail: base64 || '',
    });
  };

  return (
    <WriteContainer>
      <ButtonContainer>
        <Button>뒤로</Button>
        <Button type="submit" onClick={registerPost}>
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
        <img
          src={imgBase64}
          onClick={handleOpenImageRef}
          // onError={(event) => (event.target.style.display = 'none')}
          alt=""
        />
        <input
          type="file"
          accept="image.jpeg, image/png"
          name="imgFile"
          id="imgFile"
          onChange={handleChangeFile}
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
        }}
        onBlur={(event, editor) => {}}
        onFocus={(event, editor) => {}}
      />
    </WriteContainer>
  );
};

export default WritePost;

const { WriteContainer, Title, Thumbnail, ButtonContainer, Button } = style;
