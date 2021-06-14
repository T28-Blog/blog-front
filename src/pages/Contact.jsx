import ProfileCard from 'components/ProfileCard'
import React from 'react'
import {PageTitle, ContactContainer} from '../styles/ContactElements'

const ContactUs = () => {
    return (
        <>
            <PageTitle>Contact Us</PageTitle>
            <ContactContainer>
                <ProfileCard/>
            </ContactContainer>
        </>
    )
}

export default ContactUs
