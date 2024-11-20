import React from "react";
import styled from "styled-components";
import { theme } from "../../../../styles/theme";

const SplitView = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 20px;
  padding-right: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

const LinkButtons = styled.div`
  display: flex;
  flex-direction: row;
  /* background-color: pink; */
  gap: 5px;
`;

const LinkButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  border-radius: 25px;
  background-color: ${theme.colors.button.normalInverted};
  color: ${theme.colors.text};
  text-decoration: none;
  font-size: 20px;
  height: 50px;
  &:hover {
    background-color: ${theme.colors.button.hoverInverted};
  }
`;

const description = `
  Our first assignment to learn about Design Discovery and the Needfinding Process
`;

const ConceptVideo = () => {
  return (
    <SplitView>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // backgroundColor: "blue",
          flex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // backgroundColor: "green",
            flex: 1,
          }}
        >
          <h1 style={{ marginBottom: "20px" }}>{"Concept Video"}</h1>
          <p>{description}</p>
          <LinkButtons>
            <LinkButton href="https://drive.google.com/uc?export=download&id=1AcpTAd_AYcWXjV4BF6DsO-puU4g2sN4C">
              Video Direct Download
            </LinkButton>
          </LinkButtons>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 2,
          gap: "10px",
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/dpXmXKQ6bqY"
          width="100%"
          height="480"
          allow="autoplay"
          style={{ border: "none" }}
        ></iframe>
        <iframe
          src="https://drive.google.com/file/d/10Y6gd9Txwm0Hv5C3esRebUWQqNAzE_aX/preview"
          width="100%"
          height="480"
          allow="autoplay"
          style={{ border: "none" }}
        ></iframe>
      </div>
    </SplitView>
  );
};

export default ConceptVideo;
