import React from 'react'
import { Link, Redirect, useLocation } from 'react-router-dom'

const NaverLoginCallback = () => {
    const location = useLocation()

    const getAccessToken = () => {
        try {
            const key = location.hash.split('=')[0]
            console.log(key)
            if(key !== '#access_token') throw new Error()
            const value = location.hash.split('=')[1].split('&')[0]
            return value
        } catch(e){
            return <Redirect to='/error' />
        }
    }
    return (
        <div>
            <Link to='/'>홈으로</Link>
            <h1>로그인 성공</h1>
            <h3>Access Token</h3>
            {getAccessToken()}
        </div>
    )
}

export default NaverLoginCallback
