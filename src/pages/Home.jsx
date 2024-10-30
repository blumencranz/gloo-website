// src/pages/Home.jsx
import React from "react";
import Header from "../components/Header";
import Process from "../components/Process";

import styled from "styled-components";
import { Element } from "react-scroll";
import Navbar from "../components/Navbar";

const Section = styled(Element)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${(props) => props.$bgColor || "#333"};
  color: white;
  font-size: 2rem;
  min-height: ${({ name }) =>
    name === "header"
      ? "auto"
      : "100vh"}; /* Ensure each section takes up at least the full viewport height unless it's the header */
`;

const Home = (props) => {
  console.log("Rendering Home Component"); // Debugging log

  return (
    <>
      <Section name="header" $bgColor="#ffffff">
        <Header />
      </Section>
      {/* <Section name="prototype" $bgColor="#9399ff"></Section> */}
      <Section name="process" $bgColor="#23ff9c">
        <Process />
      </Section>
      <Section name="team" $bgColor="#f86464"></Section>
    </>
  );
};

export default Home;
