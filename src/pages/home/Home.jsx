// src/pages/Home.jsx
import React from "react";
import Header from "../../components/Header";
import Process from "./process/Process";
import styled, { css } from "styled-components";
import { Element } from "react-scroll";
import Navbar from "../../components/Navbar";
import Team from "./team/Team";
import Prototype from "./prototype/Prototype";
import { theme } from "../../styles/theme";

const sectionStyles = {
  header: css`
    margin-top: ${theme.constants.navbarHeight};
    /* background-color: red; */
    /* box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); // Bigger diffusion and only on the bottom */
    z-index: 1; // Ensure header is on top
    /* position: relative; // Required for z-index to work */
  `,
  process: css`
    /* background-color: aqua; */
    /* min-height: 100vh;
    display: flex;
    justify-content: flex-start; */
  `,
  team: css`
    min-height: 100vh;
    justify-content: center;
    align-items: center;
  `,
};

const Section = styled(({ sectionType, ...props }) => <Element {...props} />)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: 2rem;
  ${({ sectionType }) => sectionStyles[sectionType]}
`;

const Home = () => {
  return (
    <>
      <Section name="header" sectionType="header">
        <Header />
      </Section>
      {/* <Section name="prototype" sectionType="prototype">
        <Prototype />
      </Section> */}
      <Section name="process" sectionType="process">
        <Process />
      </Section>
      <Section name="team" sectionType="team">
        <Team />
      </Section>
    </>
  );
};

export default Home;
