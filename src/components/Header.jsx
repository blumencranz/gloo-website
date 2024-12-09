import React from "react";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import headerImage from "../assets/Logo.png";
import { theme } from "../styles/theme";
import figmaLogo from "../assets/figmaLogo.png";

// Styled Components
const HeaderParent = styled.div`
  /* height: calc(100vh - 50px); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;

const HeaderContainer = styled.header`
  width: 100%;
  height: calc(100vh - 50px);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  /* position: relative; */
  z-index: 999;

  /* background-color: red; */

  @media (max-width: 1345px) {
    flex-direction: column;
    padding-bottom: 60px;
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
  height: 400px; /* Ensure the image takes 75% of the height */
  /* background-color: blue; */
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 2;
  padding: 0 10vw;

  @media (max-width: 1345px) {
    flex: 0;
  }
  @media (max-width: 768px) {
    padding: 0;
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

const ScrollDownText = styled(ScrollLink)`
  position: absolute;
  bottom: 20px;
  padding-bottom: 10px;
  font-size: 1.2rem;
  color: ${theme.colors.text};
  cursor: pointer;
  text-align: center;

  @media (max-width: 1345px) {
    /* display: none; */
  }
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
              href="/class/cs147/projects/AI-in-Classroom/Gloo/content/HiFiPrototype/qr.png"
              target="_blank"
            >
              {/* <ButtonLogo src={figmaLogo} alt="Figma Logo" /> */}
              Prototype
            </LinkButton>
            <LinkButton
              href="/class/cs147/projects/AI-in-Classroom/Gloo/content/HiFiPrototype/README.pdf"
              target="_blank"
            >
              README
            </LinkButton>
          </LinkButtons>
        </TitleContainer>
        <ImageContainer>
          <HeaderImage src={headerImage} alt="Header Image" />
        </ImageContainer>
        <ScrollDownText to="about" smooth={true} duration={1000} offset={-50}>
          Scroll Down ⇣
        </ScrollDownText>
      </HeaderContainer>
    </HeaderParent>
  );
};

export default Header;
