import ProfileCard from 'components/profileCard'
import React from 'react'
import {PageTitle, ContactContainer} from '../styles/contactElements'

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
