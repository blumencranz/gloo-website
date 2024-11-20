// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";

import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <Home />
    </ThemeProvider>
  );
};

export default App;
