import React, { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa';
import { TopButton } from 'styles/ScrollElements'

function ScrollToTop() {

    const [scroll, setScroll] = useState(0);
    const [btnStatus, setBtnStatus] = useState(false);

    const handleFollow = () => {
        // 스크롤 Y 값이 100이상이면 버튼노출, 100이하면 버튼숨김
        setScroll(window.pageYOffset);
        if(scroll > 100){
            setBtnStatus(true);
        } else {
            setBtnStatus(false);
        }
    }

    const handleTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setScroll(0); // 스크롤값 초기화
        setBtnStatus(false); // 버튼 숨김
    }

    useEffect(() => {
        const watch = () => {
            window.addEventListener('scroll', handleFollow)
        }
        watch();
        return () => {
            window.removeEventListener('scroll', handleFollow)
        }
    })


    return (
        <>
            <TopButton onClick={handleTop} style={ btnStatus ? { display: 'block'} : { display: 'none'}}>
                <FaArrowUp />
            </TopButton>
        </>
    )
}

export default ScrollToTop
