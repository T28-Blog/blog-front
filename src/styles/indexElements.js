import styled from 'styled-components'
// import {Link} from 'react-router-dom'

export const MainSlider = styled.div`
    width: 100%;
    height: 400px;
    background-color: #000;
    margin-bottom: 50px;
    color: white;
    font-size: 40px;
    text-align: center;
`
export const SectionTitle = styled.h2`
    max-width: 1000px;
    margin: 0 auto;
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 30px;

    @media screen and (max-width: 768px){
        display: block;
        width: 650px;
        margin: 0 auto;
    }
`

export const Section = styled.div`
    max-width: 1000px;
    margin: 0 auto;
`
export const PostContainer = styled.div`
    position: relative;
    height: 350px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 140px;    
`
export const MainPost = styled.div`
    display: inline-block;
    width: 650px;
    margin: 0 50px 0 0;

    @media screen and (max-width: 768px){
        display: block;
        width: 650px;
        margin: 0 auto;
    }
`

export const MainThumbnail = styled.div`
    width: 100%;
    margin-bottom: 20px;
    border-radius: 50px;
`

export const MainTitle = styled.h3`
    font-size: 24px;
`

export const MainDesc = styled.p`
    font-size: 14px;
    margin-bottom: 5px;
    color: #6c757d;
`

export const Writer = styled.p`
    font-size: 12px;
    color: blue;
`

export const HashtagContainer = styled.div`
    width: 300px;
    background-color: blue;
    color: white;
    font-size: 30px;
    text-align: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const PostList = styled.div`
    position: relative;
    width: 1000px;
    height: 100%;

    @media screen and (max-width: 768px){
        width: 650px;
        margin: 0 auto;
    }
`

export const Post = styled.div`
    display: inline-block;
    vertical-align: top;
    width: 300px;
    height: 320px;
    margin: 0 50px 30px 0;

    &:nth-child(3){
        margin-right: 0;
    }

    &:last-child {
        margin-right: 0;
    }

    @media screen and (max-width: 768px){
        width: 300px;
        margin: 0;
        margin-right: 50px;

        &:nth-child(2),
        :nth-child(4),
        :nth-child(6){
            margin-right: 0;
        }

        &:nth-child(3){
            margin-right: 50px;
        }
    }
`
export const SubThumbnail = styled.div`
    width: 100%;
    margin-bottom: 10px;
`
export const SubTitle = styled.h4`
    font-size: 20px;
    margin-bottom: 2px;
`
export const SubDesc = styled.p`
font-size: 14px;
    margin-bottom: 2px;
    color: #6c757d;
`
export const SubWriter = styled.p`
    font-size: 12px;
    color: blue;
`