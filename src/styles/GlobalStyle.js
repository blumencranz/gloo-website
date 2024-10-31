import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* CSS Reset */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Body Styles */
  body {
    font-family: ${(props) => props.theme.fonts.body}, sans-serif;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    line-height: 1.6;
    overflow-x: hidden;
  }

  /* Hide Scrollbar */
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  /* For Firefox */
  body {
    scrollbar-width: none; /* Hide scrollbar */
  }

  /* For Internet Explorer, Edge */
  body {
    -ms-overflow-style: none; /* Hide scrollbar */
  }

  /* Apply theme text color to all text elements */
  h1, h2, h3, h4, h5, h6, p, span, div, li, a {
    color: ${(props) => props.theme.colors.text};
  }

  /* Anchor Tag Styling */
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};
    transition: color 0.2s ease-in-out;
    
    &:hover {
      color: ${(props) => props.theme.colors.secondary};
    }
  }

  /* Button Styling */
  button {
    cursor: pointer;
    font-family: inherit;
    border: none;
    padding: ${(props) => props.theme.spacing.medium};
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    
    &:hover {
      background-color: ${(props) => props.theme.colors.secondary};
    }
  }

  /* Headings */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.fonts.heading};
    margin-bottom: ${(props) => props.theme.spacing.small};
    line-height: 1.2;
  }

  /* Layout Container */
  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: ${(props) => props.theme.spacing.medium};
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
    
    h1 {
      font-size: 2rem;
    }
    
    button {
      padding: ${(props) => props.theme.spacing.small};
    }
  }
`;

export default GlobalStyle;
