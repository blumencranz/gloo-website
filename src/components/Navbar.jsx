// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// Navbar container with a fixed position
const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  background-color: #898dff;
  padding: 0 20px;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

// Logo component
const Logo = styled.div`
  font-size: 36px;
  font-weight: bold;
`;

// Hamburger icon, hidden on larger screens
const Hamburger = styled.div`
  font-size: 30px;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

// Navigation links container, with animation for mobile
const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  /* transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out; */
  opacity: 1;
  max-height: 200px;

  @media (max-width: 768px) {
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #898dff;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    opacity: ${(props) => (props.$isOpen ? 1 : 0)};
    max-height: ${(props) => (props.$isOpen ? "200px" : "0px")};
    pointer-events: ${(props) => (props.$isOpen ? "auto" : "none")};
  }
`;

// Individual nav item with styles for active state
const NavItem = styled(ScrollLink)`
  text-decoration: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &.active {
    font-weight: bold;
    text-decoration: underline;
  }

  &:hover {
    color: lightgray;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <NavbarContainer>
      <Logo>Gloo</Logo>
      <Hamburger onClick={toggleMenu}>☰</Hamburger>
      <NavLinks $isOpen={isOpen}>
        <NavItem
          to="header"
          smooth="easeInOutCubic"
          spy={true}
          duration={1000}
          activeClass="active"
          offset={-60}
        >
          Home
        </NavItem>
        <NavItem
          to="process"
          smooth="easeInOutCubic"
          spy={true}
          duration={1000}
          activeClass="active"
          offset={-60}
        >
          Process
        </NavItem>
        <NavItem
          to="team"
          smooth="easeInOutCubic"
          spy={true}
          duration={1000}
          activeClass="active"
          offset={-60}
        >
          Team
        </NavItem>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
