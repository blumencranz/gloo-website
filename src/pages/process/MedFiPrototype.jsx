import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
`;

const Title = styled.h1`
  font-size: 2em;
  color: #333;
  margin-bottom: 20px;
`;

const StyledIframe = styled.iframe`
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const MedFiPrototype = () => {
  return (
    <Container>
      <Title>MedFiPrototype!</Title>
      <StyledIframe
        src="https://drive.google.com/file/d/1vNN0htBDS7cg40f1lM9bA1Atqapl7emg/view"
        width="1280"
        height="960"
        allow="autoplay"
      ></StyledIframe>
    </Container>
  );
};

export default MedFiPrototype;
