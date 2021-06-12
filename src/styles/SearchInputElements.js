import styled from "styled-components";

export const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 1000px;
    height: 100vh;
    margin: 0 auto;
`

export const SearchTitle = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
    font-size: 40px;
`

export const SearchInputContainer = styled.div`
`

export const SearchInput = styled.input.attrs({
    placeholder: 'Search Here'
})`
    width: 700px;
    height: 50px;
    padding-left: 20px;
    -webkit-appearance : none;
    -moz-appearance:none;
    appearance:none;
    border: 1px solid gray;
    outline: none;
    border-radius: 5px;
`

export const SearchIcon = styled.button`
    width: 50px;
    height: 50px;
    border: none;
    background-color: #256ce1;
    margin-left: 5px;
    border-radius: 5px;
`