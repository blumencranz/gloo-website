import React from "react";
import styled from "styled-components";

// CITATION: `HeaderContainer generated using Copilot`
const HeaderContainer = styled.header`
  width: 100%;
  height: 55vh;
  background-image: url("/header.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 60px;
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
      <HeaderText>Meet the Gloo Crew!</HeaderText>
    </HeaderContainer>
  );
};

export default Header;
