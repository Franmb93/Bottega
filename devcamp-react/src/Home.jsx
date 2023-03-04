import { Button, createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import './Home.scss';
import Footer from "./navigation/Footer";
import Navbar from "./navigation/NavBar";
import Theme from "./utils/Theme";


export default function Home(){

    const theme = createTheme(Theme);


    return(<>
    <div className="home">

      <header className="header">
        <div className="header__logo-box">
          <Navbar/>
        </div>

        <div className="header__text-box">
          <div className="heading-primary">
            <h1 className="heading-primary--main">Learn Together</h1>
            <h5 className="heading-primary--sub">Find your study partner</h5>
          </div>
          <ThemeProvider theme={theme}>
            <Button className="header__button" variant="outlined" color="secondary">Start</Button>
        </ThemeProvider>
        </div>
      </header>
      <Footer></Footer>
    </div>
    </>);
}