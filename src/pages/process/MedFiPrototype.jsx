import React from "react";
import styled from "styled-components";
import Link from "@material-ui/core/Link";

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
      <Link
        href="https://www.figma.com/proto/fOpsMCTOCVcIZfkPUBPBQ9/Gloo?node-id=126-1643&node-type=canvas&t=KMCFKSR24AQLD6BN-1&scaling=scale-down&content-scaling=fixed&page-id=126%3A1626&starting-point-node-id=126%3A1627"
        onClick={() => {
            alert("Redirecting to Figma Prototype");
        }}
      >
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
