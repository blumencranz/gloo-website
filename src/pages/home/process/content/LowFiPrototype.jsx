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
  LoFi Prototype
`;

const description = `
  Our paper prototype, quick and dirty for rapid user testing.
`;

const LofiPrototype = () => {
  return (
    <SplitView>
      <ParentDiv>
        <ChildDiv>
          <Title>{title}</Title>
          <p>{description}</p>
        </ChildDiv>
        <LinkButtons>
          <LinkButton
            // href="https://drive.google.com/file/d/1pYS8Xcm2KmIDvZ2UP8ImGEAVz5XaaVVQ/view?usp=sharing"
            href="/class/cs147/projects/AI-in-Classroom/Gloo/content/LowFiPrototype/lowFiPrototype.pdf"
            target="_blank"
          >
            {/* <ButtonLogo src={driveLogo} alt="Google Drive Logo" /> */}
            Slides (pdf)
          </LinkButton>
          <LinkButton
            // href="https://drive.google.com/file/d/1pYS8Xcm2KmIDvZ2UP8ImGEAVz5XaaVVQ/view?usp=sharing"
            href="/class/cs147/projects/AI-in-Classroom/Gloo/content/LowFiPrototype/lowFiPrototype.pptx"
            target="_blank"
          >
            {/* <ButtonLogo src={driveLogo} alt="Google Drive Logo" /> */}
            Slides (pptx)
          </LinkButton>
        </LinkButtons>
      </ParentDiv>
      {/* <iframe
        src="https://drive.google.com/file/d/1pYS8Xcm2KmIDvZ2UP8ImGEAVz5XaaVVQ/preview"
        width="100%"
        height="480"
        allow="autoplay"
        style={{ border: "none" }}
        sandbox="allow-scripts allow-same-origin allow-popups"
      ></iframe> */}
    </SplitView>
  );
};

export default LofiPrototype;
