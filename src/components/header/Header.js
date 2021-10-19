import React, { useState, useEffect } from 'react';
import { FaSearch, FaTimes, FaBars } from 'react-icons/fa';
import { style } from './HeaderStyle';
import { store } from 'redux/store';
import authentication from 'api/Authentication';
import logInActions from 'redux/actions/loginActions';
import logo from 'assets/logo_basic.png';

const Header = () => {
  const [click, setClick] = useState(false);
  const [scroll, setScroll] = useState(false);

  const [isLoggedUser, setLoggedUser] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const onHandleClickLogOutButton = (event) => {
    const { logOut } = authentication;
    logOut().then(() => {
      store.dispatch(logInActions.userLogOutAction(null));
      setLoggedUser(false);
    });
  };

  useEffect(() => {
    changeNav();
    window.addEventListener('scroll', changeNav);

    const { isLogged } = store.getState();
    if (isLogged) {
      setLoggedUser(true);
    }

    return () => {
      setClick(false);
      setLoggedUser(false);
    };
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
          {isLoggedUser && (
            <NavItem>
              <NavLink to="/my-blog">My Blog</NavLink>
            </NavItem>
          )}
          {!isLoggedUser && (
            <NavItem>
              <NavLink to="/sign-up">회원가입</NavLink>
            </NavItem>
          )}
          <NavItem>
            <NavLink to="/search">
              <FaSearch />
            </NavLink>
          </NavItem>
          {!isLoggedUser ? (
            <NavItem>
              <NavBtnLink to="/sign-in">로그인</NavBtnLink>
            </NavItem>
          ) : (
            <NavItem onClick={onHandleClickLogOutButton}>로그아웃</NavItem>
          )}
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
