// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/Logo.png";
import { theme } from "../styles/theme";

const NAVBAR_HEIGHT_NUMBER = 50;
const NAVBAR_HEIGHT = `${NAVBAR_HEIGHT_NUMBER}px`;

// Navbar container with a fixed position
const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* Change to space-between for better layout */
  height: ${NAVBAR_HEIGHT};
  background-color: #f2dcc1;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
`;

// Logo component
const Logo = styled(ScrollLink)`
  height: 100%; /* Ensure the logo takes the full height of the navbar */
  cursor: pointer;
  display: flex;
  align-items: center; /* Center the logo vertically */
  justify-content: center; /* Center the logo horizontally */
  color: ${theme.colors.text};
  font-size: 27px; /* Explicitly set the font size */
  img {
    height: 90%; /* Ensure the image takes the full height of the logo container */
    width: auto; /* Maintain the aspect ratio */
  }
  h1 {
    margin: 0; /* Remove default margin */
    line-height: 1; /* Ensure the text is vertically centered */
    color: ${theme.colors.text}; /* Ensure the text color is set */
    font-size: inherit; /* Inherit the font size from the parent */

    &:hover {
      color: ${theme.colors
        .text}; /* Ensure the text color does not change on hover */
    }
  }
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
  justify-content: center;
  gap: 20px;
  opacity: 1;
  max-height: 200px;

  @media (max-width: 768px) {
    position: absolute;
    top: ${NAVBAR_HEIGHT};
    left: 0;
    width: 100%;
    background-color: ${theme.colors.secondary};
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
  color: ${theme.colors.text};
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &.active {
    font-weight: bold;
    text-decoration: underline;
  }

  &:hover {
    color: black;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <NavbarContainer>
      <Logo
        to="header"
        smooth="easeInOutCubic"
        spy={true}
        duration={1000}
        offset={-NAVBAR_HEIGHT_NUMBER}
      >
        <img src={logo} alt="Logo" />
        <h1>Gloo</h1>
      </Logo>
      <Hamburger onClick={toggleMenu}>☰</Hamburger>
      <NavLinks $isOpen={isOpen}>
        <NavItem
          to="prototype"
          smooth="easeInOutCubic"
          spy={true}
          duration={1000}
          activeClass="active"
          offset={-NAVBAR_HEIGHT_NUMBER}
        >
          Prototype
        </NavItem>
        <NavItem
          to="process"
          smooth="easeInOutCubic"
          spy={true}
          duration={1000}
          activeClass="active"
          offset={-NAVBAR_HEIGHT_NUMBER}
        >
          Process
        </NavItem>
        <NavItem
          to="team"
          smooth="easeInOutCubic"
          spy={true}
          duration={1000}
          activeClass="active"
          // offset={-NAVBAR_HEIGHT_NUMBER}
        >
          Team
        </NavItem>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
