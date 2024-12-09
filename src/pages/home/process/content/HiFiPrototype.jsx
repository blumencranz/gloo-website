import React from "react";
import styled from "styled-components";
import { theme } from "../../../../styles/theme";
import {
  SplitView,
  LinkButton,
  LinkButtons,
  ButtonLogo,
  Title,
  ChildDiv,
  ParentDiv,
} from "../../../../styles/StyledComponents";
import figmaLogo from "../../../../assets/figmaLogo.png";
import driveLogo from "../../../../assets/driveLogo.svg";

const title = `
  High Fidelity Prototype
`;

const description = `
  Transforming our Figma mockup into a functional React Native app.
`;

const HiFiPrototype = () => {
  return (
    <SplitView>
      <ParentDiv>
        <ChildDiv>
          <Title>{title}</Title>
          <p>{description}</p>
        </ChildDiv>
        <LinkButtons>
          <LinkButton
            // href="https://drive.google.com/file/d/1vNN0htBDS7cg40f1lM9bA1Atqapl7emg/view?usp=sharing"
            href="/class/cs147/projects/AI-in-Classroom/Gloo/content/HiFiPrototype/slides.pdf"
            target="_blank"
          >
            {/* <ButtonLogo src={driveLogo} alt="Google Drive Logo" /> */}
            Slides (pdf)
          </LinkButton>
          <LinkButton
            // href="https://drive.google.com/file/d/1vNN0htBDS7cg40f1lM9bA1Atqapl7emg/view?usp=sharing"
            href="/class/cs147/projects/AI-in-Classroom/Gloo/content/HiFiPrototype/slides.pptx"
            target="_blank"
          >
            {/* <ButtonLogo src={driveLogo} alt="Google Drive Logo" /> */}
            Slides (pptx)
          </LinkButton>
          <LinkButton
            href="/class/cs147/projects/AI-in-Classroom/Gloo/content/HiFiPrototype/qr.png"
            target="_blank"
          >
            {/* <ButtonLogo src={figmaLogo} alt="Figma Logo" /> */}
            Prototype
          </LinkButton>
          <LinkButton
            href="/class/cs147/projects/AI-in-Classroom/Gloo/content/HiFiPrototype/README.pdf"
            target="_blank"
          >
            README
          </LinkButton>
        </LinkButtons>
      </ParentDiv>
      {/* <iframe
        src="https://drive.google.com/file/d/1vNN0htBDS7cg40f1lM9bA1Atqapl7emg/preview"
        width="100%"
        height="480"
        allow="autoplay"
        style={{ border: "none" }}
        sandbox="allow-scripts allow-same-origin allow-popups"
      ></iframe> */}
    </SplitView>
  );
};

export default HiFiPrototype;
