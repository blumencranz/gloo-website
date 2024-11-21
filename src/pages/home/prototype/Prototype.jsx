import styled from "styled-components";
import { theme } from "../../../styles/theme";
import { Link as ScrollLink } from "react-scroll";

const ScrollDownText = styled(ScrollLink)`
  /* position: absolute; */
  /* bottom: 20px; */
  font-size: 1.2rem;
  color: ${theme.colors.text};
  cursor: pointer;

  @media (max-width: 768px) {
    display: none; /* Hide the text on small screens */
  }
`;

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
          sandbox="allow-scripts allow-same-origin allow-popups"
        ></ResponsiveIframe>
        {/* <ScrollDownText to="process" smooth={true} duration={1000} offset={-50}>
          Scroll Down ⇣
        </ScrollDownText> */}
      </Container>
    </>
  );
}
