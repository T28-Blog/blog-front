import React, {useState} from 'react'
import {
    SearchListContainer,
    SearchThumbnail,
    SearchTextBox,
    SearchTitle,
    SearchDesc,
    SearchWriter
} from '../styles/SearchListElements'
import testGoogle from "../assets/test_google.jpeg";
import testMac from "../assets/test_mac.jpeg";

const SearchList = () => {

    const [data, setData ] = useState([
        {
            id: 1,
            image: testGoogle,
            title: 'Designin Google Calculator with React Redux Hooks',
            desc: 'In 2020, Redux made complete sense after I watched the video tutorial by Dan Abramov Redux made complete sense after I watched the video tutorial by Dan Abramov Redux made complete sense after I watched the video tutorial by Dan Abramov Redux made complete sense after I watched the video tutorial by Dan Abramov',
            writer: 'ThankGod Ukachukwu'
        },
        {
            id: 2,
            image: testMac,
            title: 'The 10 Most Popular Programming Articles (May 2021)',
            desc: 'The following articles have been listed in order of number of claps received. This means that there may be a different order based on number of views, although claps generally are a good barometer of how popular an article is/how well it has performed.',
            writer: 'Sunil Sandhu'
        },
        {
            id: 3,
            image: testGoogle,
            title: 'Top Node.js Development Trends in 2021',
            desc: 'Lots of predictions for trends in Node.js for the year 2021 are being assumed by developers across the globe. In the following paragraphs, we are going to explain the expected Node.js trends for this year.',
            writer: 'Rlogical Techsoft.Pvt.Ltd'
        }
    ]);

    

    return (
        <>
        {
            data.map(data => (
                <SearchListContainer key={data.id}>
                    <SearchThumbnail img src={data.image} alt='thumbnail'></SearchThumbnail>
                    <SearchTextBox>
                        <SearchTitle>{data.title}</SearchTitle>
                        <SearchDesc>{data.desc}</SearchDesc>
                        <SearchWriter>{data.writer}</SearchWriter>
                    </SearchTextBox>
                </SearchListContainer>
            ))
        } 
        </>           
    )
}

export default SearchList
