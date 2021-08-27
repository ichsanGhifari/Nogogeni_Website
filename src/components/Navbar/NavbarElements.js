import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Nav = styled.nav`
  height: 80px;
  /* background:black; */
  display: absolute;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-widht: 950px) {
    transisiton: 0.7s all ease;
    height: 50px;
  }
`;

export const Sidebar = styled.div`

  background-color: #1e1e1e;
  width: 20rem;
  overflow: hidden;
  width:max-content;
  position: fixed;
  top: -90%;
  left: 0;
  transition: 0.5s ease-in-out;
  /* transition-timing-function:cubic-bezier(1,.01,.57,.34); */
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  left: ${({ isOpen }) => (isOpen ? "-9rem" : "10rem")};
  height:${({ isOpen }) => (isOpen ? "100vh":"0")};
  padding: ${({isOpen}) => (isOpen?"7rem 2.5rem":"0 0")};

`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  width: 100%;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: -10%;
    right: 0%;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: left;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkR)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-style: italic;
  font-weight: normal;
  padding: 0 1rem;
  height: 50%;
  margin-top: 1.25rem;
  cursor: pointer;

  &.active {
    border-bottom: 10px solid #01bf71;
  }
  &:hover {
  }
`;
export const NavLinksChild = styled(LinkR)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-style: italic;
  font-weight: normal;
  height: fit-content;
  cursor: pointer;

  &.active {
    border-bottom: 10px solid #01bf71;
  }
  &:hover {
  }
`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
