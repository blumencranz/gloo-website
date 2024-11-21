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
    z-index: 1;
  `,
  prototype: css`
    height: 90vh;
    background-color: ${theme.colors.secondary};
    padding-bottom: 20px;

    @media (max-width: 600px) {
      height: 45vh;
    }
  `,
  process: css``,
  team: css`
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.secondary};
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
      <Section name="prototype" sectionType="prototype">
        <Prototype />
      </Section>
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
