import axios from 'axios';
import React, { useState, useCallback } from 'react';
import { useEffect } from 'react';
import {
    MyPostContainer,
    MyPostContents,
    MyPostContent,
    MyPostTitle,
    MyPostDesc,
    MyPostDate,
    MyPostThumbnail
} from 'styles/MyBlogElements';
import MOCK from '../assets/MOCK_DATA.json'

const MyblogContents = () => {

    const [result, setResult] = useState([]);
    const [item, setItem] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchMoreData = async() => {
        setIsLoading(true);
        setResult(result.concat(item.slice(0, 10)));
        setItem(item.slice(10));
        setIsLoading(false);
    }

    const infiniteScroll = useCallback(() => {
        let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
        let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
        let clientHeight = document.documentElement.clientHeight;

        scrollHeight -= 100;

        if(scrollTop + clientHeight >= scrollHeight && isLoading === false){
            fetchMoreData();
        }
    }, [isLoading]);

    const getFetchData = async() => {
        await axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                let response = res.data;
                console.log(res)
                setResult(response.slice(0, 10));
                response = response.slice(10);
                setItem(response);
                setIsLoading(false);
            })
            .catch(error => {
                return console.log(error);
            });
    }

    useEffect(() => {
        getFetchData();
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', infiniteScroll, true);
        return () => window.removeEventListener('scroll', infiniteScroll, true);
    }, [infiniteScroll]);

    return (
        <MyPostContainer>
            {
                item.map((post, idx)  => (
                    <MyPostContents key={idx}>
                        <MyPostContent>
                            <MyPostTitle>{post.title}</MyPostTitle>
                            <MyPostDesc>{post.body}</MyPostDesc>
                            <MyPostDate>{post.date}</MyPostDate>
                        </MyPostContent>
                        <MyPostThumbnail img src={post.image} alt='thumbnail'></MyPostThumbnail>
                    </MyPostContents>
                ))
            }
        </MyPostContainer>
    )
}

export default MyblogContents
