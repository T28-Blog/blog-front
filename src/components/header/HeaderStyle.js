import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

const Nav = styled.nav`
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc(100vw - 1000px) / 2;
  z-index: 10;
  border-bottom: 1px solid #ececec;
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;
  height: 80px;
  z-index: 1;
  margin: 0 auto;
`;

const NavLogo = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  &:active {
    color: #15cdfc;
  }
`;

const MobileIcon = styled.div`
  display: none;
  color: #000;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: -15px;
    right: 0px;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  margin-bottom: 0;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    top: ${({ click }) => (click ? '100' : '-1000px')};
    opacity: 1;
    transition: all 0.2s ease;
    background: #fff;
    z-index: 999;
    padding-left: 0;
  }
`;

const NavItem = styled.li`
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const NavLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      color: #256ce1;
      transition: all 0.3s ease;
    }
  }
`;

const NavBtnLink = styled(Link)`
  border-radius: 40px;
  background: transparent;
  border: 1px solid #256ce1;
  padding: 5px 22px;
  color: #256ce1;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #256ce1;
    color: #fff;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    border-radius: 0;
    margin-left: 0;
    vertical-align: bottom;
    &:hover {
      transition: all 0.2s ease-in-out;
      background: #256ce1;
      color: #fff;
    }
  }
`;

export const style = {
  Nav,
  NavbarContainer,
  NavLogo,
  NavBtnLink,
  NavItem,
  NavLink,
  NavMenu,
  MobileIcon,
};
