import {
  Avatar,
  Box,
  Button,
  Container,
  createTheme,
  CssBaseline,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Copyright from "../utils/Copyright";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Theme from "../utils/Theme";
import Config from "../Config.json";
import secureLocalStorage from "react-secure-storage";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import "../App.css";
import axios from "axios";

export default function Login() {
  const theme = createTheme(Theme);

  const [loginStatus, setloginStatus] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post(`${Config.SERVER_URL}/api/login`, {
        username: e.target[0].value,
        password: e.target[2].value,
      })
      .then((result) => {
        console.log(result);
        if (result === 401) {
          setloginStatus(result.status);
        } else {
          console.log(result.data);
          secureLocalStorage.setItem("id", result.data.id);
          secureLocalStorage.setItem("username", result.data.username);
          secureLocalStorage.setItem("authToken", result.data.authToken);

          window.location.pathname = '/';
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          setloginStatus(error.response.status);
        }
      });
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {loginStatus === 401 ? (
                <div className="_error">
                  <WarningAmberIcon style={{ fontSize: "1.2rem" }} />
                  <span className="_error-text">
                    Wrong username or password
                  </span>
                </div>
              ) : null}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}
