import { Box, createTheme, Grid, Link, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import Login from "../login/Login";
import Register from "../login/Register";
import ModalBasic from "../utils/ModalBasic";
import Theme from "../utils/Theme";

let theme = createTheme(Theme);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseRegister = () => {
    setOpenRegister(false);
  };

  return (
    <>
      <Box sx={style}>
        <ThemeProvider theme={theme}>
          <Grid container direction="row" wrap="nowrap">
            <Grid item xs={1}>
              <Link sx={linkStyle} color="secondary.dark" href="/home">
                {"Home"}
              </Link>
            </Grid>
            <Grid
              xs={12}
              md={10}
              lt={12}
              sx={gridResponsive}
              item
              container
              direction="row"
              justifyContent={"flex-end"}
            >
              <Grid item>
                <Link
                  color="secondary.dark"
                  sx={linkStyle}
                  onClick={() => setOpen(true)}
                >
                  {"LogIn"}
                </Link>
              </Grid>
              <Grid item>
                <Link
                  color="secondary.dark"
                  sx={linkStyle}
                  onClick={() => setOpenRegister(true)}
                >
                  {"Register"}
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </ThemeProvider>
        <ModalBasic
          title={"LogIn"}
          render={<Login></Login>}
          open={open}
          handleClose={handleClose}
        ></ModalBasic>
        <ModalBasic
          title={"Register"}
          render={<Register></Register>}
          open={openRegister}
          handleClose={handleCloseRegister}
        ></ModalBasic>
      </Box>
    </>
  );
}
const style = {
  position: "fixed",
  top: "5%",
  left: "5%",
  zIndex: 0,

  width: "100%",
  borderBottom: "1px solid black",

  height: "100%",
};

const linkStyle = {
  fontWeight: 900,
  letterSpacing: "4px",
  fontSize: ["0.8rem", "1rem", "1.5rem", "1.5rem"],
  textDecoration: "none",
  marginRight: ["2rem", "3rem", "4rem"],
  transition: "color 0.3s ease",
  cursor: "pointer",
  "&:hover": {
    color: "#ffcbcb",
  },
};

const gridResponsive = {
  display: "flex",
  flexDirection: "row",
  maxWidth: "100%",
  wrap: "nowrap",
};
