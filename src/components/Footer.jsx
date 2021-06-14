import React from 'react'
import {Footer, FooterWrapper, FooterTitle, FooterLink, CopyRight} from '../styles/FooterElements'

const footer = () => {
    return (
        <Footer>
            <FooterWrapper>
                <FooterTitle>
                    <FooterLink to='/'>Home</FooterLink>
                </FooterTitle>
                <FooterTitle>
                    <FooterLink to='/my-blog'>My blog</FooterLink>
                </FooterTitle>
                <FooterTitle>
                    <FooterLink to='/contact-us'>Contact us</FooterLink>
                </FooterTitle>
                <FooterTitle>
                    <FooterLink to='/sign-up'>Sign up</FooterLink>
                </FooterTitle>
            </FooterWrapper>
            <hr style={{color: '#999'}}/>
            <FooterWrapper>
                <CopyRight>Copyright 2021. Team28 All pictures cannot be copied without permission. </CopyRight>
            </FooterWrapper>
        </Footer>

    )
}

export default footer
