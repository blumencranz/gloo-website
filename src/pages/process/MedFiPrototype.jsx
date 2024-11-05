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
  margin: 10px 0;
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 1280px;
  height: 720px;
`;

const MedFiPrototype = () => {
  return (
    <Container>
      <Title>A6 MedFi Prototype!</Title>
      <a
        href="https://www.figma.com/proto/fOpsMCTOCVcIZfkPUBPBQ9/Gloo?node-id=126-1627&node-type=canvas&t=EDP5xbU43GWxPGes-0&scaling=scale-down&content-scaling=fixed&page-id=126%3A1626&starting-point-node-id=126%3A1627"
        target="_blank"
        rel="noopener noreferrer"
      >
        <u>Link to Figma Prototype</u>
      </a>
      <StyledIframe
        src="https://drive.google.com/file/d/1vNN0htBDS7cg40f1lM9bA1Atqapl7emg/preview"
        width="1280"
        height="960"
        allow="autoplay"
      ></StyledIframe>
    </Container>
  );
};

export default MedFiPrototype;
