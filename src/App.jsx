import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Game from "./components/Game";
import Header from "./components/Header";
//theme e styled
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/theme";
import { GlobalStyled } from "./GlobalStyle";

const App = () => {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <GlobalStyled />
      <Header theme={theme} toggleTheme={themeToggler} />
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <Game />
      </ThemeProvider>
      <Footer />
    </>
  );
};

export default App;
