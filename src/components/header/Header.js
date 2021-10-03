import React, { useState, useEffect } from 'react';
import logo from 'assets/logo_basic.png';
import { FaSearch, FaTimes, FaBars } from 'react-icons/fa';
import { style } from './HeaderStyle';

const Header = () => {
  const [click, setClick] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    changeNav();
    window.addEventListener('scroll', changeNav);
  }, []);

  return (
    <Nav active={scroll} click={click}>
      <NavbarContainer>
        <NavLogo to="/" onClick={closeMobileMenu}>
          <img src={logo} alt="logo" width="150px" />
        </NavLogo>
        <MobileIcon onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavMenu onClick={handleClick} click={click}>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/myblog">My Blog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/sign-up">회원가입</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/search">
              <FaSearch />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavBtnLink to="/sign-in">로그인</NavBtnLink>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Header;

const {
  Nav,
  NavbarContainer,
  NavLogo,
  NavBtnLink,
  NavItem,
  NavLink,
  NavMenu,
  MobileIcon,
} = style;
