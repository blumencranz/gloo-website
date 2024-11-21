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
import driveLogo from "../../../../assets/driveLogo.png";
import excelLogo from "../../../../assets/excelLogo.png";

const title = `
  Heuristic Evaluation
`;

const description = `
  Our heuristic evaluation
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
            href="https://drive.google.com/file/d/1u4WcSIkKfvLzF3sJz-vQQD5z9gTTfEB2/view?usp=sharing"
            target="_blank"
          >
            <ButtonLogo src={driveLogo} alt="Google Drive Logo" />
            Sheet
          </LinkButton>
          <LinkButton
            href="https://drive.google.com/uc?export=download&id=1LAwUdg_5H7J2yItQoyvutY5oU0AnhzSd"
            target="_blank"
          >
            <ButtonLogo src={excelLogo} alt="Excel Logo" />
            XLSX
          </LinkButton>
        </LinkButtons>
      </ParentDiv>
      <iframe
        src="https://drive.google.com/file/d/1u4WcSIkKfvLzF3sJz-vQQD5z9gTTfEB2/preview"
        width="100%"
        height="480"
        allow="autoplay"
        style={{ border: "none" }}
      ></iframe>
    </SplitView>
  );
};

export default HeuristicEvaluation;
