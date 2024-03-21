import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import Slider from "./Slider";
import { ButtonVM, invertTheme, theme } from "../style-components/themes";
import { Centrado } from "../style-components/Button";

const LetraA = styled.h3`
  color: white;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`

const LetraB = styled.h2`
  color: white;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="features">

        <Slider />
        <ThemeProvider theme={invertTheme}>
          
          <Centrado><LetraA>Bienvenido a MisterPhoneDroids</LetraA></Centrado>
          <Centrado><Link to="/search-page"><ButtonVM>Ver marcas</ButtonVM></Link></Centrado>
          <Centrado><LetraB>Solo los mejores android</LetraB></Centrado>
          
        </ThemeProvider>
      </div>
    </ThemeProvider>
  );
};

export default Home;
