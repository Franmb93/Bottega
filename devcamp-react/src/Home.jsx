import { Button, createTheme, Link, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import secureLocalStorage from "react-secure-storage";
import "./Home.scss";
import Login from "./login/Login";
import Footer from "./navigation/Footer";
import Navbar from "./navigation/NavBar";
import ModalBasic from "./utils/ModalBasic";
import Theme from "./utils/Theme";

export default function Home() {
  const theme = createTheme(Theme);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="home">
        <header className="header">
          <div className="header__logo-box">
            <Navbar />
          </div>

          <div className="header__text-box">
            <div className="heading-primary">
              <h1 className="heading-primary--main">Learn Together</h1>
              <h5 className="heading-primary--sub">Find your study partner</h5>
            </div>
            <ThemeProvider theme={theme}>
              {secureLocalStorage.getItem("authToken") ? (
                <Link href="/application">
                  <Button
                    sx={{ cursor: "pointer" }}
                    className="header__button"
                    variant="outlined"
                    color="secondary"
                  >
                    Start
                  </Button>
                </Link>
              ) : (
                <Button
                  sx={{ cursor: "pointer" }}
                  className="header__button"
                  variant="outlined"
                  color="secondary"
                  onClick={() => setOpen(true)}
                >
                  Start
                </Button>
              )}
            </ThemeProvider>
          </div>
        </header>
        <Footer></Footer>
      </div>
      <ModalBasic
        title={"Login"}
        render={<Login></Login>}
        open={open}
        handleClose={handleClose}
      ></ModalBasic>
    </>
  );
}
