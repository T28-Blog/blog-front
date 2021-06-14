import React from 'react'
import { SearchContainer, SearchTitle, SearchInputContainer, SearchInput, SearchIcon } from '../styles/SearchInputElements'
import { FaSearch } from "react-icons/fa";
import SearchList from '../components/SearchList'

const Search = () => {
    return (
        <SearchContainer>
            <SearchTitle>Search</SearchTitle>
            <SearchInputContainer>
                <SearchInput></SearchInput>
                <SearchIcon>
                    <FaSearch />
                </SearchIcon>
            </SearchInputContainer>
            <SearchList />
        </SearchContainer>
        

    )
}

export default Search
