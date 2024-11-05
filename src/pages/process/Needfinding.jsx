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
  color: #333;
  margin-bottom: 20px;
`;

const StyledIframe = styled.iframe`
  margin: 10px 0;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 1280px;
  height: 720px;
`;

const Needfinding = () => {
  return (
    <Container>
      <Title>A1 Needfinding!</Title>
      <StyledIframe
        src="https://drive.google.com/file/d/1vGSzx_KheO5sCllmSOReZ0D_ZrVfBwe-/preview"
        width="1280"
        height="960"
        allow="autoplay"
      ></StyledIframe>
    </Container>
  );
};

export default Needfinding;
