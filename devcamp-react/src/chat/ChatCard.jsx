import {
  Box,
  Card,
  CardContent,
  CardMedia,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import avatar from "../img/avatar_01.jpg";
import Theme from "../utils/Theme";
import { RoomContext } from "./RoomContext";

let theme = createTheme(Theme);

export default function ChatCard({ id, image, title, content }) {
  const { roomId, setRoomId } = useContext(RoomContext);

  return (
    <>
      <Box
        sx={boxStyle}
        onClick={() => {
          console.log("ID???")
          console.log(id);
          setRoomId(id);
          console.log(roomId);
        }}
      >
        <Card sx={cardStyle}>
          <CardMedia
            sx={avatarStyle}
            component="img"
            alt="avatar_01"
            image={avatar}
          />
          <CardContent>
            <ThemeProvider theme={theme}>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="secondary">
                {content}
              </Typography>
            </ThemeProvider>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

const boxStyle = {
  width: "99%",
  transition: "0.2 ease",
};

const cardStyle = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#407088",
  color: "#ffb5b5",
  transition: "transform 0.2s ease-in-out",
  cursor: "pointer",
  [theme.breakpoints.up('sm')]: {
    flexDirection: "column",
  },
  "&:hover": {
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    backgroundColor: "#508dac",
  },
  "&:active": {
    width: "100%",
    height: "100%",
    background: "linear-gradient(#508dac, #407088)",
    opacity: 0.9,
    transition: "opacity 0.1s ease-in-out",
  },
  "&:hover::after": {
    opacity: 1,
  },
};

const avatarStyle = {
  display: "inherit",
  borderRadius: "100%",
  height: "52px",
  width: "52px",
  [theme.breakpoints.up('sm')]: {
    height: "72px",
    width: "72px",
  },
};
