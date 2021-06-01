import React, { useEffect, useState } from 'react';
import {
  Nav,
  NavLink,
  NavLogo,
  NavItem,
  MobileIcon,
  NavMenu,
  NavBtnLink,
  NavbarContainer,
} from '../styles/HeaderElements';
import logo from '../assets/Team28-logo.png';
import { FaSearch, FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import store from 'store/store';

const Header = () => {
  const [click, setClick] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  //user 설정(헤더 영역 login & logout 구현)
  const [user, setUser] = useState(store.getState().userInfo.isLogin);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  store.subscribe(() => {
    setUser(!user);
  });

  useEffect(() => {
    changeNav();
    window.addEventListener('scroll', changeNav);
  }, [user]);

  return (
    <>
      <IconContext.Provider value={{ color: '#131313' }}>
        <Nav active={scroll} click={click}>
          <NavbarContainer>
            <NavLogo to='/' onClick={closeMobileMenu}>
              <img src={logo} alt='logo' width='150px' />
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLink to='/' activeStyle>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/contact-us' activeStyle>
                  Contact Us
                </NavLink>
              </NavItem>
              {!user && (
                <NavItem>
                  <NavLink to='/sign-up' activeStyle>
                    Sign up
                  </NavLink>
                </NavItem>
              )}
              <NavItem>
                <NavLink to='/search' activeStyle>
                  <FaSearch />
                </NavLink>
              </NavItem>
              {user ? (
                <NavItem>
                  <NavBtnLink to='/'>Log out</NavBtnLink>
                </NavItem>
              ) : (
                <NavItem>
                  <NavBtnLink to='/sign-in'>Sign in</NavBtnLink>
                </NavItem>
              )}
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Header;
