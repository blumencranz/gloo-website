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
`;

const LinkButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
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

const HeuristicEvaluation = () => {
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
          src="https://drive.google.com/file/d/1u4WcSIkKfvLzF3sJz-vQQD5z9gTTfEB2/preview"
          width="100%"
          height="480"
          allow="autoplay"
          style={{ border: "none" }}
        ></iframe>
      </div>
    </SplitView>
  );
};

export default HeuristicEvaluation;
