import React from "react";
import styled from "styled-components";
import { theme } from "../../../../styles/theme";
import {
  SplitView,
  LinkButton,
  LinkButtons,
  ButtonLogo,
  ChildDiv,
  ParentDiv,
  Title,
} from "../../../../styles/StyledComponents";
import driveLogo from "../../../../assets/driveLogo.svg";

const title = `
  Needfinding 2
`;

const description = `
  Our second assignment to refine the needfinding process and test our assumptions.
`;

const AdditionalNeedfinding = () => {
  return (
    <SplitView>
      <ParentDiv>
        <ChildDiv>
          <Title>{title}</Title>
          <p>{description}</p>
        </ChildDiv>
        <LinkButtons>
          <LinkButton
            href="/class/cs147/projects/AI-in-Classroom/Gloo/content/AdditionalNeedfinding/additionalNeedfinding.pdf"
            target="_blank"
          >
            {/* <ButtonLogo src={driveLogo} alt="Google Drive Logo" /> */}
            Slides (pdf)
          </LinkButton>
          <LinkButton
            href="/class/cs147/projects/AI-in-Classroom/Gloo/content/AdditionalNeedfinding/additionalNeedfinding.pptx"
            target="_blank"
          >
            {/* <ButtonLogo src={driveLogo} alt="Google Drive Logo" /> */}
            Slides (pptx)
          </LinkButton>
        </LinkButtons>
      </ParentDiv>
      {/* <iframe
        src="https://drive.google.com/file/d/1cY_W_m7o8mS-7tHqx4Y_j7CnA0njPBq7/preview"
        width="100%"
        height="480"
        allow="autoplay"
        style={{ border: "none" }}
        sandbox="allow-scripts allow-same-origin allow-popups"
      ></iframe> */}
    </SplitView>
  );
};

export default AdditionalNeedfinding;
