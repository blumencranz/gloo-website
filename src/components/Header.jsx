import React from "react";
import styled from "styled-components";

// CITATION: `HeaderContainer generated using Copilot`
const HeaderContainer = styled.header`
  width: 100%;
  max-width: 1500px;
  height: 35vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  @media (max-width: 1345px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
`;

// CITATION: `ImageContainer generated using Copilot`
const ImageContainer = styled.div`
  background-image: url("/header2.png");
  background-size: cover; // Changed from contain to cover
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
`;

// CITATION: `TextContainer generated using Copilot`
const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

// CITATION: `HeaderText generated using Copilot`
const HeaderText = styled.h1`
  color: black;
  font-size: 4rem;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

// CITATION: `Header generated using Copilot`
const Header = () => {
  return (
    <HeaderContainer>
      <TextContainer>
        <HeaderText>Hello, Gloo!</HeaderText>
      </TextContainer>
      <ImageContainer />
    </HeaderContainer>
  );
};

export default Header;
