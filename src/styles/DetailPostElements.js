import styled from "styled-components";

export const DetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1000px;
    margin: 50px auto;
    height: 100%;
`

export const DetailHeader = styled.div`
    hr {
        margin: 0;
        padding: 0;
        margin-bottom: 50px;
    }
`

export const DetailTitle = styled.h3`
    font-size: 40px;
    font-weight: 600;
    margin: 0;
    padding: 0;
    margin-bottom: 30px;
`

export const DetailInfo = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    height: 50px;
    margin-bottom: 30px;
`

export const DetailImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 0;
    margin-right: 10px;
`

export const DetailWriter = styled.p`
    font-size: 16px;
    color: #256ce1;
    margin-right: 50px;
    height: 50px;
    line-height: 70px;
`

export const DetailDate = styled.p`
    font-size: 14px;
    color: #6c757d;
    margin-right: 30px;
    font-weight: 300;
    height: 50px;
    line-height: 70px;
`

export const DetailHits = styled.p`
    font-size: 14px;
    color: #6c757d;
    font-weight: 300;  
    height: 50px;
    line-height: 70px;  
`

export const DetailBody = styled.div`
    padding: 0 30px;
`