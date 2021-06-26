import React, { useState, useEffect } from "react";
import {
  SearchContainer,
  SearchInputTitle,
  SearchInputContainer,
  SearchInput,
  SearchIcon,
} from "../styles/SearchInputElements";
import {
  SearchListContainer,
  SearchThumbnail,
  SearchTextBox,
  SearchTitle,
  SearchDesc,
  SearchWriter,
} from "../styles/SearchListElements";
import { FaSearch } from "react-icons/fa";
import ScrollToTop from "components/ScrollToTop";
import JSONDATA from "../assets/MOCK_DATA.json";
import TokenAPI from "api/TokenAPI";
import store from "store/store";
import { Modal } from "bootstrap";

const Search = () => {
  const [search, setSearch] = useState("");
  const [isModal, setShowModal] = useState(false);

  useEffect(() => {
    const { uid } = store.getState().userInfo;
    TokenAPI.checkValidation(uid)
      .then((obj) => {
        const { modal } = obj;
        if (modal) {
          setShowModal(true);
          TokenAPI.clearJWT();
        }
      })
      .catch((err) => {
        //console.log(err);
      });
  }, []);

  return (
    <>
      <SearchContainer>
        <SearchInputTitle>검색하기</SearchInputTitle>
        <SearchInputContainer>
          <SearchInput
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          ></SearchInput>
          <SearchIcon>
            <FaSearch />
          </SearchIcon>
        </SearchInputContainer>
        {/* <SearchList /> */}
      </SearchContainer>
      {JSONDATA.filter((val) => {
        if (search === "") {
          return false
        } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
          return val;
        } else if (val.desc.toLowerCase().includes(search.toLowerCase())) {
          return val;
        }
      }).map((val, key) => (
        <SearchListContainer key={val.id}>
          <SearchThumbnail
            img
            src={val.image}
            alt="thumbnail"
          ></SearchThumbnail>
          <SearchTextBox>
            <SearchTitle>{val.title}</SearchTitle>
            <SearchDesc>{val.desc}</SearchDesc>
            <SearchWriter>{val.writer}</SearchWriter>
          </SearchTextBox>
        </SearchListContainer>
      ))}
      <ScrollToTop />
      {isModal && (
        <Modal
          title="로그인 유효시간 종료"
          desc="로그인 유지 시간이 종료되었습니다.<br>다시 로그인해주세요."
        />
      )}
    </>
  );
};

export default Search;
