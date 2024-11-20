import React from "react";
import styled from "styled-components";
import headerImage from "/src/assets/duck.png";

// Styled Components
const HeaderContainer = styled.header`
  width: 100%;
  height: 500px; /* Set a specific height for the header */
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: red; */
  gap: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); */
  z-index: 999;

  @media (max-width: 1345px) {
    flex-direction: column;
    height: auto; /* Adjust height for column layout */
  }
`;

const ImageContainer = styled.div`
  /* background-color: aliceblue; */
  justify-content: center;
  align-items: center;
  display: flex;
  flex: 2;
  width: 100%; /* Ensure it takes full width in column layout */
  @media (max-width: 1345px) {
    height: 300px; /* Set a fixed height for column layout */
  }
`;

const HeaderImage = styled.img`
  max-height: 500px; /* Ensure the image does not exceed the container height */
  width: 100%; /* Ensure the image takes full width */
  object-fit: contain; /* Ensure the image covers the container */

  @media (max-width: 1345px) {
    max-height: 300px; /* Set a fixed height for column layout */
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 2;
  /* width: 100%; */
`;

const Header = () => {
  return (
    <HeaderContainer>
      <TitleContainer>
        <h1>Hello, Gloo!</h1>
        <p>Making student-teacher connections that stick!</p>
      </TitleContainer>
      <ImageContainer>
        <HeaderImage src={headerImage} />
      </ImageContainer>
    </HeaderContainer>
  );
};

export default Header;
