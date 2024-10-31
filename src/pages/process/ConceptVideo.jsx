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

const DownloadLink = styled.a`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ConceptVideo = () => {
  return (
    <Container>
      <Title>Concept Video!</Title>
      <StyledIframe
        src="https://drive.google.com/file/d/10Y6gd9Txwm0Hv5C3esRebUWQqNAzE_aX/preview"
        allow="autoplay"
      ></StyledIframe>
      <StyledIframe
        src="https://www.youtube.com/embed/dpXmXKQ6bqY"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></StyledIframe>
      <DownloadLink
        href="https://drive.google.com/uc?export=download&id=1AcpTAd_AYcWXjV4BF6DsO-puU4g2sN4C"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Video (Direct)
      </DownloadLink>
    </Container>
  );
};

export default ConceptVideo;
