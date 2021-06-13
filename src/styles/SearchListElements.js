import styled from "styled-components";

export const SearchListContainer = styled.div`
    width: 750px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-bottom: 15px;
`

export const SearchThumbnail = styled.img`
    width: 150px;
    margin: 0;
    margin-right: 10px;
    border-radius: 10px;
`

export const SearchTextBox = styled.div`
    width: 590px;
    height: 100%;
    padding-top: 5px;
`

export const SearchTitle = styled.h3`
    font-size: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
`

export const SearchDesc = styled.p`
    font-size: 14px;
    margin-bottom: 5px;
    color: #6c757d;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`

export const SearchWriter = styled.p`
    font-size: 12px;
    color: blue;
    margin-bottom: 0;

`
