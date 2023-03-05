import {
  Avatar,
  Box,
  Button,
  Container,
  createTheme,
  CssBaseline,
  TextField,
  ThemeProvider,
} from "@mui/material";
import React, { useState } from "react";
import Copyright from "../utils/Copyright";
import Theme from "../utils/Theme";
import usePost from "../hooks/usePost";
import Config from "../Config.json";
import { useNavigate } from "react-router-dom";
import "../App.css";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

export default function Register() {
  const theme = createTheme(Theme);
  const { post } = usePost(`${Config.SERVER_URL}/api/user`);
  const [errors, setErrors] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault();

    await post({
      username: e.target[0].value,
      password: e.target[2].value
    }).then( (result) => {
      if(result === 226){
        setErrors({...errors, userExists: true});
      } else {
        setErrors({...errors, userExists: false});

        console.log(result);
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
              <HowToRegIcon />
            </Avatar>

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
                id="email"
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

              <TextField
                margin="normal"
                required
                fullWidth
                name="email"
                label="Email"
                type="email"
                id="email"
                autoComplete="current-email"
              />
              {errors.userExists ? (
                <div className="_error">
                  <WarningAmberIcon style={{ fontSize: "1.2rem" }} />
                  <span className="_error-text">
                    User already exists
                  </span>
                </div>
              ) : null}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}
