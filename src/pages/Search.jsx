import React, {useState} from 'react'
import { 
    SearchContainer, 
    SearchInputTitle, 
    SearchInputContainer, 
    SearchInput, 
    SearchIcon 
} from '../styles/SearchInputElements'
import {
    SearchListContainer,
    SearchThumbnail,
    SearchTextBox,
    SearchTitle,
    SearchDesc,
    SearchWriter
} from '../styles/SearchListElements'
import { FaSearch } from "react-icons/fa";
// import SearchList from '../components/SearchList'
import JSONDATA from "../assets/MOCK_DATA.json"

const Search = () => {
    
    const [search, setSearch ] = useState('');

    return (
        <>
            <SearchContainer>
                <SearchInputTitle>Search</SearchInputTitle>
                <SearchInputContainer>
                    <SearchInput onChange={event => {setSearch(event.target.value)}}></SearchInput>
                    <SearchIcon>
                        <FaSearch />
                    </SearchIcon>
                </SearchInputContainer>
                {/* <SearchList /> */}
            </SearchContainer>
            {
                JSONDATA.filter((val) => {
                    if(search == ""){
                        return val;
                    } else if(val.title.toLowerCase().includes(search.toLowerCase())){
                        return val;
                    } else if(val.desc.toLowerCase().includes(search.toLowerCase())){
                        return val;
                    }
                }).map((val, key) => (
                    <SearchListContainer key={val.id}>
                        <SearchThumbnail img src={val.image} alt='thumbnail'></SearchThumbnail>
                        <SearchTextBox>
                            <SearchTitle>{val.title}</SearchTitle>
                            <SearchDesc>{val.desc}</SearchDesc>
                            <SearchWriter>{val.writer}</SearchWriter>
                        </SearchTextBox>
                    </SearchListContainer>
                ))
            }
        </>
    )
}

export default Search
