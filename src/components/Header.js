import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from '../styles/HeaderElements'
import logo from '../assets/Team28-logo.png'
import { FaSearch } from 'react-icons/fa'

const Header = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src={logo} alt="logo" width="150px"/>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/contact-us" activeStyle>
                        Contact Us
                    </NavLink>
                    <NavLink to="/sign-up" activeStyle>
                        Sign Up
                    </NavLink>
                    <NavLink to="/search" activeStyle>
                        <FaSearch />
                    </NavLink>
                    <NavBtnLink to='/sign-in'>Sign In</NavBtnLink>
                </NavMenu>
                {/* <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn> */}
            </Nav>
        </>
    )
}

export default Header;
