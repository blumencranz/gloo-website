import React from "react";
import styled from "styled-components";
import { theme } from "../../../../styles/theme";
import {
  SplitView,
  LinkButton,
  LinkButtons,
  ButtonLogo,
  ParentDiv,
  ChildDiv,
  Title,
} from "../../../../styles/StyledComponents";
import driveLogo from "../../../../assets/driveLogo.svg";
import excelLogo from "../../../../assets/excelLogo.png";

const title = `
  Heuristic Evaluation
`;

const description = `
  Design feedback and recommendations from other CS 147 students.
`;

const HeuristicEvaluation = () => {
  return (
    <SplitView>
      <ParentDiv>
        <ChildDiv>
          <Title>{title}</Title>
          <p>{description}</p>
        </ChildDiv>
        <LinkButtons>
          <LinkButton
            href="/class/cs147/projects/AI-in-Classroom/Gloo/content/HeuristicEvaluation/heuristicEvaluation.pdf"
            target="_blank"
          >
            {/* <ButtonLogo src={driveLogo} alt="Google Drive Logo" /> */}
            Sheet (pdf)
          </LinkButton>
          <LinkButton
            href="/class/cs147/projects/AI-in-Classroom/Gloo/content/HeuristicEvaluation/heuristicEvaluation.xlsx"
            target="_blank"
          >
            <ButtonLogo src={excelLogo} alt="Excel Logo" />
            Sheet (xlsx)
          </LinkButton>
        </LinkButtons>
      </ParentDiv>
      {/* <iframe
        src="https://drive.google.com/file/d/1u4WcSIkKfvLzF3sJz-vQQD5z9gTTfEB2/preview"
        width="100%"
        height="480"
        allow="autoplay"
        style={{ border: "none" }}
        sandbox="allow-scripts allow-same-origin allow-popups"
      ></iframe> */}
    </SplitView>
  );
};

export default HeuristicEvaluation;
