import ScrollToTop from 'components/ScrollToTop'
import React from 'react'

const MyBlog = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '90vh'
            }}
        >
            <h1>MyBlog</h1>
            <ScrollToTop />
        </div>
    )
}

export default MyBlog