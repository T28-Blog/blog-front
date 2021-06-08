import styled from 'styled-components'

export const MainSlider = styled.div `
    width: 100%;
    height: 400px;
    background-color: #000;
    color: white;
    font-size: 40px;
    text-align: center;
`
export const SectionTitle = styled.h2 `
    display: block;
    max-width: 1000px;
    margin: 0 auto;
    padding-top: 50px;
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 30px;
    

    @media screen and (max-width: 768px){
        width: 650px;
    }

    @media screen and (max-width: 375px){
        width: 375px;
        padding-left: 20px;
        padding-right: 20px;
    }
`

export const Section = styled.div `
    max-width: 1000px;
    margin: 0 auto;
`
export const PostContainer = styled.div `
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 30px; 
`
export const MainPost = styled.div `
    display: inline-block;
    width: 650px;
    margin: 0 50px 0 0;

    @media screen and (max-width: 768px){
        display: block;
        width: 650px;
        margin: 0 auto;
    }

    @media screen and (max-width: 375px){
        display: block;
        width: 375px;
        margin: 0 auto;
    }
`

export const MainThumbnail = styled.div `
    width: 100%;
    height: 350px;
    margin-bottom: 20px;
    border-radius: 50px;
`

export const MainTitle = styled.h3 `
    font-size: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    @media screen and (max-width: 375px){
        padding: 0 20px 0 20px;
    }
`

export const MainDesc = styled.p `
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

    @media screen and (max-width: 375px){
        padding: 0 20px 0 20px;
    }
`

export const Writer = styled.p `
    font-size: 12px;
    color: blue;
    margin-bottom: 0;

    @media screen and (max-width: 375px){
        padding: 0 20px 0 20px;
    }
`

// export const Hashtag = styled.div`     width: 300px;     height: 350px;
// background-color: blue;     color: white;     font-size: 30px;
// text-align: center;

//     @media screen and (max-width: 768px){         display: none;     } `

export const PostList = styled.div `
    position: relative;
    width: 1000px;
    height: 100%;

    @media screen and (max-width: 768px){
        width: 650px;
        margin: 0 auto;
    }

    @media screen and (max-width: 375px){
        width: 375px;
        height: 100%;
        padding: 0 20px;
    }
`

export const Post = styled.div `
    display: inline-block;
    vertical-align: top;
    width: 300px;
    margin: 0 50px 30px 0;
    overflow: hidden;
    

    &:nth-child(3){
        margin-right: 0;
    }

    &:last-child {
        margin-right: 0;
    }

    @media screen and (max-width: 768px){
        width: 200px;
        margin: 0;
        margin-right: 25px;

        &:nth-child(3),
        :nth-child(6){
            margin-right: 0;
        }
    }

    @media screen and (max-width: 375px){
        width: 155px;
        height: 100%;
        margin-right: 25px;
        &:nth-child(3){
            margin-right: 25px;
        }

        &:nth-child(2),
        :nth-child(4),
        :nth-child(6){
            margin-right: 0;
        }
    }
`
export const SubThumbnail = styled.div `
    margin-bottom: 10px;
`
export const SubTitle = styled.h4 `
    font-size: 20px;
    margin-bottom: 2px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`
export const SubDesc = styled.p `
    font-size: 14px;
    margin-bottom: 2px;
    color: #6c757d;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`
export const SubWriter = styled.p `
    font-size: 12px;
    color: blue;
    white-space: nowrap;
`

export const PopularContainer = styled.div `
    display: inline-block;
    width: 1000px;
    height: 100%;
    margin-bottom: 40px;

    @media screen and (max-width: 768px){
        display: block;
        width: 650px;
        margin: 0 auto;
        margin-bottom: 40px;
    }

    @media screen and (max-width: 375px){
        display: block;
        width: 375px;
        height: 100%;
        margin-bottom: 30px;
    }
`

export const PopularPost = styled.div `
    display: inline-block;
    width: 475px;
    height: 350px;
    margin-right: 50px;

    &:last-child{
        margin-right: 0;
    }

    @media screen and (max-width: 768px){
        width: 310px;
        margin-right: 30px;
        text-align: initial;

        &:last-child{
            margin-right: 0;
        }
    }

    @media screen and (max-width: 375px){
        width: 375px;

        &:last-child{
            display: none;
        }
    }
`

export const PopularThumbnail = styled.div `
    width: 100%;
    margin-bottom: 20px;
`