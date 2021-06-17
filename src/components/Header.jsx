import React, { useEffect, useState } from "react";
import {
  Nav,
  NavLink,
  NavLogo,
  NavItem,
  MobileIcon,
  NavMenu,
  NavBtnLink,
  NavbarContainer,
} from "../styles/HeaderElements";
import logo from "../assets/Team28-logo.png";
import { FaSearch, FaTimes, FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import store from "store/store";

import KakaoLogin from "api/KakaoAPI";
import { LOG_OUT } from "action/index";
import { useHistory } from "react-router-dom";

import { firebaseInstance } from "fbase/Fbase";

const Header = () => {
  const [click, setClick] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  //user 설정(헤더 영역 login & logout 구현)
  const [user, setUser] = useState(store.getState().userInfo.isLogin);

  const history = useHistory();

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  //store 내 state가 변경될 때 불리는 callback 함수
  store.subscribe(() => {
    const { isLogin } = store.getState().userInfo;
    if (isLogin) {
      setUser(true);
    } else {
      setUser(false);
    }
  });

  useEffect(() => {
    changeNav();
    window.addEventListener("scroll", changeNav);
  }, []);

  const doLogout = () => {
    const {
      userInfo: { oauth },
    } = store.getState();
    if (oauth) {
      const { service } = store.getState().userInfo;
      if (service === "kakao") {
        KakaoLogin.kakaoLogout();
      }
    } else {
      //자체 로그인
      firebaseInstance
        .auth()
        .signOut()
        .then(() => {
          store.dispatch({ type: LOG_OUT });
          history.push("/");
          console.log("logout!");
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#131313" }}>
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
                <NavLink to="/writepost">writePost</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/my-blog">My blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contact-us">Contact Us</NavLink>
              </NavItem>
              {!user && (
                <NavItem>
                  <NavLink to="/sign-up">Sign up</NavLink>
                </NavItem>
              )}
              <NavItem>
                <NavLink to="/search">
                  <FaSearch />
                </NavLink>
              </NavItem>
              {user ? (
                <NavItem>
                  <NavBtnLink to="/" onClick={doLogout}>
                    Log out
                  </NavBtnLink>
                </NavItem>
              ) : (
                <NavItem>
                  <NavBtnLink to="/sign-in">Sign in</NavBtnLink>
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
