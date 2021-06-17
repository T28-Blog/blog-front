import React from 'react'
import {
    MyPostContainer,
    MyPostContents,
    MyPostContent,
    MyPostTitle,
    MyPostDesc,
    MyPostDate,
    MyPostThumbnail
} from 'styles/MyBlogElements'
import JSONDATA from "../assets/MOCK_DATA.json"

const MyblogContents = () => {
    return (
        <MyPostContainer>
            {
                JSONDATA.map((val, key) => (
                    <MyPostContents key={val.id}>
                        <MyPostContent>
                            <MyPostTitle>{val.title}</MyPostTitle>
                            <MyPostDesc>{val.desc}</MyPostDesc>
                            <MyPostDate>20201.06.17</MyPostDate>
                        </MyPostContent>
                        <MyPostThumbnail img src={val.image} alt='thumbnail'></MyPostThumbnail>
                    </MyPostContents>
                ))
            }
        </MyPostContainer>
    )
}

export default MyblogContents
