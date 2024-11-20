import React from "react";
import styled from "styled-components";
import { theme } from "../../../../styles/theme";
import figmaLogo from "../../../../assets/figmaLogo.png";

const SplitView = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 20px;
  padding-right: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

const LinkButtons = styled.div`
  display: flex;
  flex-direction: row;
  /* background-color: pink; */
  gap: 5px;
`;

const LinkButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  border-radius: 25px;
  background-color: ${theme.colors.button.normalInverted};
  color: ${theme.colors.text};
  text-decoration: none;
  font-size: 20px;
  height: 50px;
  gap: 10px;
  &:hover {
    background-color: ${theme.colors.button.hoverInverted};
  }
`;

const ButtonLogo = styled.img`
  height: 50%;
`;

const description = `
  Our Figma prototype to test our initial designs
`;

const MedFiPrototype = () => {
  return (
    <SplitView>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // backgroundColor: "blue",
          flex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // backgroundColor: "green",
            flex: 1,
          }}
        >
          <h1 style={{ marginBottom: "20px" }}>{"MedFi Prototype"}</h1>
          <p>{description}</p>
          <LinkButtons>
            <LinkButton
              href="https://www.figma.com/proto/fOpsMCTOCVcIZfkPUBPBQ9/Gloo?node-id=126-1627&node-type=canvas&t=EDP5xbU43GWxPGes-0&scaling=scale-down&content-scaling=fixed&page-id=126%3A1626&starting-point-node-id=126%3A1627"
              target="_blank"
            >
              <ButtonLogo src={figmaLogo} alt="Figma Logo" />
              Prototype
            </LinkButton>
            <LinkButton
              href="https://drive.google.com/file/d/1zewc7rZY_l9Cruz7ZP_GO9JLUxsYNGqE/view?usp=sharing"
              target="_blank"
            >
              README
            </LinkButton>
          </LinkButtons>
        </div>
      </div>
      <div style={{ display: "flex", flex: 2 }}>
        <iframe
          src="https://drive.google.com/file/d/1vNN0htBDS7cg40f1lM9bA1Atqapl7emg/preview"
          width="100%"
          height="480"
          allow="autoplay"
          style={{ border: "none" }}
        ></iframe>
      </div>
    </SplitView>
  );
};

export default MedFiPrototype;
