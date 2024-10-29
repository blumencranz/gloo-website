// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// Navbar container with a fixed position
const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  background-color: #485aff;
  padding: 0 20px;
  color: white;
  position: fixed; /* Change to fixed */
  top: 0; /* Fix to the top of the screen */
  left: 0;
  width: 100%; /* Ensure it spans the entire width */
  z-index: 1000; /* Ensure it stays above other content */
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
  display: flex; /* Always visible on larger screens */
  justify-content: center;
  gap: 20px;
  padding: 10px;
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
  opacity: 1;
  max-height: 200px;

  @media (max-width: 768px) {
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #6066ff;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    /* Transition-based visibility management */
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    max-height: ${({ isOpen }) => (isOpen ? "200px" : "0px")};
    pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
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
      <Hamburger onClick={toggleMenu}>☰</Hamburger>
      <NavLinks isOpen={isOpen}>
        <NavItem
          to="header"
          smooth="easeInOutCubic"
          spy={true}
          duration={500}
          activeClass="active"
        >
          Home
        </NavItem>
        <NavItem
          to="process"
          smooth="easeInOutCubic"
          spy={true}
          duration={500}
          activeClass="active"
        >
          Process
        </NavItem>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
