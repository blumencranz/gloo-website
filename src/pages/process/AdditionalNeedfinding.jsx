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

const AdditionalNeedfinding = () => {
  return (
    <Container>
      <Title>A2 Additional Needfinding!</Title>
      <StyledIframe
        src="https://drive.google.com/file/d/1cY_W_m7o8mS-7tHqx4Y_j7CnA0njPBq7/preview"
        width="1280"
        height="960"
        allow="autoplay"
      ></StyledIframe>
    </Container>
  );
};

export default AdditionalNeedfinding;
