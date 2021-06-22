import axios from 'axios';
import { useInView } from 'react-intersection-observer';
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

const MyblogContents = () => {

    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const [ref, inView] = useInView();

    // 서버에서 post data를 가져옴
    const getItems = useCallback(async () => {
        setLoading(true);
        await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}`).then((res) => {
            let response = res.data;
            response = response.slice(10)
            console.log(res);
            setItems(prevState => [...prevState, ...res.data])
        })
        .catch(error => {
            return console.log(error);
        })
        setLoading(false);
    }, [page])

    // 'getItems'가 바뀔 때마다 함수 실행
    useEffect(() => {
        getItems();
    }, [getItems])

    // 사용자가 마지막 포스트를 보고 있고 로딩중이 아닐때 실행
    useEffect(() => {
        if(inView && !loading){
            setPage(prevState => prevState + 1)
        }
    }, [inView, loading])

    return (
        <MyPostContainer>
            {
                items.map((post, idx)  => (
                    // ref를 div요소에 걸어주면 요소가 보이면 inView가 true, 안보이면 false
                    <MyPostContents key={idx} ref={ref}>
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
