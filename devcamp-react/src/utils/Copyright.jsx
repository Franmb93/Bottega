import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/Franmb93">
          Capstone Franmb93 Github
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }