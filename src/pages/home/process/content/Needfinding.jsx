import React from "react";
import styled from "styled-components";
import { theme } from "../../../../styles/theme";
import driveLogo from "../../../../assets/driveLogo.png";
import {
  SplitView,
  LinkButton,
  LinkButtons,
  ButtonLogo,
  ParentDiv,
  ChildDiv,
  Title,
} from "../../../../styles/StyledComponents";

const title = `
  Needfinding 1
`;

const description = `
  Our first assignment to learn about Design Discovery and the Needfinding Process
`;

const Needfinding = () => {
  return (
    <SplitView>
      <ParentDiv>
        <ChildDiv>
          <Title>{title}</Title>
          <p>{description}</p>
        </ChildDiv>
        <LinkButtons>
          <LinkButton
            href="https://drive.google.com/file/d/1vGSzx_KheO5sCllmSOReZ0D_ZrVfBwe-/view?usp=sharing"
            target="_blank"
          >
            <ButtonLogo src={driveLogo} alt="Google Drive Logo" />
            Slides
          </LinkButton>
        </LinkButtons>
      </ParentDiv>
      <iframe
        src="https://drive.google.com/file/d/1vGSzx_KheO5sCllmSOReZ0D_ZrVfBwe-/preview"
        width="100%"
        height="480"
        allow="autoplay"
        style={{ border: "none" }}
        sandbox="allow-scripts allow-same-origin allow-popups"
      ></iframe>
    </SplitView>
  );
};

export default Needfinding;
