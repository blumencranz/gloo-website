import React from "react";
import styled from "styled-components";
import { theme } from "../../../../styles/theme";
import {
  SplitView,
  LinkButton,
  LinkButtons,
  Title,
  ButtonLogo,
  ChildDiv,
  ParentDiv,
} from "../../../../styles/StyledComponents";
import driveLogo from "../../../../assets/driveLogo.svg";
import youtubeLogo from "../../../../assets/youtubeLogo.png";

const ResponsiveDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex: 2;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const title = `
  Poster, Pitch, and Demo
`;

const description = `
  Presenting and demoing our final product.
`;

const PosterPitchDemo = () => {
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
            href="/class/cs147/projects/AI-in-Classroom/Gloo/content/PosterPitchDemo/pitch.pdf"
            target="_blank"
          >
            {/* <ButtonLogo src={driveLogo} alt="Google Drive Logo" /> */}
            Pitch (pdf)
          </LinkButton>
          <LinkButton
            // href="https://drive.google.com/file/d/1vNN0htBDS7cg40f1lM9bA1Atqapl7emg/view?usp=sharing"
            href="/class/cs147/projects/AI-in-Classroom/Gloo/content/PosterPitchDemo/pitch.pptx"
            target="_blank"
          >
            {/* <ButtonLogo src={driveLogo} alt="Google Drive Logo" /> */}
            Pitch (pptx)
          </LinkButton>
          <LinkButton
            // href="https://drive.google.com/file/d/1vNN0htBDS7cg40f1lM9bA1Atqapl7emg/view?usp=sharing"
            href="/class/cs147/projects/AI-in-Classroom/Gloo/content/PosterPitchDemo/script.pdf"
            target="_blank"
          >
            {/* <ButtonLogo src={driveLogo} alt="Google Drive Logo" /> */}
            Script (pdf)
          </LinkButton>
          <LinkButton
            // href="https://drive.google.com/file/d/1vNN0htBDS7cg40f1lM9bA1Atqapl7emg/view?usp=sharing"
            href="/class/cs147/projects/AI-in-Classroom/Gloo/content/PosterPitchDemo/poster.pptx"
            target="_blank"
          >
            {/* <ButtonLogo src={driveLogo} alt="Google Drive Logo" /> */}
            Poster (source)
          </LinkButton>
          <LinkButton
            // href="https://drive.google.com/file/d/1vNN0htBDS7cg40f1lM9bA1Atqapl7emg/view?usp=sharing"
            href="/class/cs147/projects/AI-in-Classroom/Gloo/content/PosterPitchDemo/poster.pdf"
            target="_blank"
          >
            {/* <ButtonLogo src={driveLogo} alt="Google Drive Logo" /> */}
            Poster (pdf)
          </LinkButton>
          <LinkButton
            href="https://www.youtube.com/watch?v=FFH4fFmhyvw"
            target="_blank"
          >
            <ButtonLogo src={youtubeLogo} alt="YouTube Logo" />
            YouTube
          </LinkButton>
          <LinkButton
            // href="https://drive.google.com/uc?export=download&id=1AcpTAd_AYcWXjV4BF6DsO-puU4g2sN4C"
            href="/class/cs147/projects/AI-in-Classroom/Gloo/content/PosterPitchDemo/demo.mp4"
            target="_blank"
            download
          >
            Download Video
          </LinkButton>
        </LinkButtons>
      </ParentDiv>
      <ResponsiveDiv>
        {/* <iframe
          src="https://www.youtube.com/embed/dpXmXKQ6bqY"
          width="100%"
          height="450"
          allow="autoplay"
          style={{ border: "none" }}
          sandbox="allow-scripts allow-same-origin allow-popups"
        ></iframe> */}
        <iframe
          width="100%"
          height="450"
          style={{ border: "none" }}
          src="https://www.youtube.com/embed/FFH4fFmhyvw?si=kWmvqRliVOJeUdgh"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        {/* <iframe
          // src="https://drive.google.com/file/d/10Y6gd9Txwm0Hv5C3esRebUWQqNAzE_aX/preview"
          width="100%"
          height="450"
          allow="autoplay"
          style={{ border: "none" }}
          sandbox="allow-scripts allow-same-origin allow-popups"
        ></iframe> */}
      </ResponsiveDiv>
    </SplitView>
  );
};

export default PosterPitchDemo;
