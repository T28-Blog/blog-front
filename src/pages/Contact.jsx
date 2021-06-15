import ProfileCard from 'components/ProfileCard'
import React from 'react'
import {PageTitle, ContactContainer} from '../styles/ContactElements'
import ScrollToTop from 'components/ScrollToTop'

const ContactUs = () => {
    return (
        <>
            <PageTitle>Contact Us</PageTitle>
            <ContactContainer>
                <ProfileCard/>
            </ContactContainer>
            <ScrollToTop />
        </>
    )
}

export default ContactUs
