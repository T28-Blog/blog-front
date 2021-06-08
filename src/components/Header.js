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
import KakaoLogin from 'api/kakaoapi';
//import { LOG_OUT } from 'action/index';

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

  //store 내 state가 변경될 때 불리는 callback 함수
  store.subscribe(() => {
    console.log(user);
    setUser(!user);
  });

  useEffect(() => {
    changeNav();
    window.addEventListener('scroll', changeNav);
  }, []);

  // 코드 수정 필요 => 단순히 kakaoLogout을 요청한 후 바로 상태 값이 변경되는 것이 아니라, sign-in page로 redirect 되고 난 뒤 dispatch 호출할 수 있도록
  // 리덕스 미들웨어 라이브러리 적용 필요
  // 확인 결과, 상태를 바꾸지 않아도 history back을 했을 때 최초 렌더링으로 돌아감 ..? 뒤로가기 버튼을 막아야 하는가??
  // 해결 방법 찾아보기
  const doLogout = () => {
    KakaoLogin.kakaoLogout();
    console.log(user);
    //store.dispatch({ type: LOG_OUT });
  };

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
                <NavLink to='/my-blog' activeStyle>
                  My blog
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
                  <NavBtnLink to='/' onClick={doLogout}>
                    Log out
                  </NavBtnLink>
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
