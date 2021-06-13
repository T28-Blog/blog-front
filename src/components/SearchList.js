import React from 'react'
import {
    SearchListContainer,
    SearchThumbnail,
    SearchTextBox,
    SearchTitle,
    SearchDesc,
    SearchWriter
} from '../styles/SearchListElements'
import testGoogle from "../assets/test_google.jpeg";

const SearchList = () => {
    return (
        <SearchListContainer>
            <SearchThumbnail img src={testGoogle} alt='thumbnail'></SearchThumbnail>
            <SearchTextBox>
                <SearchTitle>Designin Google Calculator with React Redux Hooks</SearchTitle>
                <SearchDesc>In 2020, Redux made complete sense after I watched the video tutorial by Dan Abramov Redux made complete sense after I watched the video tutorial by Dan Abramov Redux made complete sense after I watched the video tutorial by Dan Abramov Redux made complete sense after I watched the video tutorial by Dan Abramov</SearchDesc>
                <SearchWriter>ThankGod Ukachukwu</SearchWriter>
            </SearchTextBox>
        </SearchListContainer>
    )
}

export default SearchList
