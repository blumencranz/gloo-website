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
import driveLogo from "../../../../assets/driveLogo.png";
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
  Concept Video
`;

const description = `
  Our concept video to show users what it feels like to use our app
`;

const ConceptVideo = () => {
  return (
    <SplitView>
      <ParentDiv>
        <ChildDiv>
          <Title>{title}</Title>
          <p>{description}</p>
        </ChildDiv>
        <LinkButtons>
          <LinkButton
            href="https://drive.google.com/file/d/10Y6gd9Txwm0Hv5C3esRebUWQqNAzE_aX/view?usp=sharing"
            target="_blank"
          >
            <ButtonLogo src={driveLogo} alt="Google Drive Logo" />
            Slides
          </LinkButton>
          <LinkButton
            href="https://drive.google.com/uc?export=download&id=1AcpTAd_AYcWXjV4BF6DsO-puU4g2sN4C"
            target="_blank"
          >
            Download Video
          </LinkButton>
          <LinkButton
            href="https://www.youtube.com/watch?v=dpXmXKQ6bqY"
            target="_blank"
          >
            <ButtonLogo src={youtubeLogo} alt="YouTube Logo" />
            YouTube
          </LinkButton>
        </LinkButtons>
      </ParentDiv>
      <ResponsiveDiv>
        <iframe
          src="https://www.youtube.com/embed/dpXmXKQ6bqY"
          width="100%"
          height="450"
          allow="autoplay"
          style={{ border: "none" }}
          sandbox="allow-scripts allow-same-origin allow-popups"
        ></iframe>
        <iframe
          src="https://drive.google.com/file/d/10Y6gd9Txwm0Hv5C3esRebUWQqNAzE_aX/preview"
          width="100%"
          height="450"
          allow="autoplay"
          style={{ border: "none" }}
          sandbox="allow-scripts allow-same-origin allow-popups"
        ></iframe>
      </ResponsiveDiv>
    </SplitView>
  );
};

export default ConceptVideo;
