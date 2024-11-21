import styled from "styled-components";
import { theme } from "../../../styles/theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
  width: 100%;
  height: 100%;
  max-width: 1000px;
  padding: 0 50px;
  padding-top: 10px;
  gap: 10px;

  /* background-color: blue; */
`;

const ResponsiveIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  /* 
  @media (min-width: 768px) {
    width: 50%;
    height: 100%;
  } */
`;

export default function Prototype() {
  return (
    <>
      <Container>
        <h2 style={{ textAlign: "center" }}>Watch our Video!</h2>
        <ResponsiveIframe
          src="https://www.youtube.com/embed/dpXmXKQ6bqY"
          allow="autoplay; fullscreen"
        ></ResponsiveIframe>
      </Container>
    </>
  );
}
