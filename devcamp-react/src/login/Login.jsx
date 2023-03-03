import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  createTheme,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Copyright from "../utils/Copyright";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Theme from "../utils/Theme";
import usePost from "../hooks/usePost";
import Config from "../Config.json";
import secureLocalStorage from "react-secure-storage";
import { useNavigate } from "react-router-dom";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import "../App.css";

export default function Login() {
  const theme = createTheme(Theme);
  const navigate = useNavigate();
  const { post } = usePost(`${Config.SERVER_URL}/api/login`);

  const [loginStatus, setloginStatus] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await post({
      username: e.target[0].value,
      password: e.target[2].value,
    }).then((result) => {
      if (result === 401) {
        setloginStatus(result);
      } else {
        secureLocalStorage.setItem("username", result.username);
        secureLocalStorage.setItem("authToken", result.authToken);
        navigate("/home");
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
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
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
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
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

              <Grid container direction="column" alignItems="center">
                <Grid item xs>
                  <Link href="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}
