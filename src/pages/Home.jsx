// src/pages/Home.jsx
import React from "react";
import Header from "../components/Header";
import Process from "../components/Process";
import styled, { css } from "styled-components";
import { Element } from "react-scroll";
import Navbar from "../components/Navbar";
import Team from "../components/Team";

const sectionStyles = {
  header: css`
    background-color: #ffffff;
    min-height: auto;
    /* box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); // Bigger diffusion and only on the bottom */
    z-index: 1; // Ensure header is on top
    position: relative; // Required for z-index to work
  `,
  process: css`
    background-color: #ededff;
    min-height: 100vh;
    display: flex;
    justify-content: flex-start;
  `,
  team: css`
    /* background-color: #f86464; */
    min-height: 100vh;
    justify-content: center;
    align-items: center;
  `,
};

const Section = styled(Element)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: white;
  font-size: 2rem;
  ${({ sectionType }) => sectionStyles[sectionType]}
`;

const Home = (props) => {
  console.log("Rendering Home Component"); // Debugging log

  return (
    <div style={{ marginTop: "60px" }}>
      <Section name="header" sectionType="header">
        <Header />
      </Section>
      {/* <Section name="prototype" sectionType="prototype"></Section> */}
      <Section name="process" sectionType="process">
        <Process />
      </Section>
      <Section name="team" sectionType="team">
        <Team />
      </Section>
    </div>
  );
};

export default Home;
