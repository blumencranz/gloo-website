// src/pages/Home.jsx
import React from "react";
import Header from "../components/Header";
import Process from "../components/Process";

import styled from "styled-components";
import { Element } from "react-scroll";

const Section = styled(Element)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${({ bgColor }) => bgColor || "#333"};
  color: white;
  font-size: 2rem;
  border: 1px solid white;
  min-height: ${({ name }) =>
    name === "header"
      ? "auto"
      : "100vh"}; /* Ensure each section takes up at least the full viewport height unless it's the header */
`;

const Home = (props) => {
  console.log("Rendering Home Component"); // Debugging log

  return (
    <>
      <Section name="header" bgColor="#ffffff">
        <Header />
      </Section>
      <Section name="process" bgColor="#9399ff">
        <Process />
      </Section>
    </>
  );
};

export default Home;
