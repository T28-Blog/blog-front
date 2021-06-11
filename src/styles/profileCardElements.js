import styled from 'styled-components';

export const ProfileContainer = styled.div`
    max-width: 1000px;
    margin: 0 auto;

    @media screen and (max-width: 768px){
        width: 768px;
        overflow-x: scroll;
        padding: 50px 20px;
        flex-direction: column;
    }

    @media screen and (max-width: 375px){
        width: 375px;
        padding: 50px 20px 50px 20px;
    }
`
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    height: 100%;
    margin: 30px auto;
    background-color: #2c3a47;
    box-shadow: 5px 3px 8px 5px #e1e1e1;

    @media screen and (max-width: 768px){
        display: flex;
        width: 500px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 0 auto 20px auto;

    }

    @media screen and (max-width: 375px){
        display: flex;
        width: 200px;
        margin: 0 auto;
        margin-bottom: 20px;
    }
`
export const CardHeader = styled.div`
    width: 100%;
    text-align: center;
    padding: 20px 10px;
`
export const ProfileThumbnail = styled.img`
    display: block;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 20px;
    border: 5px solid #4f6477;
    

`
export const Name = styled.p`
    font-size: 16px;
    font-weight: 600;
    color: white;
    margin: 0 0 10px 0;

    @media screen and (max-width: 375px){
        display: block;
    }
`
export const Job = styled.p`
    font-size: 12px;
    font-weight: 300;
    color: #f29494;
    margin: 0 0 10px 0;
`
export const Desc = styled.p`
    font-size: 10px;
    font-weight: 300;
    color: #adb5bd;

    @media screen and (max-width: 375px){
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        word-wrap: break-word;
    }
`
export const Email = styled.button`
    width: 100px;
    height: 30px;
    border: 1px solid #fff;
    outline: none;
    border-radius: 30px;
    background-color: #2c3a47;
    color: #fff;
    font-size: 10px;
    text-align: center;
    line-height: 30px;
    text-transform: uppercase;

    &:hover {
        border: 1px solid #f29494;
        background-color: #f29494;
        transition: all 0.3s ease-in-out
    }
`
export const CardFooter = styled.div`
    display: flex;
    width: 500px;
    height: 40px;
    padding: 10px;
    background-color: #adb5bd;

    @media screen and (max-width: 768px){
        width: 500px;
    }

    @media screen and (max-width: 375px){
        width: 200px;
    }
`
export const IconLink = styled.a`
    color: #fff;
    text-decoration: none;
    outline: none;
    margin: 0 auto;
`