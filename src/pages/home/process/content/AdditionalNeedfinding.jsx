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
} from "../../../../styles/StyledComponents";
import driveLogo from "../../../../assets/driveLogo.png";

const Title = styled.h3`
  margin-bottom: 5px;
  flex-shrink: 1;
  word-wrap: break-word;
`;

const title = `
  Needfinding 2
`;

const description = `
  Our second assignment to refine the Needfinding Process and test our assumptions
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
            href="https://drive.google.com/file/d/1cY_W_m7o8mS-7tHqx4Y_j7CnA0njPBq7/view?usp=sharing"
            target="_blank"
          >
            <ButtonLogo src={driveLogo} alt="Google Drive Logo" />
            Slides
          </LinkButton>
        </LinkButtons>
      </ParentDiv>
      <iframe
        src="https://drive.google.com/file/d/1cY_W_m7o8mS-7tHqx4Y_j7CnA0njPBq7/preview"
        width="100%"
        height="480"
        allow="autoplay"
        style={{ border: "none" }}
        sandbox="allow-scripts allow-same-origin allow-popups"
      ></iframe>
    </SplitView>
  );
};

export default AdditionalNeedfinding;
