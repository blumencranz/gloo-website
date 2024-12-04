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
            href="/class/cs147/projects/AI-in-Classroom/Gloo/content/HiFiPrototype/hiFiPrototype.pdf"
            target="_blank"
            disabled={true}
          >
            {/* <ButtonLogo src={driveLogo} alt="Google Drive Logo" /> */}
            Slides (pdf)
          </LinkButton>
          <LinkButton
            // href="https://drive.google.com/file/d/1vNN0htBDS7cg40f1lM9bA1Atqapl7emg/view?usp=sharing"
            href="/class/cs147/projects/AI-in-Classroom/Gloo/content/HiFiPrototype/hiFiPrototype.pptx"
            target="_blank"
            disabled={true}
          >
            {/* <ButtonLogo src={driveLogo} alt="Google Drive Logo" /> */}
            Slides (pptx)
          </LinkButton>
          <LinkButton
            href="https://www.figma.com/proto/fOpsMCTOCVcIZfkPUBPBQ9/Gloo?node-id=126-1627&node-type=canvas&t=EDP5xbU43GWxPGes-0&scaling=scale-down&content-scaling=fixed&page-id=126%3A1626&starting-point-node-id=126%3A1627"
            target="_blank"
            disabled={true}
          >
            {/* <ButtonLogo src={figmaLogo} alt="Figma Logo" /> */}
            Prototype
          </LinkButton>
          <LinkButton
            href="https://drive.google.com/file/d/1zewc7rZY_l9Cruz7ZP_GO9JLUxsYNGqE/view?usp=sharing"
            target="_blank"
            disabled={true}
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
