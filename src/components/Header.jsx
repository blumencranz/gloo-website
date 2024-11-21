import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import headerImage from "../assets/Logo.png";
import { theme } from "../styles/theme";
import figmaLogo from "../assets/figmaLogo.png";

// Styled Components
const HeaderParent = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;

  @media (max-width: 1345px) {
    height: 40vh;
  }
`;

const HeaderContainer = styled.header`
  width: 100%;
  height: calc(100vh - 50px); /* Assuming navbar height is 50px */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  position: relative; /* Ensure positioning context for ScrollDownText */
  z-index: 999;

  @media (max-width: 1345px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex: 2;
  width: 100%; /* Ensure it takes full width in column layout */
  @media (max-width: 1345px) {
    display: none;
  }
`;

const HeaderImage = styled.img`
  width: 75%; /* Ensure the image takes 75% of the height */
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 2;
`;

const ScrollDownText = styled(ScrollLink)`
  position: absolute;
  bottom: 20px; /* Position it 20px from the bottom */
  font-size: 1.2rem;
  color: ${theme.colors.text};
  cursor: pointer;

  @media (max-width: 768px) {
    display: none; /* Hide the text on small screens */
  }
`;

const LinkButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 25px;
  margin-bottom: 10px;
  padding: 20px 0;
  width: 100%;
  background-color: ${theme.colors.primary};
  /* box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2); */
`;

const LinkButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  border-radius: 25px;
  width: 150px;
  background-color: ${theme.colors.button.normal};
  color: ${theme.colors.text};
  text-decoration: none;
  font-size: 20px;
  height: 50px;
  gap: 10px;
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  &:hover {
    background-color: ${(props) =>
      props.disabled
        ? theme.colors.button.disabled
        : theme.colors.button.hover};
  }
`;

const ButtonLogo = styled.img`
  height: 50%;
`;

const Header = () => {
  return (
    <HeaderParent>
      <HeaderContainer>
        <TitleContainer>
          <h1>Hello, Gloo!</h1>
          <p>Making student-teacher connections that stick!</p>
          <LinkButtons>
            <LinkButton
              href="https://www.figma.com/proto/fOpsMCTOCVcIZfkPUBPBQ9/Gloo?node-id=126-1627&node-type=canvas&t=EDP5xbU43GWxPGes-0&scaling=scale-down&content-scaling=fixed&page-id=126%3A1626&starting-point-node-id=126%3A1627"
              target="_blank"
              disabled={true}
            >
              <ButtonLogo src={figmaLogo} alt="Figma Logo" />
              Prototype
            </LinkButton>
            <LinkButton href="" target="_blank" disabled={true}>
              README
            </LinkButton>
          </LinkButtons>
        </TitleContainer>
        <ImageContainer>
          <HeaderImage src={headerImage} alt="Header Image" />
        </ImageContainer>
        <ScrollDownText
          to="prototype"
          smooth={true}
          duration={1000}
          offset={-50}
        >
          Scroll Down ⇣
        </ScrollDownText>
      </HeaderContainer>
    </HeaderParent>
  );
};

export default Header;
